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
    'Le Grimoire de Jaja — Aides de jeu SRD 5.2': 'Le Grimoire de Jaja — SRD 5.2 Game Aids',
    'Sources et méthode — Le Grimoire de Jaja': 'Sources and method — Le Grimoire de Jaja',
    'Le Grimoire de Jaja : fiches pratiques non officielles à lire ou à télécharger pour les joueurs et maîtres du jeu, basées sur les règles du SRD 5.2.': 'Le Grimoire de Jaja: unofficial handy sheets to read or download for players and game masters, based on the SRD 5.2 rules.',
    "D'où viennent les règles du Grimoire de Jaja : SRD 5.2 sous licence CC BY 4.0, étiquettes, méthode, polices et visuels.": 'Where the rules of Le Grimoire de Jaja come from: SRD 5.2 under the CC BY 4.0 licence, labels, method, fonts and visuals.',

    /* ----- En-tête et menu ----- */
    'Le Grimoire de Jaja, accueil': 'Le Grimoire de Jaja, home',
    "Le p'tit coup de pouce aux règles de ton jeu de rôle préféré": 'A little boost for the rules of your favorite role-playing game',
    'Navigation principale': 'Main navigation',
    'Présentation': 'About',
    'Ajouts Compatibles': 'Compatible Add-ons',
    '(bientôt disponible)': '(coming soon)',
    'Bientôt disponible': 'Coming soon',
    'Vidéos YouTube': 'YouTube Videos',
    'Me contacter': 'Contact me',

    /* ----- Accueil ----- */
    '<span></span> Aides de jeu · Règles SRD 5.2 <span></span>': '<span></span> Game aids · SRD 5.2 rules <span></span>',
    'Des fiches pratiques basées sur les règles du SRD 5.2, pour passer moins de temps à débattre et plus de temps à jouer.': 'Handy cheat sheets based on the SRD 5.2 rules, so you spend less time arguing and more time playing.',
    'Basé sur le SRD 5.2, compatible avec les règles de la 5e édition (2024). Fiches non officielles : les autres versions du jeu ne sont pas couvertes.': 'Based on the SRD 5.2, compatible with the 5th edition (2024) rules. Unofficial sheets: other editions of the game are not covered.',
    'La bibliothèque de fichiers': 'The file library',
    'Un problème avec les règles ?<br><em>C\'est par ici.</em>': 'A problem with the rules?<br><em>Right this way.</em>',
    'Jaja, un sourire aux lèvres, lisant un grimoire': 'Jaja, smiling, reading a grimoire',
    'AIDES DE JEU • SRD 5.2': 'GAME AIDS • SRD 5.2',

    /* ----- Présentation ----- */
    'Bienvenue dans le grimoire': 'Welcome to the grimoire',
    "Le Grimoire de Jaja, c'est un site qui regroupe des fiches d'aide, des écrans de MD et des ressources pratiques fondées sur les règles du SRD 5.2.": 'Le Grimoire de Jaja is a website that gathers help sheets, DM screens and handy resources built on the SRD 5.2 rules.',

    /* ----- Présentation : le SRD et le mode d'emploi ----- */
    'Pour tout comprendre': 'To understand it all',
    'Le SRD, c\'est quoi ?': 'What is the SRD?',
    'SRD, ça veut dire « System Reference Document », c\'est-à-dire « le document de référence des règles ».': 'SRD stands for “System Reference Document”, in other words “the reference document for the rules”.',
    'Imagine que l\'inventeur d\'un grand jeu te dise : « Voici les règles de base. Tu peux les copier, les expliquer et les partager, à une condition : dire que ça vient de moi. » Ce mode d\'emploi gratuit et offert à tout le monde, c\'est le SRD.': 'Imagine the inventor of a big game telling you: “Here are the basic rules. You can copy them, explain them and share them, on one condition: say that they come from me.” That free instruction booklet, given to everyone, is the SRD.',
    'Voir les sources et la méthode <span>→</span>': 'See the sources and method <span>→</span>',
    'Mode d\'emploi': 'How to use it',
    'Comment utiliser le site ?': 'How do I use the site?',
    'Trouver la bonne règle en quelques clics, ou même avec un seul mot.': 'Find the right rule in a few clicks, or even with a single word.',
    'Un exemple': 'An example',
    'Tu peux aussi chercher un autre mot : « nager », « athlétisme » ou « sorts ».': 'You can also search another word: “swim”, “athletics” or “spells”.',

    /* ----- Le Grimoire : guides à télécharger et pages d'aide à consulter ----- */
    'Ouvrir le grimoire <span>↗</span>': 'Open the grimoire <span>↗</span>',
    'Le <em>Grimoire</em>': 'The <em>Grimoire</em>',
    'Les guides et pages d\'aide — Le Grimoire de Jaja': 'Guides and help pages — Le Grimoire de Jaja',
    'Le Grimoire de Jaja : guides à télécharger et pages d\'aide à consulter sur le combat, les compétences, les sorts, les états et l\'équipement, basés sur le SRD 5.2, en français et en anglais.': 'Le Grimoire de Jaja: guides to download and help pages to read on combat, skills, spells, conditions and equipment, based on the SRD 5.2, in French and English.',
    'Télécharge un guide, ou consulte une page d\'aide directement ici : clique sur un thème, puis sur une page, et il n\'y a plus qu\'à faire défiler.': 'Download a guide, or read a help page right here: click a theme, then a page, and you just scroll down.',
    'Le grimoire est mis à jour régulièrement. Une erreur ou une page à suggérer ?': 'The grimoire is updated regularly. Spotted a mistake or have a page to suggest?',
    'Rechercher dans le grimoire': 'Search the grimoire',
    'Rechercher une aide : un sort, une compétence, une action…': 'Search for help: a spell, a skill, an action…',
    'résultat trouvé': 'result found',
    'résultats trouvés': 'results found',
    'Aucun résultat pour': 'No result for',
    'Lire le guide': 'Read the guide',
    'Lecteur du grimoire': 'Grimoire reader',
    'Chargement de la page…': 'Loading the page…',
    'Ce fichier ne peut pas s\'afficher ici.': 'This file can\'t be displayed here.',
    'Le but : retrouver vite une règle, préparer une séance et passer moins de temps à débattre pour plus de temps à jouer. Tout est classé par thème dans le grimoire, en français et en anglais. Attention : tout suit uniquement le SRD 5.2, compatible avec la 5e édition (2024). Les guides et les pages d\'aide sont non officiels et gratuits.': 'The goal: find a rule fast, prepare a session and spend less time arguing so there\'s more time to play. Everything is sorted by theme in the grimoire, in French and English. Note: everything follows the SRD 5.2 only, compatible with the 5th edition (2024). The guides and help pages are unofficial and free.',
    'Ici, on utilise le SRD 5.2, la version la plus récente, compatible avec les règles de 2024. Chaque guide et chaque page d\'aide n\'explique donc que des règles que l\'on a le droit de partager.': 'Here we use the SRD 5.2, the most recent version, compatible with the 2024 rules. So every guide and help page only explains rules that we are allowed to share.',
    'Les guides et les pages d\'aide sont « non officiels » : ce n\'est pas l\'éditeur du jeu qui les a écrits. C\'est Jaja qui range les règles et les explique simplement, pour que tu les retrouves vite.': 'The guides and help pages are “unofficial”: they were not written by the publisher of the game. Jaja sorts the rules and explains them simply, so you can find them fast.',
    'Clique sur « Ouvrir le grimoire » dans le menu en haut de la page.': 'Click “Open the grimoire” in the menu at the top of the page.',
    'Pour un guide, la flèche ↓ le télécharge. Pour une page d\'aide, clique sur un thème (Combat, Compétences, Sorts…), puis sur une page : elle s\'ouvre en grand et il n\'y a plus qu\'à faire défiler.': 'For a guide, the ↓ arrow downloads it. For a help page, click a theme (Combat, Skills, Spells…), then a page: it opens full screen and you just scroll down.',
    'Choisis ta langue avec les drapeaux : tout le site change, pages comprises.': 'Pick your language with the flags: the whole site changes, pages included.',
    'Ton personnage veut escalader une corde et ta table hésite sur le jet à faire ? Ouvre le grimoire, tape « corde » dans la barre de recherche, et la page « Escalader une corde » apparaît tout de suite. Clique dessus : la réponse est sous tes yeux.': 'Your character wants to climb a rope and your table isn\'t sure which roll to make? Open the grimoire, type “rope” in the search bar, and the “Climb a rope” page shows up right away. Click it: the answer is right in front of you.',
    'D\'où vient chaque règle, comment les guides et les pages d\'aide sont écrits et ce que tu peux en attendre.': 'Where each rule comes from, how the guides and help pages are written and what you can expect from them.',
    'Chaque guide et chaque page d\'aide porte la mention exacte : « SRD 5.2 (CC BY 4.0) · fiche non officielle, interprétation de nos recherches ».': 'Every guide and help page carries this exact notice: “SRD 5.2 (CC BY 4.0) · unofficial sheet, interpretation from our own research”.',
    'Ouvrir le grimoire': 'Open the grimoire',
    'Lire en grand ou emporter': 'Read it full screen or take it with you',
    'Les guides à télécharger': 'Guides to download',
    'Pour les lire ici, en grand, ou les télécharger et les garder avec toi.': 'Read them here, full screen, or download them and keep them with you.',
    'À consulter sur le site': 'To read on the site',
    'Les pages d\'aide à consulter': 'Help pages to read',
    'Des pages en très bonne qualité, à lire ici même : reviens quand tu veux, elles sont toujours à jour.': 'Very high-quality pages, to read right here: come back whenever you like, they are always up to date.',
    'Consulter la page': 'Read the page',
    'Écran du Maître du Jeu': 'Dungeon Master\'s Screen',

    'Les guides et les pages d\'aide, en français et en anglais, sont classés par thème. Tape un mot pour trouver une règle tout de suite.': 'The guides and help pages, in French and English, are sorted by theme. Type a word to find a rule right away.',
    'Rechercher une règle': 'Search for a rule',
    'Une règle ? Tape « corde », « sorts »…': 'A rule? Type “rope”, “spells”…',

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
    'Clique sur Jaja pour écrire un e-mail au Grimoire de Jaja': 'Click Jaja to write an email to Le Grimoire de Jaja',
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


    /* ----- Sources et méthode, mentions légales ----- */
    'Sources et méthode': 'Sources and method',
    'Transparence': 'Transparency',
    'Sources et <em>méthode</em>': 'Sources and <em>method</em>',
    'D\'où viennent les règles': 'Where the rules come from',
    'Le texte des règles vient uniquement du System Reference Document 5.2 (SRD 5.2) de Wizards of the Coast LLC, publié sous licence Creative Commons CC BY 4.0. Les fiches sont compatibles avec les règles de la 5e édition (2024). Ce site est indépendant et n\'est ni affilié ni approuvé par Wizards of the Coast.': 'The rules text comes only from the System Reference Document 5.2 (SRD 5.2) by Wizards of the Coast LLC, published under the Creative Commons CC BY 4.0 licence. The sheets are compatible with the 5th edition (2024) rules. This site is independent and is neither affiliated with nor endorsed by Wizards of the Coast.',
    'La mention sur chaque fiche': 'The notice on every sheet',
    'Les étiquettes': 'The labels',
    'Chaque règle d\'une fiche porte une étiquette qui dit d\'où elle vient :': 'Every rule on a sheet carries a label saying where it comes from:',
    'SRD': 'SRD',
    'Hors SRD': 'Not in the SRD',
    'Règle de table': 'House rule',
    'Interprétation': 'Interpretation',
    ': la règle est écrite dans le SRD 5.2.': ': the rule is written in the SRD 5.2.',
    ': la règle n\'est pas dans le SRD 5.2 (voir ci-dessous).': ': the rule is not in the SRD 5.2 (see below).',
    ': un choix de table, pas une règle officielle.': ': a table choice, not an official rule.',
    ': notre lecture d\'un passage qui peut se comprendre de plusieurs façons.': ': our reading of a passage that can be understood in several ways.',
    'Notre méthode': 'Our method',
    'Le texte de règle vient du SRD uniquement.': 'The rules text comes from the SRD only.',
    'Ce qui est hors SRD est retiré, ou paraphrasé très court avec l\'étiquette « Fan Content » et la mention de la politique de contenu de fans de Wizards of the Coast.': 'Anything outside the SRD is removed, or paraphrased very briefly with the “Fan Content” label and a mention of Wizards of the Coast\'s Fan Content Policy.',
    'Pas de marques ni de logos, et les titres ne reprennent pas le nom du jeu.': 'No trademarks or logos, and titles do not use the name of the game.',
    'Pas de contenu d\'autrui sans accord écrit ou réécriture complète.': 'No one else\'s content without written permission or a complete rewrite.',
    'Le site est gratuit, les dons n\'ouvrent droit à aucune contrepartie et aucune fiche contenant du hors SRD n\'est vendue.': 'The site is free, donations give no reward in return and no sheet containing non-SRD material is sold.',
    'Polices et visuels': 'Fonts and visuals',
    'Polices : Cinzel, Crimson Text et Caveat, via Google Fonts, sous licence SIL Open Font License 1.1.': 'Fonts: Cinzel, Crimson Text and Caveat, via Google Fonts, under the SIL Open Font License 1.1.',
    'Illustration de Jaja, fanions et petits dessins : créations propres au Grimoire de Jaja.': 'Jaja illustration, flags and small drawings: original creations of Le Grimoire de Jaja.',
    'Bouton de soutien : widget Ko-fi.': 'Support button: Ko-fi widget.',
    'Un problème avec les règles ?': 'A problem with the rules?',
    'Une erreur ou un passage à corriger ?': 'A mistake or a passage to fix?',
    'Ce site contient du contenu du System Reference Document 5.2 (SRD 5.2) de Wizards of the Coast LLC, sous licence CC BY 4.0. Fiches non officielles, interprétation de nos recherches. Site indépendant, non affilié à Wizards of the Coast.': 'This site contains material from the System Reference Document 5.2 (SRD 5.2) by Wizards of the Coast LLC, licensed under CC BY 4.0. Unofficial sheets, interpretation from our own research. Independent site, not affiliated with Wizards of the Coast.',
    'Site gratuit : les dons n\'ouvrent droit à aucune contrepartie et aucune fiche n\'est vendue.': 'Free site: donations give no reward in return and no sheet is sold.',

    /* ----- Pied de page ----- */
    'Aides de jeu non officielles basées sur le SRD 5.2.': 'Unofficial game aids based on the SRD 5.2.',
    'Accueil': 'Home',
    'Le Grimoire de Jaja · Site indépendant': 'Le Grimoire de Jaja · Independent site',

    /* ----- Page Les Parchemins : en-tête et pied ----- */
    'Écris-moi': 'Write to me',
    "Retour à l'accueil": 'Back to home',

    /* ----- Recherche ----- */
    'Consulte le grimoire': 'Consult the grimoire',
    'Effacer la recherche': 'Clear the search',

    /* ----- Lecteur de parchemin (lecteur.js) ----- */
    'Télécharger': 'Download',
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
