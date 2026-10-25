/* ============================================================
   RECHERCHE dans le grimoire (guides et pages d'aide).
   On tape un mot (« athlétisme », « sort », « armure »…) : seuls les
   résultats correspondants restent affichés et leur thème s'ouvre.
   La recherche ignore les majuscules et les accents, et suit la langue
   choisie avec les fanions (FR ou US).
   ============================================================ */
(function () {
  'use strict';

  var champ = document.getElementById('search');
  var effacer = document.querySelector('.search-clear');
  var statut = document.querySelector('.search-status');
  var themes = document.querySelectorAll('.download-category, .guides-list');
  var sections = document.querySelectorAll('.library-section');
  if (!champ || !themes.length) { return; }

  var etatInitial = null; // Thèmes ouverts avant la recherche, pour les remettre ensuite.

  function t(fr) { return (window.GJ && window.GJ.t) ? window.GJ.t(fr) : fr; }

  /* Minuscules et sans accents : « Athlétisme » = « athletisme ». */
  function simplifier(s) {
    return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ').trim();
  }

  /* Tous les mots tapés doivent se retrouver dans le texte. */
  function correspond(texte, mots) {
    for (var i = 0; i < mots.length; i++) { if (texte.indexOf(mots[i]) === -1) { return false; } }
    return true;
  }

  function filtrer() {
    var requete = simplifier(champ.value);
    var mots = requete ? requete.split(' ') : [];
    effacer.hidden = !champ.value;

    /* Recherche vide : on remet tout comme avant. */
    if (!mots.length) {
      Array.prototype.forEach.call(themes, function (theme, i) {
        theme.hidden = false;
        Array.prototype.forEach.call(theme.querySelectorAll('.download-item'), function (f) { f.hidden = false; });
        if (etatInitial && 'open' in theme) { theme.open = etatInitial[i]; }
      });
      etatInitial = null;
      statut.textContent = '';
      Array.prototype.forEach.call(sections, function (s) { s.hidden = false; });
      return;
    }

    if (!etatInitial) {
      etatInitial = Array.prototype.map.call(themes, function (theme) { return theme.open; });
    }

    var total = 0;
    Array.prototype.forEach.call(themes, function (theme) {
      var titreEl = theme.querySelector('.cat-title');
      var titre = titreEl ? simplifier(titreEl.textContent) : '';
      var themeCorrespond = titre ? correspond(titre, mots) : false;
      var trouvees = 0;
      Array.prototype.forEach.call(theme.querySelectorAll('.download-item'), function (fiche) {
        var texte = simplifier(fiche.querySelector('.download-info').textContent);
        var ok = themeCorrespond || correspond(texte, mots) || correspond(titre + ' ' + texte, mots);
        fiche.hidden = !ok;
        if (ok) { trouvees++; }
      });
      theme.hidden = trouvees === 0;
      if (trouvees > 0 && 'open' in theme) { theme.open = true; }
      total += trouvees;
    });

    Array.prototype.forEach.call(sections, function (s) { s.hidden = !s.querySelector('.download-item:not([hidden])'); });

    if (total === 0) {
      statut.textContent = t('Aucun résultat pour') + ' « ' + champ.value.trim() + ' »';
    } else {
      statut.textContent = total + ' ' + t(total === 1 ? 'résultat trouvé' : 'résultats trouvés');
    }
  }

  champ.addEventListener('input', filtrer);
  champ.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && champ.value) { champ.value = ''; filtrer(); }
  });
  effacer.addEventListener('click', function () { champ.value = ''; filtrer(); champ.focus(); });
  /* Si on change de langue pendant une recherche, on la refait avec les nouveaux textes. */
  document.addEventListener('gj-lang-change', filtrer);
  filtrer();
})();
