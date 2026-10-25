/* ============================================================
   LECTEUR DU GRIMOIRE : un clic sur « Lire le guide » ou « Consulter la page » ouvre le fichier
   en grand, sur tout l'écran (téléphone ou ordinateur). Il n'y a plus qu'à
   faire défiler pour voir toutes les pages, l'une sous l'autre.
   - Un PDF est dessiné page par page avec PDF.js (fonctionne aussi sur téléphone).
   - Des images (.png, .jpg…) s'empilent simplement.
   - Guides : le bouton « Télécharger » enregistre le fichier.
   - Pages d'aide (lecture seule, data-lecture="seule") : pas de bouton de téléchargement, dessin en haute qualité.
   - Sur téléphone, le bouton « Retour » ferme le lecteur au lieu de quitter le site.
   ============================================================ */
(function () {
  'use strict';

  var PDFJS = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
  var PDFJS_WORKER = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

  var mention = null, fenetre = null, barreTitre = null, boutonTelecharger = null, corps = null, pages = null;
  var jeton = 0;          // Change à chaque ouverture / fermeture pour ignorer les anciens dessins.
  var courant = null;     // Fichier ouvert : { liste, titre, seule }
  var viaHistorique = false;
  var libPdf = null;
  var largeurAffichee = 0;

  function t(fr) { return (window.GJ && window.GJ.t) ? window.GJ.t(fr) : fr; }
  function estPdf(url) { return /\.pdf($|[?#])/i.test(url); }

  /* Charge PDF.js seulement quand on en a besoin. */
  function chargerPdfJs() {
    if (libPdf) { return libPdf; }
    libPdf = new Promise(function (resolve, reject) {
      if (window.pdfjsLib) { resolve(window.pdfjsLib); return; }
      var s = document.createElement('script');
      s.src = PDFJS;
      s.onload = function () {
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER;
        resolve(window.pdfjsLib);
      };
      s.onerror = function () { libPdf = null; reject(new Error('pdfjs')); };
      document.head.appendChild(s);
    });
    return libPdf;
  }

  function creer() {
    fenetre = document.createElement('dialog');
    fenetre.className = 'reader';
    fenetre.setAttribute('aria-label', 'Lecteur du grimoire');
    fenetre.innerHTML =
      '<div class="reader-bar">' +
        '<div class="reader-heading"><p class="reader-title"></p><p class="reader-mention"></p></div>' +
        '<a class="reader-btn reader-download" download>↓ <span>Télécharger</span></a>' +
        '<button class="reader-btn reader-close" type="button">✕ <span>Fermer</span></button>' +
      '</div>' +
      '<div class="reader-body" tabindex="0"><div class="reader-pages"></div></div>';
    document.body.appendChild(fenetre);
    if (window.GJ && window.GJ.register) { window.GJ.register(fenetre); }
    barreTitre = fenetre.querySelector('.reader-title');
    mention = fenetre.querySelector('.reader-mention');
    boutonTelecharger = fenetre.querySelector('.reader-download');
    corps = fenetre.querySelector('.reader-body');
    pages = fenetre.querySelector('.reader-pages');

    fenetre.querySelector('.reader-close').addEventListener('click', function () { fenetre.close(); });
    fenetre.addEventListener('close', function () {
      jeton += 1;
      document.documentElement.classList.remove('reader-open');
      pages.textContent = '';
      if (!viaHistorique && history.state && history.state.gjReader) { history.back(); }
      viaHistorique = false;
    });
    window.addEventListener('popstate', function () {
      if (fenetre.open) { viaHistorique = true; fenetre.close(); }
    });

    /* Si on tourne le téléphone ou change la taille de la fenêtre, on redessine à la bonne largeur. */
    var attente = null;
    window.addEventListener('resize', function () {
      clearTimeout(attente);
      attente = setTimeout(function () {
        if (fenetre.open && courant && Math.abs(pages.clientWidth - largeurAffichee) > 40) { dessiner(); }
      }, 250);
    });
  }

  /* Lecture seule : pas de menu « enregistrer l'image » ni de glisser-déposer (ça ne bloque pas un utilisateur déterminé, mais ça décourage le geste machinal). */
  function protegerPage(e) {
    e.draggable = false;
    e.addEventListener('contextmenu', function (ev) { ev.preventDefault(); });
  }

  function statut(texte, lienUrl) {
    var p = document.createElement('p');
    p.className = 'reader-status';
    p.textContent = texte;
    if (lienUrl) {
      if (courant && courant.seule) { return p; }
      p.appendChild(document.createElement('br'));
      var a = document.createElement('a');
      a.href = lienUrl; a.target = '_blank'; a.rel = 'noopener noreferrer';
      a.textContent = t('Ouvrir le fichier') + ' ↗';
      p.appendChild(a);
    }
    return p;
  }

  async function dessinerPdf(url, mon) {
    var lib = await chargerPdfJs();
    var pdf = await lib.getDocument({ url: url }).promise;
    var dpr = Math.min(window.devicePixelRatio || 1, 3);
    if (courant.seule) { dpr = Math.max(dpr, 2); } // Pages d'aide : toujours très nette, même sur un écran standard.
    for (var n = 1; n <= pdf.numPages; n++) {
      if (mon !== jeton) { return; }
      var page = await pdf.getPage(n);
      if (mon !== jeton) { return; }
      var largeur = Math.max(pages.clientWidth - 28, 200);
      var base = page.getViewport({ scale: 1 });
      var echelle = largeur / base.width;
      var facteur = dpr;
      var maxPx = 5000; // Limite de sécurité pour ne pas saturer un téléphone.
      if (base.width * echelle * facteur > maxPx) { facteur = maxPx / (base.width * echelle); }
      var vue = page.getViewport({ scale: echelle * facteur });
      var canvas = document.createElement('canvas');
      canvas.width = Math.floor(vue.width);
      canvas.height = Math.floor(vue.height);
      canvas.style.width = largeur + 'px';
      canvas.style.height = Math.floor(vue.height / facteur) + 'px';
      if (courant.seule) { protegerPage(canvas); }
      await page.render({ canvasContext: canvas.getContext('2d'), viewport: vue }).promise;
      if (mon !== jeton) { return; }
      if (n === 1) { pages.textContent = ''; }
      pages.appendChild(canvas);
    }
  }

  function dessinerImages(liste, titre) {
    pages.textContent = '';
    liste.forEach(function (url) {
      var img = document.createElement('img');
      img.src = url; img.alt = titre; img.decoding = 'async';
      if (courant.seule) { protegerPage(img); }
      pages.appendChild(img);
    });
  }

  async function dessiner() {
    jeton += 1;
    var mon = jeton;
    pages.textContent = '';
    pages.appendChild(statut(t('Chargement du parchemin…')));
    largeurAffichee = pages.clientWidth;
    try {
      if (estPdf(courant.liste[0])) { await dessinerPdf(courant.liste[0], mon); }
      else { dessinerImages(courant.liste, courant.titre); }
    } catch (e) {
      if (mon === jeton) {
        pages.textContent = '';
        pages.appendChild(statut(t("Ce parchemin ne peut pas s'afficher ici."), courant.liste[0]));
      }
    }
  }

  function ouvrir(lien) {
    if (!fenetre) { creer(); }
    var item = lien.closest('.download-item');
    var nom = item && item.querySelector('h3') ? item.querySelector('h3').textContent : '';
    var langue = lien.querySelector('span') ? lien.querySelector('span').textContent : '';
    var url = lien.getAttribute('href');
    var liste = lien.getAttribute('data-pages') ? lien.getAttribute('data-pages').split('|') : [url];
    var seule = lien.getAttribute('data-lecture') === 'seule';
    courant = { liste: liste, titre: nom, seule: seule };
    fenetre.classList.toggle('reader-readonly', seule);
    barreTitre.textContent = nom + (langue ? ' · ' + langue : '');
    mention.textContent = t('SRD 5.2 (CC BY 4.0) · fiche non officielle, interprétation de nos recherches');
    boutonTelecharger.hidden = seule;
    if (seule) { boutonTelecharger.removeAttribute('href'); } else { boutonTelecharger.setAttribute('href', liste[0]); }
    document.documentElement.classList.add('reader-open');
    history.pushState({ gjReader: true }, '');
    fenetre.showModal();
    corps.scrollTop = 0;
    dessiner();
  }

  /* Un clic sur n'importe quel « Lire le parchemin » ouvre le lecteur. */
  document.addEventListener('click', function (e) {
    var lien = e.target.closest ? e.target.closest('a.file-link') : null;
    if (!lien) { return; }
    var href = lien.getAttribute('href');
    if (!href || href === '#') { return; }
    if (e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) { return; }
    if (typeof HTMLDialogElement === 'undefined') { return; } // Très vieux navigateur : le lien s'ouvre normalement.
    e.preventDefault();
    ouvrir(lien);
  });
})();
