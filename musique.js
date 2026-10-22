/* ============================================================
   MUSIQUE DE JAJA
   Un clic sur l'image de Jaja lance un morceau au hasard
   (jamais deux fois le même d'affilée). Un second clic l'arrête.

   POUR AJOUTER OU CHANGER UNE MUSIQUE :
   - Mets le fichier .mp3 à la racine de ton dépôt GitHub (ou dans un dossier "musiques").
   - Ajoute son chemin dans la liste PISTES ci-dessous.
   Chaque morceau peut avoir plusieurs noms possibles : le script essaie
   le premier, puis le suivant si le fichier est introuvable.
   Attention : sur GitHub, les majuscules comptent (Musique ≠ musique).
   ============================================================ */
(function () {
  'use strict';

  var PISTES = [
    ['musique-1.mp3', 'musiques/musique-1.mp3'],
    ['musique-2.mp3', 'musiques/musique-2.mp3'],
    ['musique-3.mp3', 'musiques/musique-3.mp3'],
    ['musique-4.mp3', 'musiques/musique-4.mp3']
  ];
  var VOLUME = 0.8; // De 0 (muet) à 1 (maximum).

  var image = document.querySelector('.hero-logo');
  if (!image) { return; }

  var audio = new Audio();
  audio.preload = 'auto';
  var derniere = -1;
  var fondu = null;
  var essai = 0; // Numéro de la tentative en cours, pour ignorer les anciennes.

  /* Met à jour l'apparence de l'image et son texte (dans la langue du site) pour les lecteurs d'écran. */
  function traduire(fr) { return (window.GJ && window.GJ.t) ? window.GJ.t(fr) : fr; }
  function afficher(joue) {
    image.classList.toggle('is-playing', joue);
    image.setAttribute('aria-pressed', joue ? 'true' : 'false');
    image.setAttribute('aria-label', traduire(joue ? 'Arrêter la musique' : 'Lancer une musique du Grimoire de Jaja'));
  }

  /* Choisit un morceau au hasard, différent du précédent et pas déjà essayé. */
  function choisir(exclus) {
    var possibles = [];
    for (var i = 0; i < PISTES.length; i++) {
      if (exclus.indexOf(i) === -1 && (i !== derniere || PISTES.length === 1)) { possibles.push(i); }
    }
    if (!possibles.length) {
      for (var j = 0; j < PISTES.length; j++) { if (exclus.indexOf(j) === -1) { possibles.push(j); } }
    }
    return possibles.length ? possibles[Math.floor(Math.random() * possibles.length)] : -1;
  }

  /* Essaie un nom de fichier ; en cas d'échec, passe au nom suivant puis au morceau suivant. */
  function jouer(piste, nom, exclus, numero) {
    if (numero !== essai) { return; }
    var noms = PISTES[piste];
    if (nom >= noms.length) {
      exclus.push(piste);
      var autre = choisir(exclus);
      if (autre === -1) {
        afficher(false);
        if (window.console) { console.error('Musique de Jaja : aucun fichier trouvé. Vérifie les noms des fichiers .mp3 dans musique.js.'); }
        return;
      }
      return jouer(autre, 0, exclus, numero);
    }
    audio.src = encodeURI(noms[nom]);
    audio.volume = VOLUME;
    var lecture = audio.play();
    if (lecture && lecture.then) {
      lecture.then(function () {
        if (numero === essai) { derniere = piste; }
      }, function (e) {
        if (numero !== essai) { return; }
        if (e && e.name === 'NotAllowedError') { afficher(false); return; } // Son bloqué par le navigateur.
        if (window.console) { console.warn('Musique de Jaja : introuvable → ' + noms[nom]); }
        jouer(piste, nom + 1, exclus, numero);
      });
    }
  }

  function lancer() {
    clearInterval(fondu);
    essai += 1;
    afficher(true);
    jouer(choisir([]), 0, [], essai);
  }

  /* Arrêt avec un petit fondu pour ne pas couper sec. */
  function arreter() {
    essai += 1;
    afficher(false);
    clearInterval(fondu);
    fondu = setInterval(function () {
      if (audio.volume > 0.08) {
        audio.volume = Math.max(0, audio.volume - 0.08);
      } else {
        clearInterval(fondu);
        audio.pause();
        audio.currentTime = 0;
        audio.volume = VOLUME;
      }
    }, 40);
  }

  function basculer() {
    if (image.classList.contains('is-playing')) { arreter(); } else { lancer(); }
  }

  image.addEventListener('click', basculer);
  /* Au clavier : Entrée ou Espace fonctionnent aussi. */
  image.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); basculer(); }
  });
  audio.addEventListener('ended', function () { afficher(false); });
  /* Quand on change de langue avec les fanions, on met à jour le texte. */
  document.addEventListener('gj-lang-change', function () { afficher(image.classList.contains('is-playing')); });
  afficher(false);
})();
