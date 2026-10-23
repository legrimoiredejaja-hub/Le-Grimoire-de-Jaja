/* ============================================================
   SOUTIEN : bouton Ko-fi + petite phrase aléatoire avec une flèche.

   - Le bouton « Support me » vient de Ko-fi (le code est le tien).
     Son texte suit la langue du site (FR : « Me soutenir », US : « Support me »).
   - Une petite note manuscrite apparaît quelques secondes après l'arrivée
     du visiteur : une phrase au hasard, avec une flèche de combat qui
     montre le bouton. Elle disparaît toute seule ou avec la croix, et ne
     revient pas pendant la même visite.

   POUR CHANGER LES PHRASES : modifie ou ajoute des lignes dans PHRASES.
   ============================================================ */
(function () {
  'use strict';

  var PHRASES = {
    fr: [
      "Un p'tit coup de pouce pour notre travail !",
      "En écu pour mon bon service, M’sieur dame ?",
      "Les humains ont un don supplémentaire !",
      "Allez ! Partageons le trésor !",
      "Tu peux faire un don en action bonus !",
      "Votre bourse est-elle aussi vide que mon inventaire ?",
      "Pitié, héros ! J’ai raté mon jet de survie !",
      "Une petite pièce pour un humble aventurier ?",
      "Pas besoin de concentration pour être généreux !",
      "Une potion de soin pour le Grimoire de Jaja ?",
      "Transformez votre cuivre en aventure !",
      "Un don pour les gouverner tous !",
      "Aidez-nous à remplir notre coffre de groupe !",
    ],
    en: [
      'A little boost for our work!",
      'A few gold pieces for my good service, kind folks?",
      'Humans get an extra feat!",
      'Come on! Let’s share the loot!",
      'You can donate as a bonus action!",
      'Is your coin pouch as empty as my inventory?",
      'Help, heroes! I failed my death save!",
      'Spare a coin for a humble adventurer?",
      'No concentration required to be generous!",
      'A healing potion for the Grimoire de Jaja?",
      'Turn your copper into adventure!",
      'One donation to rule them all!",
      'Help us fill our party’s treasure chest!”
    ]
  };
  var TEXTE_BOUTON = { fr: 'Me soutenir', en: 'Support me' };
  var DELAI = 2500;   // Attente avant l'apparition de la note (en millisecondes).
  var DUREE = 14000;  // Durée d'affichage de la note.

  var note = null;
  var texte = null;
  var minuteur = null;

  function langue() { return (window.GJ && window.GJ.lang === 'en') ? 'en' : 'fr'; }

  function lireSession(cle) { try { return sessionStorage.getItem(cle); } catch (e) { return null; } }
  function ecrireSession(cle, valeur) { try { sessionStorage.setItem(cle, valeur); } catch (e) { /* tant pis */ } }

  /* 1) Le bouton Ko-fi (code d'origine, avec le texte adapté à la langue). */
  function dessinerBouton() {
    try {
      if (window.kofiWidgetOverlay) {
        window.kofiWidgetOverlay.draw('legrimoiredejaja', {
          'type': 'floating-chat',
          'floating-chat.donateButton.text': TEXTE_BOUTON[langue()],
          'floating-chat.donateButton.background-color': '#323842',
          'floating-chat.donateButton.text-color': '#fff'
        });
      }
    } catch (e) { /* Ko-fi bloqué (bloqueur de pub…) : le site continue de marcher. */ }
  }

  /* Quand on change de langue, on change aussi le texte du bouton Ko-fi (il est dans une petite fenêtre intégrée). */
  function majTexteBouton() {
    try {
      var cadres = document.querySelectorAll('iframe.floatingchat-container, iframe.floatingchat-container-mobi');
      Array.prototype.forEach.call(cadres, function (cadre) {
        var doc = cadre.contentDocument;
        var span = doc && doc.querySelector('.floatingchat-donate-button span');
        if (span) { span.textContent = TEXTE_BOUTON[langue()]; }
      });
    } catch (e) { /* tant pis */ }
  }

  /* 2) La note avec une phrase au hasard (jamais la même que la fois d'avant). */
  function phraseAuHasard() {
    var liste = PHRASES[langue()];
    var derniere = parseInt(lireSession('gj-phrase'), 10);
    var i;
    do { i = Math.floor(Math.random() * liste.length); } while (liste.length > 1 && i === derniere);
    ecrireSession('gj-phrase', String(i));
    return liste[i];
  }

  function creerNote() {
    note = document.createElement('aside');
    note.className = 'kofi-note';
    note.innerHTML =
      '<div class="kofi-note-bubble"><p class="kofi-note-text"></p>' +
      '<button class="kofi-note-close" type="button" aria-label="Fermer / Close">✕</button></div>' +
      /* Flèche de combat : plumes rouges en haut, pointe d'acier vers le bas. */
      '<svg class="kofi-arrow" viewBox="0 0 22 52" aria-hidden="true" focusable="false">' +
        '<path d="M11 6V42" stroke="#b08a55" stroke-width="2.6" stroke-linecap="round"/>' +
        '<path d="M11 4L4 0L6.5 11Z M11 4L18 0L15.5 11Z" fill="#b03a3a"/>' +
        '<path d="M11 11L4.5 6.5L6.8 18Z M11 11L17.5 6.5L15.2 18Z" fill="#c24a4a"/>' +
        '<path d="M11 51L5.5 40L11 42.5L16.5 40Z" fill="#cfd4da" stroke="#8d949c" stroke-width="1" stroke-linejoin="round"/>' +
      '</svg>';
    document.body.appendChild(note);
    texte = note.querySelector('.kofi-note-text');
    note.querySelector('.kofi-note-close').addEventListener('click', function () {
      ecrireSession('gj-kofi-note', 'ferme');
      cacher();
    });
  }

  function cacher() {
    clearTimeout(minuteur);
    if (note) { note.classList.remove('is-visible'); }
  }

  function montrer() {
    if (lireSession('gj-kofi-note') === 'ferme') { return; }
    if (!note) { creerNote(); }
    texte.textContent = phraseAuHasard();
    texte.setAttribute('lang', langue());
    /* Un instant plus tard pour que l'animation d'apparition se joue. */
    setTimeout(function () { note.classList.add('is-visible'); }, 30);
    clearTimeout(minuteur);
    minuteur = setTimeout(cacher, DUREE);
  }

  dessinerBouton();
  setTimeout(montrer, DELAI);

  /* Changement de langue avec les fanions : nouvelle phrase dans la bonne langue et bouton traduit. */
  document.addEventListener('gj-lang-change', function () {
    majTexteBouton();
    if (note && lireSession('gj-kofi-note') !== 'ferme' && note.classList.contains('is-visible')) { montrer(); }
  });
  majTexteBouton();
})();
