/* ============================================================
   RECHERCHE RAPIDE de la page d'accueil.
   On tape un mot (« corde », « sorts », « combat »…) et les règles
   correspondantes apparaissent tout de suite, sans changer de page :
   un clic ouvre la fiche en grand (même lecteur que dans le grimoire).
   - La touche Entrée (ou « Voir tout ») ouvre le grimoire avec la recherche déjà remplie.
   - Les titres viennent de la liste de parchemins.js (rien à modifier ici).
   - On peut chercher en français ou en anglais, quelle que soit la langue du site.
   ============================================================ */
(function () {
  'use strict';

  var form = document.querySelector('.quick-search');
  var champ = document.getElementById('quick-q');
  var liste = document.querySelector('.quick-results');
  var plus = document.querySelector('.quick-more');
  if (!form || !champ || !liste) { return; }

  var MAX = 5;
  var TEXTES = {
    fr: { vide: 'Aucune aide trouvée pour', guide: 'Guide', page: "Page d'aide", bientot: 'bientôt', tout: 'Voir tous les résultats dans le grimoire ↗', lire: 'Lire' },
    en: { vide: 'No help found for', guide: 'Guide', page: 'Help page', bientot: 'soon', tout: 'See all results in the grimoire ↗', lire: 'Read' }
  };

  function langue() { return (window.GJ && window.GJ.lang === 'en') ? 'en' : 'fr'; }
  function simplifier(s) {
    return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ').trim();
  }
  function fichiers(f) { return Array.isArray(f) ? f : (f ? [f] : []); }

  /* Toutes les entrées cherchables : guides et pages d'aide. */
  function entrees() {
    var cat = window.GJ && window.GJ.catalogue;
    if (!cat) { return []; }
    var tout = [];
    cat.guides.forEach(function (g) { tout.push({ fiche: g, theme: null, guide: true }); });
    cat.themes.forEach(function (th) {
      th.fiches.forEach(function (f) { tout.push({ fiche: f, theme: th, guide: false }); });
    });
    return tout;
  }

  function texteCherchable(e) {
    var f = e.fiche, th = e.theme;
    var morceaux = [f.titre.fr, f.titre.en, f.desc.fr, f.desc.en];
    if (th) { morceaux.push(th.titre.fr, th.titre.en); }
    return ' ' + simplifier(morceaux.join(' ').replace(/[·,.:;()«»]/g, ' '));
  }

  function lien(code, url, e, T) {
    var a = document.createElement('a');
    a.className = 'file-link';
    a.setAttribute('href', url || '#');
    if (!e.guide) { a.setAttribute('data-lecture', 'seule'); }
    var s = document.createElement('span'); s.textContent = code;
    a.appendChild(s);
    var m = document.createElement('em'); m.className = 'file-name';
    m.textContent = url ? T.lire : T.bientot;
    a.appendChild(m);
    return a;
  }

  function dessiner() {
    var requete = simplifier(champ.value);
    var L = langue(), T = TEXTES[L];
    liste.textContent = '';
    if (!requete) { liste.hidden = true; plus.hidden = true; return; }
    var mots = requete.split(' ');
    var trouvees = entrees().filter(function (e) {
      var texte = texteCherchable(e);
      return mots.every(function (m) { return texte.indexOf(' ' + m) !== -1; });
    });

    liste.hidden = false;
    if (!trouvees.length) {
      var vide = document.createElement('li');
      vide.className = 'quick-empty';
      vide.textContent = T.vide + ' « ' + champ.value.trim() + ' »';
      liste.appendChild(vide);
      plus.hidden = true;
      return;
    }

    trouvees.slice(0, MAX).forEach(function (e) {
      var item = document.createElement('li');
      item.className = 'download-item quick-item';
      var texte = document.createElement('div');
      texte.className = 'quick-text';
      var h = document.createElement('h3');
      h.textContent = e.fiche.titre[L];
      var p = document.createElement('p');
      p.textContent = (e.guide ? T.guide : (e.theme.titre[L])) + ' · ' + e.fiche.desc[L];
      texte.appendChild(h); texte.appendChild(p);
      var liens = document.createElement('div');
      liens.className = 'quick-links';
      var fr = fichiers(e.fiche.fichiers.fr), en = fichiers(e.fiche.fichiers.en);
      var a1 = lien('FR', fr[0], e, T), a2 = lien('EN', en[0], e, T);
      if (fr.length > 1) { a1.setAttribute('data-pages', fr.join('|')); }
      if (en.length > 1) { a2.setAttribute('data-pages', en.join('|')); }
      /* La langue du site passe en premier. */
      if (L === 'en') { liens.appendChild(a2); liens.appendChild(a1); } else { liens.appendChild(a1); liens.appendChild(a2); }
      item.appendChild(texte); item.appendChild(liens);
      liste.appendChild(item);
    });
    plus.hidden = false;
  }

  champ.addEventListener('input', dessiner);
  document.addEventListener('gj-lang-change', function () {
    var L = langue();
    var a = plus.querySelector('a'); if (a) { a.textContent = TEXTES[L].tout; }
    dessiner();
  });
  /* Entrée : on ouvre le grimoire avec la recherche déjà remplie (le formulaire envoie ?q=…). */
  var lienTout = plus.querySelector('a');
  if (lienTout) {
    lienTout.textContent = TEXTES[langue()].tout;
    lienTout.addEventListener('click', function (ev) {
      ev.preventDefault();
      window.location.href = 'telechargements.html?q=' + encodeURIComponent(champ.value.trim());
    });
  }
  /* Échap : on efface. */
  champ.addEventListener('keydown', function (e) { if (e.key === 'Escape') { champ.value = ''; dessiner(); } });
})();
