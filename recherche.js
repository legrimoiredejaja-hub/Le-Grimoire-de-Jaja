/* ============================================================
   RECHERCHE dans le grimoire (guides et pages d'aide).
   On tape un mot : « corde », « assourdi », « initiative »…
   - Les fiches sont trouvées par leur titre, leur description ET leurs tags
     (mots-clés réglés dans parchemins.js). Exemple : « assourdi » → « Tous les états ».
   - Pendant une recherche, les thèmes se replient et laissent place à une liste claire
     de résultats, les plus pertinents d'abord, avec le mot-clé qui a fait trouver la fiche.
   - Des « recherches fréquentes » (cliquables) sont proposées sous la barre.
   - La recherche ignore les majuscules et les accents, marche en français comme en anglais
     et accepte le début d'un mot (« assourd » trouve « assourdi »).
   - Si l'adresse contient ?q=mot (venant de l'accueil), le champ est déjà rempli.
   ============================================================ */
(function () {
  'use strict';

  var champ = document.getElementById('search');
  var effacer = document.querySelector('.search-clear');
  var statut = document.querySelector('.search-status');
  var sections = document.querySelectorAll('.library-section');
  if (!champ || !sections.length || !window.GJ || !window.GJ.chercher) { return; }

  function t(fr) { return window.GJ.t ? window.GJ.t(fr) : fr; }
  function langue() { return window.GJ.lang === 'en' ? 'en' : 'fr'; }
  function deux(n) { return (n < 10 ? '0' : '') + n; }

  /* Panneau des résultats : placé juste avant les sections. */
  var panneau = document.createElement('div');
  panneau.className = 'search-results';
  panneau.hidden = true;
  sections[0].parentNode.insertBefore(panneau, sections[0]);

  /* Recherches fréquentes, sous la barre. */
  var suggestions = document.createElement('div');
  suggestions.className = 'tag-suggestions';
  statut.parentNode.insertBefore(suggestions, statut);

  function dessinerSuggestions() {
    suggestions.textContent = '';
    var l = document.createElement('span');
    l.className = 'tag-suggestions-label';
    l.textContent = t('Essaie :');
    suggestions.appendChild(l);
    (window.GJ.suggestions[langue()] || []).forEach(function (mot) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'tag-chip'; b.textContent = mot;
      b.addEventListener('click', function () { champ.value = mot; filtrer(); champ.focus(); });
      suggestions.appendChild(b);
    });
  }

  function etiquetteTheme(original) {
    var details = original.closest('details');
    if (details) { return details.querySelector('.cat-title').textContent; }
    return t('Guide');
  }

  function dessinerResultats(res) {
    panneau.textContent = '';
    res.forEach(function (r, i) {
      var original = document.querySelector('.download-item[data-key="' + r.entree.cle + '"]');
      if (!original) { return; }
      var copie = original.cloneNode(true);
      copie.classList.add('result-item');
      var num = copie.querySelector('.download-number');
      if (num) { num.textContent = deux(i + 1); }
      var bloc = copie.querySelector('.download-info > div');
      var theme = document.createElement('p');
      theme.className = 'result-theme';
      theme.textContent = etiquetteTheme(original);
      bloc.insertBefore(theme, bloc.firstChild);
      if (r.tags.length) {
        var ligne = document.createElement('p');
        ligne.className = 'match-line';
        ligne.appendChild(document.createTextNode(t('Trouvé avec :') + ' '));
        r.tags.forEach(function (mot) {
          var b = document.createElement('b'); b.textContent = mot; ligne.appendChild(b);
        });
        bloc.appendChild(ligne);
      }
      panneau.appendChild(copie);
    });
  }

  function filtrer() {
    var requete = champ.value.trim();
    effacer.hidden = !champ.value;

    if (!requete) {
      panneau.hidden = true; panneau.textContent = '';
      Array.prototype.forEach.call(sections, function (s) { s.hidden = false; });
      statut.textContent = '';
      return;
    }

    var res = window.GJ.chercher(requete);
    Array.prototype.forEach.call(sections, function (s) { s.hidden = true; });
    panneau.hidden = false;
    dessinerResultats(res);

    if (!res.length) {
      statut.textContent = t('Aucun résultat pour') + ' « ' + requete + ' »';
    } else {
      statut.textContent = res.length + ' ' + t(res.length === 1 ? 'résultat trouvé' : 'résultats trouvés');
    }
  }

  champ.addEventListener('input', filtrer);
  champ.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && champ.value) { champ.value = ''; filtrer(); }
  });
  effacer.addEventListener('click', function () { champ.value = ''; filtrer(); champ.focus(); });
  /* Si on change de langue pendant une recherche, on la refait avec les nouveaux textes. */
  document.addEventListener('gj-lang-change', function () { dessinerSuggestions(); filtrer(); });

  try {
    var q = new URLSearchParams(window.location.search).get('q');
    if (q) { champ.value = q; }
  } catch (e) { /* tant pis */ }
  dessinerSuggestions();
  filtrer();
})();
