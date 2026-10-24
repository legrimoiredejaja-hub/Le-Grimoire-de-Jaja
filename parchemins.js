/* ============================================================
   LES PARCHEMINS : la liste de toutes les fiches du site.
   Tout se règle ICI : thèmes, noms des parchemins, descriptions et fichiers.
   La page « Les Parchemins » est construite automatiquement à partir de cette liste,
   dans les deux langues (le fanion FR / US traduit tout seul).

   ┌─ POUR AJOUTER UN PARCHEMIN ───────────────────────────────────────────
   │ 1) Mets ton fichier dans le dossier « parchemins » de ton dépôt GitHub
   │    (PDF conseillé, ou image .png / .jpg). Exemple : parchemins/escalader-une-corde-fr.pdf
   │ 2) Copie un bloc { titre: ..., desc: ..., fichiers: ... } dans le bon thème
   │    et remplis-le. Une ligne « fichiers » : { fr: '...', en: '...' }.
   │      - un fichier PDF ou une image  → 'parchemins/mon-fichier.pdf'
   │      - plusieurs images (= pages)   → ['parchemins/p1.png', 'parchemins/p2.png']
   │      - pas encore prêt              → '' (le parchemin s'affiche en « bientôt »)
   │ 3) Envoie le tout sur GitHub : le parchemin s'ouvre en grand au clic (on n'a plus
   │    qu'à faire défiler) et un petit bouton ↓ permet de le télécharger.
   │
   │ POUR AJOUTER UN THÈME : copie un bloc entier { titre: ..., intro: ..., fiches: [...] }.
   │ « tri: true » = les parchemins se rangent par ordre alphabétique (dans chaque langue).
   │ « tri: false » = ils restent dans l'ordre où tu les écris (utile pour un ordre logique).
   └──────────────────────────────────────────────────────────────────────
   ============================================================ */
(function () {
  'use strict';

  var THEMES = [

    /* ---------- 1. LE COMBAT ---------- */
    {
      titre: { fr: 'Le Combat', en: 'Combat' },
      intro: { fr: 'Le tour de jeu et les actions possibles, sans débat.', en: 'Turn order and available actions, no arguments.' },
      tri: false,
      fiches: [
        { titre: { fr: 'Guide de combat', en: 'Combat Guide' },
          desc: { fr: "Le déroulé d'un tour, de l'initiative aux réactions", en: 'The turn sequence, from initiative to reactions' },
          fichiers: { fr: '', en: '' } },
        { titre: { fr: 'Actions en combat', en: 'Actions in Combat' },
          desc: { fr: 'Toutes les actions disponibles', en: 'All the available actions' },
          fichiers: { fr: '', en: '' } },
        { titre: { fr: 'Couvert et visibilité', en: 'Cover and Visibility' },
          desc: { fr: 'Abri, obscurité et attaques à distance', en: 'Cover, darkness and ranged attacks' },
          fichiers: { fr: '', en: '' } }
      ]
    },

    /* ---------- 2. LES COMPÉTENCES (un parchemin par action concrète) ---------- */
    {
      titre: { fr: 'Les Compétences', en: 'Skills' },
      intro: { fr: 'Une fiche par action, classées par ordre alphabétique : cherche « corde », « nager »… ou le nom de la compétence.', en: 'One sheet per action, in alphabetical order: search "rope", "swim"… or the skill name.' },
      tri: true,
      fiches: [
         { titre: { fr: 'Escalader une corde', en: 'Climb a rope' },
          desc: { fr: 'Athlétisme · Force', en: 'Athletics · Strength' },
          fichiers: { fr: 'parchemins/escalader-une-corde-fr.pdf', en: 'parchemins/escalader-une-corde-us.pdf' } },
        { titre: { fr: 'Nager', en: 'Swim' },
          desc: { fr: 'Athlétisme · Force', en: 'Athletics · Strength' },
          fichiers: { fr: '', en: '' } },
        { titre: { fr: 'Sauter', en: 'Jump' },
          desc: { fr: 'Athlétisme · Force', en: 'Athletics · Strength' },
          fichiers: { fr: '', en: '' } }
      ]
    },

    /* ---------- 3. LES SORTS ---------- */
    {
      titre: { fr: 'Les Sorts', en: 'Spells' },
      intro: { fr: 'Pour lancer ses sorts sans fouiller dans les livres.', en: 'To cast spells without digging through the books.' },
      tri: false,
      fiches: [
        { titre: { fr: 'Lancer un sort', en: 'Casting a Spell' },
          desc: { fr: 'Composantes, portée, durée et concentration', en: 'Components, range, duration and concentration' },
          fichiers: { fr: '', en: '' } },
        { titre: { fr: 'Sorts mineurs', en: 'Cantrips' },
          desc: { fr: 'Les tours de magie par classe', en: 'The cantrips for each class' },
          fichiers: { fr: '', en: '' } },
        { titre: { fr: 'Sorts par niveau', en: 'Spells by Level' },
          desc: { fr: 'Listes classées du niveau 1 au niveau 9', en: 'Lists sorted from level 1 to level 9' },
          fichiers: { fr: '', en: '' } }
      ]
    },

    /* ---------- 4. LES ÉTATS ---------- */
    {
      titre: { fr: 'Les États', en: 'Conditions' },
      intro: { fr: "Aveuglé, empoisonné, paralysé… tout ce qu'un état change.", en: 'Blinded, poisoned, paralyzed… everything a condition changes.' },
      tri: false,
      fiches: [
        { titre: { fr: 'Tous les états', en: 'All Conditions' },
          desc: { fr: 'Effets résumés sur une seule fiche', en: 'Effects summarized on a single sheet' },
          fichiers: { fr: '', en: '' } }
      ]
    },

    /* ---------- 5. L'ÉQUIPEMENT ---------- */
    {
      titre: { fr: "L'Équipement", en: 'Equipment' },
      intro: { fr: 'Armes, armures et outils, avec leurs propriétés.', en: 'Weapons, armor and tools, with their properties.' },
      tri: false,
      fiches: [
        { titre: { fr: 'Armes', en: 'Weapons' },
          desc: { fr: 'Dégâts, propriétés et maîtrises', en: 'Damage, properties and mastery' },
          fichiers: { fr: '', en: '' } },
        { titre: { fr: 'Armures', en: 'Armor' },
          desc: { fr: "Classe d'armure, force requise et discrétion", en: 'Armor class, strength requirement and stealth' },
          fichiers: { fr: '', en: '' } },
        { titre: { fr: 'Outils', en: 'Tools' },
          desc: { fr: "Maîtrises d'outils et ce qu'elles permettent", en: 'Tool proficiencies and what they allow' },
          fichiers: { fr: '', en: '' } }
      ]
    },

    /* ---------- 6. ÉCRANS DE MD ---------- */
    {
      titre: { fr: 'Écrans de MD D&D5.5', en: 'DM Screens D&D5.5' },
      intro: { fr: 'Les écrans à imprimer, pour les règles 5.5 (2024).', en: 'Printable screens, for the 5.5 (2024) rules.' },
      tri: false,
      fiches: [
        { titre: { fr: 'Écran du Maître du Jeu', en: "Dungeon Master's Screen" },
          desc: { fr: 'Les règles essentielles, côté MD', en: 'The essential rules, DM side' },
          fichiers: { fr: '', en: '' } },
        { titre: { fr: 'Écran de combat', en: 'Combat Screen' },
          desc: { fr: "Actions, déplacements et initiative en un coup d'œil", en: 'Actions, movement and initiative at a glance' },
          fichiers: { fr: '', en: '' } },
        { titre: { fr: 'Tables de référence', en: 'Reference Tables' },
          desc: { fr: 'Degrés de difficulté, dégâts et états', en: 'Difficulty classes, damage and conditions' },
          fichiers: { fr: '', en: '' } }
      ]
    }
  ];

  /* ============ À partir d'ici, plus rien à modifier ============ */

  var conteneur = document.getElementById('parchemins');
  if (!conteneur) { return; }

  /* 1) Les traductions de la liste sont ajoutées au système FR / US. */
  var dico = {};
  function lier(o) { if (o && o.fr && o.en && o.fr !== o.en) { dico[o.fr] = o.en; } }
  THEMES.forEach(function (theme) {
    lier(theme.titre); lier(theme.intro);
    var n = theme.fiches.length;
    dico[n + (n > 1 ? ' parchemins' : ' parchemin')] = n + (n > 1 ? ' scrolls' : ' scroll');
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

  function ligneFichier(code, fichiers) {
    var ligne = el('div', 'file-row');
    var pages = Array.isArray(fichiers) ? fichiers : (fichiers ? [fichiers] : []);
    var lien = el('a', 'file-link');
    lien.setAttribute('href', pages.length ? pages[0] : '#');
    if (pages.length > 1) { lien.setAttribute('data-pages', pages.join('|')); }
    lien.appendChild(el('span', '', code));
    lien.appendChild(el('em', 'file-name', 'Lire le parchemin'));
    ligne.appendChild(lien);
    if (pages.length) {
      var dl = el('a', 'file-dl', '↓');
      dl.setAttribute('href', pages[0]);
      dl.setAttribute('download', '');
      dl.setAttribute('title', 'Télécharger');
      dl.setAttribute('aria-label', 'Télécharger');
      ligne.appendChild(dl);
    }
    return ligne;
  }

  THEMES.forEach(function (theme, i) {
    var details = el('details', 'download-category');
    var resume = el('summary');
    resume.appendChild(el('span', 'cat-number', deux(i + 1)));
    resume.appendChild(el('h2', 'cat-title', theme.titre.fr));
    var n = theme.fiches.length;
    resume.appendChild(el('span', 'cat-meta', n + (n > 1 ? ' parchemins' : ' parchemin')));
    var bascule = el('span', 'cat-toggle'); bascule.setAttribute('aria-hidden', 'true');
    resume.appendChild(bascule);
    details.appendChild(resume);

    var panneau = el('div', 'category-panel');
    if (theme.tri) { panneau.setAttribute('data-sort', ''); }
    panneau.appendChild(el('p', 'category-intro', theme.intro.fr));

    theme.fiches.forEach(function (fiche, j) {
      var item = el('div', 'download-item');
      var info = el('div', 'download-info');
      info.appendChild(el('span', 'download-number', deux(j + 1)));
      var texte = el('div');
      texte.appendChild(el('h3', '', fiche.titre.fr));
      texte.appendChild(el('p', '', fiche.desc.fr));
      info.appendChild(texte);
      item.appendChild(info);
      var liens = el('div', 'download-links');
      liens.appendChild(ligneFichier('FR', fiche.fichiers.fr));
      liens.appendChild(ligneFichier('EN', fiche.fichiers.en));
      item.appendChild(liens);
      panneau.appendChild(item);
    });

    details.appendChild(panneau);
    conteneur.appendChild(details);
  });

  if (window.GJ && window.GJ.register) { window.GJ.register(conteneur); }
})();
