/* ============================================================
   LE GRIMOIRE : la liste de tous les guides et de toutes les pages d'aide du site.
   Tout se règle ICI : thèmes, noms des parchemins, descriptions et fichiers.
   La page « Le Grimoire » est construite automatiquement à partir de cette liste,
   dans les deux langues (le fanion FR / US traduit tout seul).

   ┌─ POUR AJOUTER UN GUIDE OU UNE PAGE D'AIDE ───────────────────────────────────────────
   │ 1) Mets ton fichier dans le dossier « parchemins » de ton dépôt GitHub (le nom du dossier ne change pas)
   │    (PDF conseillé, ou image .png / .jpg). Exemple : parchemins/escalader-une-corde-fr.pdf
   │    Deux sortes de fichiers :
   │      - GUIDES (liste GUIDES) : on peut les lire en grand ET les télécharger.
   │      - PAGES D'AIDE (liste THEMES) : on peut seulement les consulter, en très bonne qualité, sans bouton de téléchargement.
   │ 2) Copie un bloc { titre: ..., desc: ..., fichiers: ... } dans le bon thème
   │    et remplis-le. Une ligne « fichiers » : { fr: '...', en: '...' }.
   │      - un fichier PDF ou une image  → 'parchemins/mon-fichier.pdf'
   │      - plusieurs images (= pages)   → ['parchemins/p1.png', 'parchemins/p2.png']
   │      - pas encore prêt              → '' (la ligne s'affiche en « bientôt »)
   │ 3) Envoie le tout sur GitHub : le fichier s'ouvre en grand au clic (on n'a plus
   │    qu'à faire défiler) et (pour les guides seulement) un petit bouton ↓ permet de le télécharger.
   │
   │ TAGS (mots-clés de recherche) : dans chaque bloc, la ligne  tags: { fr: '...', en: '...' }  liste les mots
   │ que les visiteurs pourraient taper, séparés par des virgules. Exemple : sur la fiche des états, « assourdi »
   │ fait retrouver « Tous les états ». Ajoute autant de mots que tu veux (synonymes, noms d'actions, d'états…).
   │ On cherche aussi bien en français qu'en anglais, quelle que soit la langue du site.
   │ Les « Recherches fréquentes » proposées sous la barre se règlent dans SUGGESTIONS, juste après THEMES.
   │
   │ ÉTIQUETTE (facultatif) : ajoute  etiquette: 'SRD'  (par défaut), 'hors SRD', 'règle de table' ou 'interprétation'
   │ dans un bloc. Elle s'affiche sous le nom ; la mention SRD s'ajoute toute seule.
   │ Le hors SRD doit rester retiré ou très court, avec la mention « Fan Content ».
   │
   │ POUR AJOUTER UN THÈME : copie un bloc entier { titre: ..., intro: ..., fiches: [...] } dans THEMES.
   │ « tri: true » = les pages se rangent par ordre alphabétique (dans chaque langue).
   │ « tri: false » = elles restent dans l'ordre où tu les écris (utile pour un ordre logique).
   └──────────────────────────────────────────────────────────────────────
   ============================================================ */
(function () {
  'use strict';

  /* ======================= 1. LES GUIDES À TÉLÉCHARGER ======================= */
  var GUIDES = [
    { titre: { fr: 'Écran du Maître du Jeu', en: "Dungeon Master's Screen" },
      desc: { fr: 'Les règles essentielles, côté MD', en: 'The essential rules, DM side' },
      tags: { fr: "écran, maître du jeu, md, mj, degré de difficulté, dd, jet de sauvegarde, règles essentielles",
              en: "screen, dungeon master, dm, game master, difficulty class, dc, saving throw, essential rules" },
      fichiers: { fr: '', en: '' } },
    { titre: { fr: 'Guide de combat', en: 'Combat Guide' },
      desc: { fr: "Le déroulé d'un tour, de l'initiative aux réactions", en: 'The turn sequence, from initiative to reactions' },
      tags: { fr: "combat, initiative, tour de jeu, ordre du tour, action, action bonus, réaction, déplacement, attaque, se battre",
              en: "combat, initiative, turn, turn order, action, bonus action, reaction, movement, attack, fight" },
      fichiers: { fr: '', en: '' } }
  ];

  /* ======================= 2. LES PAGES D'AIDE À CONSULTER ======================= */
  var THEMES = [

    /* ---------- LE COMBAT ---------- */
    {
      titre: { fr: 'Le Combat', en: 'Combat' },
      intro: { fr: 'Le tour de jeu et les actions possibles, sans débat.', en: 'Turn order and available actions, no arguments.' },
      tri: false,
      fiches: [
        { titre: { fr: 'Actions en combat', en: 'Actions in Combat' },
          desc: { fr: 'Toutes les actions disponibles', en: 'All the available actions' },
          tags: { fr: "attaquer, foncer, se désengager, esquiver, aider, se cacher, influencer, magie, se préparer, chercher, étudier, utiliser, action, action bonus, réaction",
                  en: "attack, dash, disengage, dodge, help, hide, influence, magic, ready, search, study, utilize, action, bonus action, reaction" },
          fichiers: { fr: '', en: '' } },
        { titre: { fr: 'Couvert et visibilité', en: 'Cover and Visibility' },
          desc: { fr: 'Abri, obscurité et attaques à distance', en: 'Cover, darkness and ranged attacks' },
          tags: { fr: "couvert, abri, couvert partiel, couvert important, couvert total, obscurité, pénombre, lumière, vision, vue, invisible, attaque à distance, caché",
                  en: "cover, half cover, three-quarters cover, total cover, darkness, dim light, light, vision, sight, heavily obscured, lightly obscured, ranged attack, hidden" },
          fichiers: { fr: '', en: '' } }
      ]
    },

    /* ---------- LES COMPÉTENCES (une page par action concrète) ---------- */
    {
      titre: { fr: 'Les Compétences', en: 'Skills' },
      intro: { fr: 'Une page par action, classées par ordre alphabétique : cherche « corde », « nager »… ou le nom de la compétence.', en: 'One page per action, in alphabetical order: search "rope", "swim"… or the skill name.' },
      tri: true,
      fiches: [
        { titre: { fr: 'Escalader une corde', en: 'Climb a rope' },
          desc: { fr: 'Athlétisme · Force', en: 'Athletics · Strength' },
          tags: { fr: "grimper, escalade, escalader, corde, mur, falaise, athlétisme, force, vitesse",
                  en: "climb, climbing, rope, wall, cliff, athletics, strength, speed" },
          fichiers: { fr: 'parchemins/escalader-une-corde-fr.pdf', en: 'parchemins/escalader-une-corde-us.pdf' } },
        { titre: { fr: 'Nager', en: 'Swim' },
          desc: { fr: 'Athlétisme · Force', en: 'Athletics · Strength' },
          tags: { fr: "nage, nager, eau, noyade, se noyer, rivière, mer, courant, athlétisme, force, vitesse",
                  en: "swim, swimming, water, drowning, river, sea, current, athletics, strength, speed" },
          fichiers: { fr: '', en: '' } },
        { titre: { fr: 'Sauter', en: 'Jump' },
          desc: { fr: 'Athlétisme · Force', en: 'Athletics · Strength' },
          tags: { fr: "saut, sauter, bond, distance, hauteur, saut en longueur, saut en hauteur, athlétisme, force",
                  en: "jump, leap, distance, height, long jump, high jump, athletics, strength" },
          fichiers: { fr: '', en: '' } }
      ]
    },

    /* ---------- LES SORTS ---------- */
    {
      titre: { fr: 'Les Sorts', en: 'Spells' },
      intro: { fr: 'Pour lancer ses sorts sans fouiller dans les livres.', en: 'To cast spells without digging through the books.' },
      tri: false,
      fiches: [
        { titre: { fr: 'Lancer un sort', en: 'Casting a Spell' },
          desc: { fr: 'Composantes, portée, durée et concentration', en: 'Components, range, duration and concentration' },
          tags: { fr: "sort, lancer un sort, incantation, composantes, verbale, gestuelle, matérielle, portée, durée, concentration, rituel, emplacement de sort, magie",
                  en: "spell, cast a spell, casting, components, verbal, somatic, material, range, duration, concentration, ritual, spell slot, magic" },
          fichiers: { fr: '', en: '' } },
        { titre: { fr: 'Sorts mineurs', en: 'Cantrips' },
          desc: { fr: 'Les tours de magie par classe', en: 'The cantrips for each class' },
          tags: { fr: "sort mineur, sorts mineurs, tour de magie, magie, lanceur de sorts",
                  en: "cantrip, cantrips, minor spell, magic, spellcaster" },
          fichiers: { fr: '', en: '' } },
        { titre: { fr: 'Sorts par niveau', en: 'Spells by Level' },
          desc: { fr: 'Listes classées du niveau 1 au niveau 9', en: 'Lists sorted from level 1 to level 9' },
          tags: { fr: "sorts, liste de sorts, niveau 1, niveau 2, niveau 3, niveau 4, niveau 5, niveau 6, niveau 7, niveau 8, niveau 9, emplacement, classe, magicien, clerc, druide",
                  en: "spells, spell list, level 1, level 2, level 3, level 4, level 5, level 6, level 7, level 8, level 9, slot, class, wizard, cleric, druid" },
          fichiers: { fr: '', en: '' } }
      ]
    },

    /* ---------- LES ÉTATS ---------- */
    {
      titre: { fr: 'Les États', en: 'Conditions' },
      intro: { fr: "Aveuglé, empoisonné, paralysé… tout ce qu'un état change.", en: 'Blinded, poisoned, paralyzed… everything a condition changes.' },
      tri: false,
      fiches: [
        { titre: { fr: 'Tous les états', en: 'All Conditions' },
          desc: { fr: 'Effets résumés sur une seule page', en: 'Effects summarized on a single page' },
          tags: { fr: "état, états, condition, aveuglé, aveugle, charmé, assourdi, sourd, épuisement, effrayé, peur, agrippé, neutralisé, incapable d'agir, invisible, paralysé, pétrifié, empoisonné, à terre, entravé, immobilisé, étourdi, inconscient",
                  en: "condition, conditions, blinded, charmed, deafened, exhaustion, frightened, fear, grappled, incapacitated, invisible, paralyzed, petrified, poisoned, prone, restrained, stunned, unconscious" },
          fichiers: { fr: '', en: '' } }
      ]
    },

    /* ---------- L'ÉQUIPEMENT ---------- */
    {
      titre: { fr: "L'Équipement", en: 'Equipment' },
      intro: { fr: 'Armes, armures et outils, avec leurs propriétés.', en: 'Weapons, armor and tools, with their properties.' },
      tri: false,
      fiches: [
        { titre: { fr: 'Armes', en: 'Weapons' },
          desc: { fr: 'Dégâts, propriétés et maîtrises', en: 'Damage, properties and mastery' },
          tags: { fr: "arme, armes, épée, dague, arc, arbalète, hache, masse, lance, rapière, bâton, dégâts, maîtrise d'arme, propriétés, polyvalente, légère, finesse, portée, lancer",
                  en: "weapon, weapons, sword, dagger, bow, crossbow, axe, mace, spear, rapier, quarterstaff, damage, weapon mastery, properties, versatile, light, finesse, range, thrown" },
          fichiers: { fr: '', en: '' } },
        { titre: { fr: 'Armures', en: 'Armor' },
          desc: { fr: "Classe d'armure, force requise et discrétion", en: 'Armor class, strength requirement and stealth' },
          tags: { fr: "armure, armures, classe d'armure, ca, bouclier, cotte de mailles, cuir, plate, force requise, discrétion, désavantage, enfiler, retirer",
                  en: "armor, armour, armor class, ac, shield, chain mail, leather, plate, strength requirement, stealth, disadvantage, don, doff" },
          fichiers: { fr: '', en: '' } },
        { titre: { fr: 'Outils', en: 'Tools' },
          desc: { fr: "Maîtrises d'outils et ce qu'elles permettent", en: 'Tool proficiencies and what they allow' },
          tags: { fr: "outil, outils, maîtrise d'outils, outils de voleur, crochetage, serrure, artisan, kit, instrument, jeu, véhicule, déguisement",
                  en: "tool, tools, tool proficiency, thieves' tools, lockpicking, lock, artisan, kit, instrument, gaming set, vehicle, disguise" },
          fichiers: { fr: '', en: '' } }
      ]
    }
  ];


  /* Recherches fréquentes proposées sous les barres de recherche (un clic = la recherche se lance). */
  var SUGGESTIONS = {
    fr: ['corde', 'assourdi', 'initiative', 'abri', 'concentration', 'armure'],
    en: ['rope', 'deafened', 'initiative', 'cover', 'concentration', 'armor']
  };

  /* ============ MOTEUR DE RECHERCHE (partagé par l'accueil et le grimoire) ============ */
  function simpl(s) {
    return ' ' + String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[·,.:;()«»'’\-]/g, ' ').replace(/\s+/g, ' ').trim();
  }
  var ENTREES = [];
  GUIDES.forEach(function (g, j) { ENTREES.push({ cle: 'g' + j, fiche: g, theme: null, guide: true }); });
  THEMES.forEach(function (th, i) {
    th.fiches.forEach(function (f, j) { ENTREES.push({ cle: 't' + i + '-' + j, fiche: f, theme: th, guide: false }); });
  });
  ENTREES.forEach(function (e) {
    var f = e.fiche;
    e.simpleTitre = simpl(f.titre.fr + ' ' + f.titre.en);
    e.simpleDesc = simpl([f.desc.fr, f.desc.en, e.theme ? e.theme.titre.fr + ' ' + e.theme.titre.en : 'guide guides'].join(' '));
    e.listeTags = [];
    ['fr', 'en'].forEach(function (L) {
      var brut = f.tags && f.tags[L] ? f.tags[L].split(',') : [];
      brut.forEach(function (t) { t = t.trim(); if (t) { e.listeTags.push({ texte: t, simple: simpl(t) }); } });
    });
  });

  /* Retourne les fiches qui correspondent, les plus pertinentes d'abord :
     [ { entree, score, tags: [mots-clés qui ont fait trouver la fiche] } ] */
  function chercher(requete) {
    var q = simpl(requete).trim();
    if (!q) { return []; }
    var mots = q.split(' ').filter(function (m) { return m.length > 1; });
    if (!mots.length) { mots = [q]; }
    var res = [];
    ENTREES.forEach(function (e, ordre) {
      var score = 0, ok = true, trouves = [];
      mots.forEach(function (m) {
        var aiguille = ' ' + m;
        if (e.simpleTitre.indexOf(aiguille) !== -1) { score += 3; return; }
        var tags = e.listeTags.filter(function (t) { return t.simple.indexOf(aiguille) !== -1; });
        if (tags.length) {
          score += 2;
          tags.slice(0, 2).forEach(function (t) { if (trouves.indexOf(t.texte) === -1) { trouves.push(t.texte); } });
          return;
        }
        if (e.simpleDesc.indexOf(aiguille) !== -1) { score += 1; return; }
        ok = false;
      });
      if (ok) { res.push({ entree: e, score: score, ordre: ordre, tags: trouves.slice(0, 3) }); }
    });
    res.sort(function (a, b) { return b.score - a.score || a.ordre - b.ordre; });
    return res;
  }

  if (window.GJ) {
    window.GJ.catalogue = { guides: GUIDES, themes: THEMES, entrees: ENTREES };
    window.GJ.chercher = chercher;
    window.GJ.suggestions = SUGGESTIONS;
  }

  var ETIQUETTES = { 'SRD': 'SRD', 'hors SRD': 'Hors SRD', 'règle de table': 'Règle de table', 'interprétation': 'Interprétation' };
  var MENTION = 'SRD 5.2 (CC BY 4.0) · fiche non officielle, interprétation de nos recherches';

  /* ============ À partir d'ici, plus rien à modifier ============ */

  var conteneur = document.getElementById('parchemins');
  if (!conteneur) { return; }

  /* 1) Les traductions de la liste sont ajoutées au système FR / US. */
  var dico = {};
  function lier(o) { if (o && o.fr && o.en && o.fr !== o.en) { dico[o.fr] = o.en; } }
  function compte(n, un, plusieurs) { return n + ' ' + (n > 1 ? plusieurs : un); }
  dico[MENTION] = 'SRD 5.2 (CC BY 4.0) · unofficial sheet, interpretation from our own research';
  var ng = GUIDES.length;
  dico[compte(ng, 'guide', 'guides')] = compte(ng, 'guide', 'guides');
  GUIDES.forEach(function (g) { lier(g.titre); lier(g.desc); });
  THEMES.forEach(function (theme) {
    lier(theme.titre); lier(theme.intro);
    var n = theme.fiches.length;
    dico[compte(n, "page d'aide", "pages d'aide")] = compte(n, 'help page', 'help pages');
    theme.fiches.forEach(function (f) { lier(f.titre); lier(f.desc); });
  });
  if (window.GJ && window.GJ.extend) { window.GJ.extend(dico); }

  /* 2) La page est construite en français ; GJ la traduit ensuite selon le fanion choisi. */
  function el(balise, classe, texte) {
    var e = document.createElement(balise);
    if (classe) { e.className = classe; }
    if (texte !== undefined) { e.textContent = texte; }
    return e;
  }
  function deux(n) { return (n < 10 ? '0' : '') + n; }

  /* telechargeable = true : bouton ↓ en plus (guides). false : lecture seule (pages d'aide). */
  function ligneFichier(code, fichiers, telechargeable) {
    var ligne = el('div', 'file-row');
    var pages = Array.isArray(fichiers) ? fichiers : (fichiers ? [fichiers] : []);
    var lien = el('a', 'file-link');
    lien.setAttribute('href', pages.length ? pages[0] : '#');
    if (pages.length > 1) { lien.setAttribute('data-pages', pages.join('|')); }
    if (!telechargeable) { lien.setAttribute('data-lecture', 'seule'); }
    lien.appendChild(el('span', '', code));
    lien.appendChild(el('em', 'file-name', telechargeable ? 'Lire le guide' : 'Consulter la page'));
    ligne.appendChild(lien);
    if (pages.length && telechargeable) {
      var dl = el('a', 'file-dl', '↓');
      dl.setAttribute('href', pages[0]);
      dl.setAttribute('download', '');
      dl.setAttribute('title', 'Télécharger');
      dl.setAttribute('aria-label', 'Télécharger');
      ligne.appendChild(dl);
    }
    return ligne;
  }

  function carte(fiche, j, telechargeable, cle) {
    var item = el('div', 'download-item');
    item.setAttribute('data-key', cle);
    var info = el('div', 'download-info');
    info.appendChild(el('span', 'download-number', deux(j + 1)));
    var texte = el('div');
    texte.appendChild(el('h3', '', fiche.titre.fr));
    texte.appendChild(el('p', '', fiche.desc.fr));
    var cle = fiche.etiquette && ETIQUETTES[fiche.etiquette] ? fiche.etiquette : 'SRD';
    texte.appendChild(el('span', 'tag tag-' + cle.replace(/\s+/g, '-'), ETIQUETTES[cle]));
    info.appendChild(texte);
    item.appendChild(info);
    var liens = el('div', 'download-links');
    liens.appendChild(ligneFichier('FR', fiche.fichiers.fr, telechargeable));
    liens.appendChild(ligneFichier('EN', fiche.fichiers.en, telechargeable));
    item.appendChild(liens);
    item.appendChild(el('p', 'fiche-mention', MENTION));
    return item;
  }

  function entete(classe, eyebrow, titre, intro) {
    var s = el('div', 'library-head');
    s.appendChild(el('p', 'eyebrow', eyebrow));
    s.appendChild(el('h2', 'library-title', titre));
    s.appendChild(el('p', 'library-intro', intro));
    return s;
  }

  /* --- Section 1 : les guides à télécharger --- */
  var sectionGuides = el('section', 'library-section');
  sectionGuides.appendChild(entete('', 'Lire en grand ou emporter', 'Les guides à télécharger', 'Pour les lire ici, en grand, ou les télécharger et les garder avec toi.'));
  var liste = el('div', 'guides-list');
  GUIDES.forEach(function (g, j) { liste.appendChild(carte(g, j, true, 'g' + j)); });
  sectionGuides.appendChild(liste);
  conteneur.appendChild(sectionGuides);

  /* --- Section 2 : les pages d'aide à consulter --- */
  var sectionPages = el('section', 'library-section');
  sectionPages.appendChild(entete('', 'À consulter sur le site', "Les pages d'aide à consulter", 'Des pages en très bonne qualité, à lire ici même : reviens quand tu veux, elles sont toujours à jour.'));
  THEMES.forEach(function (theme, i) {
    var details = el('details', 'download-category');
    var resume = el('summary');
    resume.appendChild(el('span', 'cat-number', deux(i + 1)));
    resume.appendChild(el('h3', 'cat-title', theme.titre.fr));
    var n = theme.fiches.length;
    resume.appendChild(el('span', 'cat-meta', compte(n, "page d'aide", "pages d'aide")));
    var bascule = el('span', 'cat-toggle'); bascule.setAttribute('aria-hidden', 'true');
    resume.appendChild(bascule);
    details.appendChild(resume);

    var panneau = el('div', 'category-panel');
    if (theme.tri) { panneau.setAttribute('data-sort', ''); }
    panneau.appendChild(el('p', 'category-intro', theme.intro.fr));
    theme.fiches.forEach(function (fiche, j) { panneau.appendChild(carte(fiche, j, false, 't' + i + '-' + j)); });
    details.appendChild(panneau);
    sectionPages.appendChild(details);
  });
  conteneur.appendChild(sectionPages);

  if (window.GJ && window.GJ.register) { window.GJ.register(conteneur); }
})();
