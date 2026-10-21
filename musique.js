/* ============================================================
   MUSIQUE DE JAJA
   Un clic sur l'image de Jaja lance un morceau au hasard
   (jamais deux fois le même d'affilée). Un second clic l'arrête.

   POUR AJOUTER OU CHANGER UNE MUSIQUE :
   - Mets le fichier .mp3 dans le dossier "musiques" de ton dépôt GitHub.
   - Ajoute son chemin dans la liste PISTES ci-dessous.
   ============================================================ */
(function () {
  'use strict';

  var PISTES = [
    'musiques/musique-1.mp3',
    'musiques/musique-2.mp3',
    'musiques/musique-3.mp3',
    'musiques/musique-4.mp3'
  ];
  var VOLUME = 0.8; // De 0 (muet) à 1 (maximum).

  var bouton = document.querySelector('.jaja-player');
  if (!bouton || !PISTES.length) { return; }

  var audio = new Audio();
  audio.preload = 'none';
  var derniere = -1;
  var fondu = null;

  /* Choisit un morceau au hasard, différent du précédent. */
  function choisir() {
    if (PISTES.length === 1) { return 0; }
    var i;
    do { i = Math.floor(Math.random() * PISTES.length); } while (i === derniere);
    return i;
  }

  /* Met à jour l'apparence du bouton et son texte pour les lecteurs d'écran. */
  function afficher(joue) {
    bouton.classList.toggle('is-playing', joue);
    bouton.setAttribute('aria-pressed', joue ? 'true' : 'false');
    bouton.setAttribute('aria-label', joue ? 'Arrêter la musique' : 'Lancer une musique du Grimoire de Jaja');
  }

  function lancer() {
    clearInterval(fondu);
    derniere = choisir();
    audio.src = PISTES[derniere];
    audio.volume = VOLUME;
    afficher(true);
    var essai = audio.play();
    if (essai && essai.catch) {
      essai.catch(function () { afficher(false); }); // Fichier introuvable ou son bloqué.
    }
  }

  /* Arrêt avec un petit fondu pour ne pas couper sec. */
  function arreter() {
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

  bouton.addEventListener('click', function () {
    if (bouton.classList.contains('is-playing')) { arreter(); } else { lancer(); }
  });

  audio.addEventListener('ended', function () { afficher(false); });
  audio.addEventListener('error', function () { afficher(false); });
})();
