/* ============================================================
   RECHERCHE RAPIDE de la page d'accueil.
   On tape un mot (« corde », « assourdi », « sorts »…) et les règles
   correspondantes apparaissent tout de suite, sans changer de page :
   un clic ouvre la fiche en grand (même lecteur que dans le grimoire).
   - La touche Entrée (ou « Voir tout ») ouvre le grimoire avec la recherche déjà remplie.
   - Les titres et les tags (mots-clés) viennent de la liste de parchemins.js : rien à modifier ici.
   - On peut chercher en français ou en anglais, quelle que soit la langue du site.
   ============================================================ */
(function () {
  'use strict';

  var form = document.querySelector('.quick-search');
  var champ = document.getElementById('quick-q');
  var liste = document.querySelector('.quick-results');
  var plus = document.querySelector('.quick-more');
  if (!form || !champ || !liste || !window.GJ || !window.GJ.chercher) { return; }

  var MAX = 5;
  var TEXTES = {
    fr: { vide: 'Aucune aide trouvée pour', guide: 'Guide', page: "Page d'aide", bientot: 'bientôt', tout: 'Voir tous les résultats dans le grimoire ↗', lire: 'Lire', trouve: 'Trouvé avec :', essaie: 'Essaie :' },
    en: { vide: 'No help found for', guide: 'Guide', page: 'Help page', bientot: 'soon', tout: 'See all results in the grimoire ↗', lire: 'Read', trouve: 'Found with:', essaie: 'Try:' }
  };

  function langue() { return (window.GJ && window.GJ.lang === 'en') ? 'en' : 'fr'; }
  function simplifier(s) {
    return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ').trim();
  }
  function fichiers(f) { return Array.isArray(f) ? f : (f ? [f] : []); }

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
    var trouvees = window.GJ.chercher(champ.value);

    liste.hidden = false;
    if (!trouvees.length) {
      var vide = document.createElement('li');
      vide.className = 'quick-empty';
      vide.textContent = T.vide + ' « ' + champ.value.trim() + ' »';
      liste.appendChild(vide);
      plus.hidden = true;
      return;
    }

    trouvees.slice(0, MAX).forEach(function (r) {
      var e = { fiche: r.entree.fiche, theme: r.entree.theme, guide: r.entree.guide };
      var item = document.createElement('li');
      item.className = 'download-item quick-item';
      var texte = document.createElement('div');
      texte.className = 'quick-text';
      var h = document.createElement('h3');
      h.textContent = e.fiche.titre[L];
      var p = document.createElement('p');
      p.textContent = (e.guide ? T.guide : (e.theme.titre[L])) + ' · ' + e.fiche.desc[L];
      texte.appendChild(h); texte.appendChild(p);
      if (r.tags.length) {
        var m = document.createElement('p');
        m.className = 'match-line';
        m.appendChild(document.createTextNode(T.trouve + ' '));
        r.tags.forEach(function (mot) { var b = document.createElement('b'); b.textContent = mot; m.appendChild(b); });
        texte.appendChild(m);
      }
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

  /* Recherches fréquentes sous la barre : un clic lance la recherche. */
  var suggestions = document.createElement('div');
  suggestions.className = 'tag-suggestions';
  form.insertBefore(suggestions, liste);
  function dessinerSuggestions() {
    var L = langue();
    suggestions.textContent = '';
    var l = document.createElement('span');
    l.className = 'tag-suggestions-label';
    l.textContent = TEXTES[L].essaie;
    suggestions.appendChild(l);
    (window.GJ.suggestions[L] || []).forEach(function (mot) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'tag-chip'; b.textContent = mot;
      b.addEventListener('click', function () { champ.value = mot; dessiner(); champ.focus(); });
      suggestions.appendChild(b);
    });
  }
  dessinerSuggestions();

  champ.addEventListener('input', dessiner);
  document.addEventListener('gj-lang-change', function () {
    dessinerSuggestions();
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
