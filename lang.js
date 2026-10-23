/* ============================================================
   LANGUE : FR / US
   Deux fanions en haut à droite (France et États-Unis) changent
   la langue de tout le site. Le choix est mémorisé pour les
   visiteurs, et aussi d'une page à l'autre.

   POUR MODIFIER OU AJOUTER UNE TRADUCTION :
   - Chaque ligne de la liste TRADUCTIONS ci-dessous est :
       'texte français exactement comme dans la page' : 'English text',
   - Si tu changes un texte français dans une page HTML, change-le aussi
     ici (à gauche), sinon il restera en français dans la version US.
   - Un texte absent de la liste reste simplement en français.
   ============================================================ */
(function () {
  'use strict';

  var TRADUCTIONS = {
    /* ----- Titres d'onglet et descriptions ----- */
    'Le Grimoire de Jaja — Aides de jeu D&D5.5': 'Le Grimoire de Jaja — D&D5.5 Game Aids',
    'Les Parchemins — Le Grimoire de Jaja': 'The Scrolls — Le Grimoire de Jaja',
    'Le Grimoire de Jaja : fiches pratiques à lire ou à télécharger pour les joueurs et maîtres du jeu de Donjons & Dragons 5.5 (D&D5.5).': 'Le Grimoire de Jaja: handy sheets to read or download for Dungeons & Dragons 5.5 (D&D5.5) players and Dungeon Masters.',
    'Les Parchemins du Grimoire de Jaja : fiches D&D5.5 à lire en un clic ou à télécharger, en français et en anglais.': 'The Scrolls of Le Grimoire de Jaja: D&D5.5 sheets to read in one click or download, in French and English.',

    /* ----- En-tête et menu ----- */
    'Le Grimoire de Jaja, accueil': 'Le Grimoire de Jaja, home',
    "Le p'tit coup de pouce aux règles de ton jeu de rôle préféré": 'A little boost for the rules of your favorite role-playing game',
    'Navigation principale': 'Main navigation',
    'Présentation': 'About',
    'Les Parchemins': 'The Scrolls',
    'Ajouts Compatibles': 'Compatible Add-ons',
    '(bientôt disponible)': '(coming soon)',
    'Bientôt disponible': 'Coming soon',
    'Vidéos YouTube': 'YouTube Videos',
    'Me contacter': 'Contact me',

    /* ----- Accueil ----- */
    '<span></span> Aides de jeu · Donjons & Dragons 5.5 <span></span>': '<span></span> Game aids · Dungeons & Dragons 5.5 <span></span>',
    'Des fiches pratiques pour Donjons & Dragons 5.5, pour passer moins de temps à débattre et plus de temps à jouer.': 'Handy cheat sheets for Dungeons & Dragons 5.5, so you spend less time arguing and more time playing.',
    'Uniquement pour la version 5.5 (règles 2024) : les autres versions du jeu ne sont pas couvertes.': 'Only for version 5.5 (2024 rules): other editions of the game are not covered.',
    'La bibliothèque de fichiers': 'The file library',
    'Une fiche à retrouver ?<br><em>Tout est au même endroit.</em>': 'Looking for a sheet?<br><em>It\'s all in one place.</em>',
    'Les fiches, en français et en anglais, sont classées par thème : lis-les en un clic ou télécharge-les.': 'The sheets, in French and English, are sorted by theme: read them in one click or download them.',
    'Ouvrir les parchemins <span>↗</span>': 'Open the scrolls <span>↗</span>',
    'Jaja, un sourire aux lèvres, lisant un grimoire': 'Jaja, smiling, reading a grimoire',
    'AIDES DE JEU • D&D5.5': 'GAME AIDS • D&D5.5',

    /* ----- Présentation ----- */
    'Bienvenue dans le grimoire': 'Welcome to the grimoire',
    "Le Grimoire de Jaja, c'est un site qui regroupe des fiches d'aide, des écrans de MD et des ressources pratiques pour Donjons & Dragons 5.5.": "Le Grimoire de Jaja is a website that gathers help sheets, DM screens and handy resources for Dungeons & Dragons 5.5.",
    'Le but : retrouver vite une règle, préparer une séance et passer moins de temps à débattre pour plus de temps à jouer. Tout est classé par thème dans Les Parchemins, en français et en anglais. Attention : tout suit uniquement les règles de la version 5.5 (2024).': "The goal: find a rule fast, prepare a session and spend less time arguing so there's more time to play. Everything is sorted by theme in The Scrolls, in French and English. Note: everything follows the rules of version 5.5 (2024) only.",

    /* ----- Vidéos (section masquée pour l'instant, traductions conservées) ----- */
    'À regarder': 'Worth watching',
    'Vidéos <em>YouTube</em>': '<em>YouTube</em> Videos',
    'Retrouve ici les vidéos pour mieux comprendre les règles en images.': 'Find the videos here to understand the rules better with pictures.',
    'Ouvrir la chaîne YouTube du Grimoire de Jaja': 'Open the Le Grimoire de Jaja YouTube channel',
    'Ouvrir la chaîne ↗': 'Open the channel ↗',
    "Si tu ne connais pas ma chaîne du Grimoire de Jaja, c'est par ici !": "If you don't know my Le Grimoire de Jaja channel yet, it's right here!",

    /* ----- Contact ----- */
    'Une question ou une suggestion ?': 'A question or a suggestion?',
    'Restons en <em>contact</em>': "Let's stay in <em>touch</em>",
    'Une erreur à signaler, une idée de fiche ou simplement un avis ? Envoie-moi un e-mail.': 'A mistake to report, an idea for a sheet or just some feedback? Send me an email.',
    'Clique ici pour écrire un e-mail au Grimoire de Jaja': 'Click here to write an email to Le Grimoire de Jaja',
    'Des corbeaux volent vers une hutte de sorcière. Clique ici pour écrire un e-mail.': "Ravens flying toward a witch's hut. Click here to write an email.",
    'CLIQUE': 'CLICK',
    'ICI': 'HERE',
    "Clique pour m'écrire à": 'Click to write me at',

    /* ----- Fenêtre « Écrire » (contact.js) ----- */
    'Écrire au Grimoire de Jaja': 'Write to Le Grimoire de Jaja',
    'Choisis comment envoyer ton message :': 'Choose how to send your message:',
    'Ouvrir mon application mail <span>↗</span>': 'Open my mail app <span>↗</span>',
    'Écrire avec Gmail <span>↗</span>': 'Write with Gmail <span>↗</span>',
    "Copier l'adresse <span>⧉</span>": 'Copy the address <span>⧉</span>',
    'Adresse copiée :': 'Address copied:',
    'Fermer': 'Close',

    /* ----- Musique (musique.js) ----- */
    'Lancer une musique du Grimoire de Jaja': 'Play a Le Grimoire de Jaja tune',
    'Arrêter la musique': 'Stop the music',

    /* ----- Pied de page ----- */
    'Des aides pratiques pour les parties de D&D5.5.': 'Handy aids for your D&D5.5 games.',
    'Accueil': 'Home',
    'Le Grimoire de Jaja · Site indépendant': 'Le Grimoire de Jaja · Independent site',

    /* ----- Page Les Parchemins : en-tête et pied ----- */
    'Les <em>Parchemins</em>': 'The <em>Scrolls</em>',
    "Choisis un thème, clique dessus, puis clique sur un parchemin : il s'ouvre en grand, tu n'as plus qu'à faire défiler. Tu peux aussi le télécharger.": 'Pick a theme, click it, then click a scroll: it opens full screen and you just scroll down. You can also download it.',
    'Les parchemins sont mis à jour régulièrement. Une erreur ou un parchemin à suggérer ?': 'The scrolls are updated regularly. Spotted a mistake or have a scroll to suggest?',
    'Écris-moi': 'Write to me',
    "Retour à l'accueil": 'Back to home',

    /* ----- Recherche ----- */
    'Consulte le grimoire': 'Consult the grimoire',
    'Rechercher un parchemin': 'Search for a scroll',
    'Rechercher un parchemin : un sort, une compétence, une action…': 'Search for a scroll: a spell, a skill, an action…',
    'Effacer la recherche': 'Clear the search',
    'parchemin trouvé': 'scroll found',
    'parchemins trouvés': 'scrolls found',
    'Aucun parchemin trouvé pour': 'No scroll found for',

    /* ----- Lecteur de parchemin (lecteur.js) ----- */
    'Lire le parchemin': 'Read the scroll',
    'Télécharger': 'Download',
    'Lecteur de parchemin': 'Scroll reader',
    'Chargement du parchemin…': 'Loading the scroll…',
    "Ce parchemin ne peut pas s'afficher ici.": "This scroll can't be displayed here.",
    'Ouvrir le fichier': 'Open the file'

    /* Les noms des thèmes et des parchemins sont dans parchemins.js (ils s'ajoutent tout seuls à cette liste). */
  };

  var CLE_STOCKAGE = 'gj-lang';
  var langue = 'fr';
  var dejaChoisi = false; // Le visiteur a-t-il déjà cliqué sur un fanion ?
  var noteTexte = null;
  var registre = [];

  /* Compare les textes sans tenir compte des espaces en trop ni de &amp;. */
  function norm(s) { return String(s).replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim(); }
  function connu(cle) { return Object.prototype.hasOwnProperty.call(TRADUCTIONS, cle); }
  function espaces(s) { var m = String(s).match(/^(\s*)[\s\S]*?(\s*)$/); return [m[1], m[2]]; }

  /* Traduit un texte français (pour les messages créés par d'autres scripts). */
  function t(fr) {
    var cle = norm(fr);
    return (langue === 'en' && connu(cle)) ? TRADUCTIONS[cle] : fr;
  }

  /* Applique la langue courante à un élément du registre. */
  function appliquer(r) {
    var cle = norm(r.fr);
    var en = langue === 'en' && connu(cle);
    var sp = espaces(r.fr);
    if (r.type === 'html') { r.el.innerHTML = en ? sp[0] + TRADUCTIONS[cle] + sp[1] : r.fr; }
    else if (r.type === 'text') { r.node.nodeValue = en ? sp[0] + TRADUCTIONS[cle] + sp[1] : r.fr; }
    else if (r.type === 'attr') { r.el.setAttribute(r.name, en ? TRADUCTIONS[cle] : r.fr); }
    else if (r.type === 'title') { document.title = en ? TRADUCTIONS[cle] : r.fr; }
  }

  function ajouter(r) { registre.push(r); appliquer(r); }

  /* Parcourt la page et repère tous les textes qui ont une traduction. */
  var IGNORER = { SCRIPT: 1, STYLE: 1, TEMPLATE: 1 };
  var ATTRIBUTS = ['alt', 'aria-label', 'title', 'placeholder'];
  function parcourir(noeud) {
    var enfants = Array.prototype.slice.call(noeud.childNodes);
    enfants.forEach(function (n) {
      if (n.nodeType === 3) {
        var cle = norm(n.nodeValue);
        if (cle && connu(cle)) { ajouter({ type: 'text', node: n, fr: n.nodeValue }); }
      } else if (n.nodeType === 1 && !IGNORER[n.tagName] && !n.classList.contains('lang-switch')) {
        ATTRIBUTS.forEach(function (a) {
          if (n.hasAttribute(a) && connu(norm(n.getAttribute(a)))) { ajouter({ type: 'attr', el: n, name: a, fr: n.getAttribute(a) }); }
        });
        var contenu = norm(n.innerHTML);
        if (contenu && connu(contenu)) { ajouter({ type: 'html', el: n, fr: n.innerHTML }); }
        else { parcourir(n); }
      }
    });
  }

  /* Réordonne les fiches par ordre alphabétique dans la langue choisie. */
  function trier() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-sort]'), function (panneau) {
      var fiches = Array.prototype.slice.call(panneau.querySelectorAll('.download-item'));
      fiches.sort(function (a, b) {
        return a.querySelector('h3').textContent.localeCompare(b.querySelector('h3').textContent, langue === 'en' ? 'en' : 'fr', { sensitivity: 'base' });
      });
      fiches.forEach(function (fiche, i) {
        panneau.appendChild(fiche);
        var num = fiche.querySelector('.download-number');
        if (num) { num.textContent = (i < 9 ? '0' : '') + (i + 1); }
      });
    });
  }

  function mettreAJourFanions() {
    Array.prototype.forEach.call(document.querySelectorAll('.lang-switch .flag'), function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-lang') === langue ? 'true' : 'false');
    });
  }

  /* Change la langue de tout le site. */
  function choisir(l, memoriser) {
    langue = (l === 'en') ? 'en' : 'fr';
    document.documentElement.lang = langue;
    registre.forEach(appliquer);
    trier();
    mettreAJourFanions();
    /* Note manuscrite : toujours dans l'AUTRE langue, pour guider ceux qui ne comprennent pas. */
    if (noteTexte) {
      noteTexte.textContent = langue === 'fr' ? "You don't understand? Click Here!" : 'Tu ne comprends rien ? Clique Ici !';
      noteTexte.setAttribute('lang', langue === 'fr' ? 'en' : 'fr');
    }
    if (memoriser) {
      var zone = document.querySelector('.lang-switch');
      if (zone) { zone.classList.remove('has-hint'); } // Il a trouvé les fanions : la note disparaît.
    }
    if (memoriser) { try { localStorage.setItem(CLE_STOCKAGE, langue); } catch (e) { /* mémoire indisponible : tant pis */ } }
    document.dispatchEvent(new CustomEvent('gj-lang-change', { detail: { lang: langue } }));
  }

  /* Dessin des deux fanions (gonfanons médiévaux) : tringle dorée, cordons, bas en queue d'hirondelle. */
  var FORME = 'M4 6H30V54L17 45L4 54Z';
  var HAUT = '<rect x="0" y="0" width="34" height="3.4" rx="1.7" fill="#c7a96b"/>' +
             '<circle cx="1.7" cy="1.7" r="2.3" fill="#dfc38a"/><circle cx="32.3" cy="1.7" r="2.3" fill="#dfc38a"/>' +
             '<path d="M8 3.4V6M26 3.4V6" stroke="#c7a96b" stroke-width="1.2"/>';
  var CONTOUR = '<path d="' + FORME + '" fill="none" stroke="#c7a96b" stroke-width="1.3" stroke-linejoin="round"/>';

  var FANION_FR = '<svg viewBox="0 0 34 58" aria-hidden="true" focusable="false"><defs><clipPath id="fanion-fr"><path d="' + FORME + '"/></clipPath></defs>' + HAUT +
    '<g clip-path="url(#fanion-fr)"><rect x="4" y="6" width="8.7" height="50" fill="#0055a4"/><rect x="12.7" y="6" width="8.6" height="50" fill="#ffffff"/><rect x="21.3" y="6" width="8.7" height="50" fill="#ef4135"/></g>' + CONTOUR + '</svg>';

  function fanionUS() {
    var bandes = '';
    for (var i = 0; i < 7; i++) {
      bandes += '<rect x="4" y="' + (6 + i * 7) + '" width="26" height="7" fill="' + (i % 2 === 0 ? '#b22234' : '#ffffff') + '"/>';
    }
    var etoiles = '';
    [6.8, 10.5, 14.2].forEach(function (x) {
      [9.5, 13.5, 17.5, 21.5].forEach(function (y) { etoiles += '<circle cx="' + x + '" cy="' + y + '" r=".95" fill="#ffffff"/>'; });
    });
    return '<svg viewBox="0 0 34 58" aria-hidden="true" focusable="false"><defs><clipPath id="fanion-us"><path d="' + FORME + '"/></clipPath></defs>' + HAUT +
      '<g clip-path="url(#fanion-us)">' + bandes + '<rect x="4" y="6" width="13" height="21" fill="#3c3b6e"/>' + etoiles + '</g>' + CONTOUR + '</svg>';
  }

  /* Ajoute les deux fanions dans l'en-tête de la page. */
  function creerFanions() {
    var entete = document.querySelector('.site-header');
    if (!entete) { return; }
    var boite = document.createElement('div');
    boite.className = 'lang-switch';
    boite.setAttribute('role', 'group');
    boite.setAttribute('aria-label', 'Langue / Language');
    boite.innerHTML =
      '<button class="flag" type="button" data-lang="fr" title="Français" aria-label="Voir le site en français" aria-pressed="true">' + FANION_FR + '</button>' +
      '<button class="flag" type="button" data-lang="en" title="English (US)" aria-label="View the site in English (US)" aria-pressed="false">' + fanionUS() + '</button>';
    boite.addEventListener('click', function (e) {
      var bouton = e.target.closest('.flag');
      if (bouton) { choisir(bouton.getAttribute('data-lang'), true); }
    });
    /* Note écrite à la main + flèche qui montre les fanions (visible tant qu'on n'a pas choisi). */
    var note = document.createElement('div');
    note.className = 'lang-hint';
    note.setAttribute('aria-hidden', 'true');
    note.innerHTML = '<span class="lang-hint-text"></span>' +
      '<svg viewBox="0 0 40 46" focusable="false"><path d="M25 44C14 35 11 20 20 6" fill="none" stroke="#f1dfb0" stroke-width="2.6" stroke-linecap="round"/>' +
      '<path d="M20 6L11.5 14.5M20 6L28.5 12" fill="none" stroke="#f1dfb0" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    boite.appendChild(note);
    noteTexte = note.querySelector('.lang-hint-text');
    if (!dejaChoisi) { boite.classList.add('has-hint'); }
    entete.appendChild(boite);
  }

  /* Langue de départ : choix mémorisé, sinon langue du navigateur du visiteur. */
  function langueDeDepart() {
    var voulue = null;
    try { voulue = localStorage.getItem(CLE_STOCKAGE); } catch (e) { voulue = null; }
    if (voulue === 'fr' || voulue === 'en') { dejaChoisi = true; return voulue; }
    var nav = (navigator.language || 'fr').toLowerCase();
    return nav.indexOf('fr') === 0 ? 'fr' : 'en';
  }

  /* Pour ajouter des traductions depuis un autre script (ex. parchemins.js). */
  function etendre(dico) {
    Object.keys(dico).forEach(function (fr) { TRADUCTIONS[norm(fr)] = dico[fr]; });
  }

  /* Pour les éléments ajoutés plus tard par d'autres scripts (ex. fenêtre « Écrire »). */
  function enregistrer(racine) { parcourir(racine); }

  window.GJ = { t: t, register: enregistrer, extend: etendre, set: function (l) { choisir(l, true); }, get lang() { return langue; } };

  var titre = document.querySelector('title');
  if (titre && connu(norm(titre.textContent))) { registre.push({ type: 'title', fr: titre.textContent }); }
  var meta = document.querySelector('meta[name="description"]');
  if (meta && connu(norm(meta.getAttribute('content')))) { registre.push({ type: 'attr', el: meta, name: 'content', fr: meta.getAttribute('content') }); }

  var depart = langueDeDepart(); // Calculée avant les fanions : on sait ainsi si le visiteur a déjà choisi.
  parcourir(document.body);
  creerFanions();
  choisir(depart, false);
})();
