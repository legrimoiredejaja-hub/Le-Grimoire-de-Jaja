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
      fichiers: { fr: 'parchemins/Ecran_MDJ_Le_Grimoire_de_Jaja.pdf', en: 'parchemins/GM_Screen_Le_Grimoire_de_Jaja_US.pdf' } },
    { titre: { fr: 'Guide de combat', en: 'Combat Guide' },
      desc: { fr: "Le déroulé d'un tour, de l'initiative aux réactions", en: 'The turn sequence, from initiative to reactions' },
      tags: { fr: "combat, initiative, tour de jeu, ordre du tour, action, action bonus, réaction, déplacement, attaque, se battre",
              en: "combat, initiative, turn, turn order, action, bonus action, reaction, movement, attack, fight" },
      fichiers: { fr: 'parchemins/Guide_de_Combat%20-%20Le%20Grimoire%20de%20Jaja%20-%20FR%20SRD.pdf', en: 'parchemins/Combat_Guide%20-%20Le%20Grimoire%20de%20Jaja%20-%20US%20SRD.pdf' } }
  ];

  /* ======================= 2. LES PAGES D'AIDE À CONSULTER ======================= */
  var THEMES = [

    /* ---------- LES COMPÉTENCES ---------- */
    {
      titre: { fr: "Les Compétences", en: "Skills" },
      intro: { fr: "Une page par compétence ou action, classées par ordre alphabétique : cherche « corde », « nager »… ou le nom de la compétence.", en: "One page per skill or action, in alphabetical order: search \"rope\", \"swim\"… or the skill name." },
      tri: true,
      fiches: [
        { titre: { fr: "Acrobaties", en: "Acrobatics" },
          desc: { fr: "Dextérité · équilibre, chutes et cabrioles", en: "Dexterity · balance, falls and tumbling" },
          tags: { fr: "acrobatie, acrobaties, équilibre, saut périlleux, chute, esquive, dextérité, tomber",
                  en: "acrobatics, balance, tumble, flip, fall, dexterity" },
          fichiers: { fr: "parchemins/fiche_acrobaties_parchemin.pdf", en: "parchemins/fiche_acrobaties_parchemin_US.pdf" } },
        { titre: { fr: "Arcanes", en: "Arcana" },
          desc: { fr: "Intelligence · savoir sur la magie", en: "Intelligence · knowledge of magic" },
          tags: { fr: "arcane, arcanes, magie, sorts, savoir, intelligence, planes, créatures magiques",
                  en: "arcana, magic, spells, lore, intelligence, planes, magical creatures" },
          fichiers: { fr: "parchemins/fiche_arcanes_parchemin.pdf", en: "parchemins/fiche_arcanes_parchemin_US.pdf" } },
        { titre: { fr: "Athlétisme", en: "Athletics" },
          desc: { fr: "Force · escalader, nager, sauter", en: "Strength · climb, swim, jump" },
          tags: { fr: "athlétisme, force, escalader, nager, sauter, grimper, lutter",
                  en: "athletics, strength, climb, swim, jump, grapple" },
          fichiers: { fr: "parchemins/fiche_athletisme_parchemin.pdf", en: "parchemins/fiche_athletisme_parchemin_US.pdf" } },
        { titre: { fr: "Discrétion", en: "Stealth" },
          desc: { fr: "Dextérité · se cacher et se déplacer en silence", en: "Dexterity · hide and move silently" },
          tags: { fr: "discrétion, furtivité, se cacher, silence, sournois, dextérité, caché",
                  en: "stealth, sneak, hide, hidden, silent, dexterity" },
          fichiers: { fr: "parchemins/fiche_discretion_parchemin.pdf", en: "parchemins/fiche_discretion_parchemin_US.pdf" } },
        { titre: { fr: "Dressage", en: "Animal Handling" },
          desc: { fr: "Sagesse · calmer et guider un animal", en: "Wisdom · calm and guide an animal" },
          tags: { fr: "dressage, animal, animaux, monture, calmer, dresser, sagesse, cheval",
                  en: "animal handling, animals, mount, calm, wisdom, horse" },
          fichiers: { fr: "parchemins/fiche_dressage_parchemin.pdf", en: "parchemins/fiche_dressage_parchemin_US.pdf" } },
        { titre: { fr: "Escamotage", en: "Sleight of Hand" },
          desc: { fr: "Dextérité · vol à la tire et tours de passe-passe", en: "Dexterity · pickpocketing and sleight of hand" },
          tags: { fr: "escamotage, vol, voler, pickpocket, passe-passe, dextérité, subtiliser, cacher un objet",
                  en: "sleight of hand, steal, pickpocket, theft, dexterity, palm" },
          fichiers: { fr: "parchemins/fiche_escamotage_parchemin.pdf", en: "parchemins/fiche_escamotage_parchemin_US.pdf" } },
        { titre: { fr: "Histoire", en: "History" },
          desc: { fr: "Intelligence · savoir sur le passé", en: "Intelligence · knowledge of the past" },
          tags: { fr: "histoire, passé, légendes, royaumes, guerres, savoir, intelligence",
                  en: "history, past, legends, kingdoms, wars, lore, intelligence" },
          fichiers: { fr: "parchemins/fiche_histoire_parchemin.pdf", en: "parchemins/fiche_histoire_parchemin_US.pdf" } },
        { titre: { fr: "Intimidation", en: "Intimidation" },
          desc: { fr: "Charisme · pousser quelqu'un à céder par la peur", en: "Charisma · pressure someone with fear" },
          tags: { fr: "intimidation, intimider, menace, menacer, peur, charisme, pression",
                  en: "intimidation, intimidate, threat, threaten, fear, charisma, pressure" },
          fichiers: { fr: "parchemins/fiche_intimidation_parchemin.pdf", en: "parchemins/fiche_intimidation_parchemin_US.pdf" } },
        { titre: { fr: "Connaître une créature", en: "Identify a Creature" },
          desc: { fr: "Ce que l'on sait d'une créature", en: "What you know about a creature" },
          tags: { fr: "créature, monstre, connaître, identifier, faiblesses, savoir, vulnérabilité, résistance, arcanes, nature, religion, histoire",
                  en: "creature, monster, identify, know, weakness, lore, vulnerability, resistance, arcana, nature, religion, history" },
          fichiers: { fr: "parchemins/fiche_connaitre_creature_parchemin.pdf", en: "parchemins/fiche_connaitre_creature_parchemin_US.pdf" } },
        { titre: { fr: "Escalader une corde", en: "Climb a Rope" },
          desc: { fr: "Athlétisme · Force", en: "Athletics · Strength" },
          tags: { fr: "grimper, escalade, escalader, corde, mur, falaise, athlétisme, force, vitesse",
                  en: "climb, climbing, rope, wall, cliff, athletics, strength, speed" },
          fichiers: { fr: "parchemins/fiche_escalader_corde_parchemin.pdf", en: "parchemins/fiche_escalader_corde_parchemin_US.pdf" } },
        { titre: { fr: "Natation et vie sous l'eau", en: "Swimming and Underwater" },
          desc: { fr: "Nager, retenir son souffle et se noyer", en: "Swim, hold your breath and drown" },
          tags: { fr: "nage, nager, eau, noyade, se noyer, sous l'eau, sous-marin, souffle, retenir sa respiration, rivière, mer, courant",
                  en: "swim, swimming, water, drowning, underwater, breath, hold breath, river, sea, current" },
          fichiers: { fr: "parchemins/fiche_natation_sous_marine_parchemin.pdf", en: "parchemins/fiche_natation_sous_marine_parchemin_US.pdf" } }
      ]
    },

    /* ---------- LE COMBAT ---------- */
    {
      titre: { fr: "Le Combat", en: "Combat" },
      intro: { fr: "Initiative, surprise, lutte et états : le tour de jeu sans débat.", en: "Initiative, surprise, grappling and conditions: the turn without arguments." },
      tri: false,
      fiches: [
        { titre: { fr: "Combattre une créature invisible", en: "Fighting an Invisible Creature" },
          desc: { fr: "Attaquer ce que l'on ne voit pas", en: "Attacking what you cannot see" },
          tags: { fr: "invisible, invisibilité, créature invisible, attaque, désavantage, avantage, deviner, cacher, combat",
                  en: "invisible, invisibility, invisible creature, attack, disadvantage, advantage, guess, hidden, combat" },
          fichiers: { fr: "parchemins/fiche_combat_creatures_invisibles_parchemin.pdf", en: "parchemins/fiche_combat_creatures_invisibles_parchemin_US.pdf" } },
        { titre: { fr: "Lutte", en: "Grappling" },
          desc: { fr: "Agripper, immobiliser et projeter", en: "Grab, restrain and shove" },
          tags: { fr: "lutte, lutter, agripper, agrippé, empoigner, immobiliser, plaquer, bousculer, projeter, à terre, saisir",
                  en: "grapple, grappling, grappled, grab, restrain, shove, prone, wrestle" },
          fichiers: { fr: "parchemins/fiche_lutte_parchemin.pdf", en: "parchemins/fiche_lutte_parchemin_US.pdf" } },
        { titre: { fr: "Initiative", en: "Initiative" },
          desc: { fr: "Qui joue en premier, et dans quel ordre", en: "Who goes first, and in what order" },
          tags: { fr: "initiative, ordre, tour de jeu, ordre du tour, dextérité, qui joue, début du combat",
                  en: "initiative, order, turn order, dexterity, who goes first, start of combat" },
          fichiers: { fr: "parchemins/fiche_initiative_parchemin.pdf", en: "parchemins/fiche_initiative_parchemin_US.pdf" } },
        { titre: { fr: "Surprise", en: "Surprise" },
          desc: { fr: "Embuscade et premier tour de combat", en: "Ambush and the first round of combat" },
          tags: { fr: "surprise, surpris, embuscade, attaque surprise, discrétion, désavantage, initiative",
                  en: "surprise, surprised, ambush, sneak attack, stealth, disadvantage, initiative" },
          fichiers: { fr: "parchemins/fiche_surprise_parchemin.pdf", en: "parchemins/fiche_surprise_parchemin_US.pdf" } },
        { titre: { fr: "Tous les états", en: "All Conditions" },
          desc: { fr: "Effets résumés sur une seule page", en: "Effects summarized on a single page" },
          tags: { fr: "état, états, condition, aveuglé, charmé, assourdi, sourd, épuisement, effrayé, peur, agrippé, neutralisé, incapable d'agir, invisible, paralysé, pétrifié, empoisonné, à terre, entravé, étourdi, inconscient",
                  en: "condition, conditions, blinded, charmed, deafened, exhaustion, frightened, grappled, incapacitated, invisible, paralyzed, petrified, poisoned, prone, restrained, stunned, unconscious" },
          fichiers: { fr: '', en: '' } }
      ]
    },

    /* ---------- EXPLORATION ET SURVIE ---------- */
    {
      titre: { fr: "Exploration et survie", en: "Exploration and Survival" },
      intro: { fr: "Pièges, repos, points de vie et mort.", en: "Traps, rests, hit points and dying." },
      tri: false,
      fiches: [
        { titre: { fr: "Pièges", en: "Traps" },
          desc: { fr: "Repérer, désamorcer et subir un piège", en: "Spot, disarm and survive a trap" },
          tags: { fr: "piège, pièges, désamorcer, détecter, repérer, fosse, dard, perception, investigation, voleur, dégâts",
                  en: "trap, traps, disarm, detect, spot, pit, dart, perception, investigation, thief, damage" },
          fichiers: { fr: "parchemins/fiche_pieges_parchemin.pdf", en: "parchemins/fiche_pieges_parchemin_US.pdf" } },
        { titre: { fr: "Repos", en: "Resting" },
          desc: { fr: "Repos court et repos long", en: "Short rest and long rest" },
          tags: { fr: "repos, repos court, repos long, dés de vie, récupérer, soigner, se reposer, sommeil, 8 heures, une heure",
                  en: "rest, short rest, long rest, hit dice, recover, heal, sleep, 8 hours, one hour" },
          fichiers: { fr: "parchemins/fiche_repos_parchemin.pdf", en: "parchemins/fiche_repos_parchemin_US.pdf" } },
        { titre: { fr: "Points de vie, soins et mort", en: "Hit Points, Healing and Dying" },
          desc: { fr: "Dégâts, soins, jets de sauvegarde contre la mort", en: "Damage, healing, death saving throws" },
          tags: { fr: "points de vie, pv, soins, soigner, mort, mourir, mourant, inconscient, jet de sauvegarde contre la mort, stabiliser, 0 pv, dégâts",
                  en: "hit points, hp, healing, heal, death, dying, unconscious, death saving throw, stabilize, 0 hp, damage" },
          fichiers: { fr: "parchemins/fiche_pv_soins_mort_parchemin.pdf", en: "parchemins/fiche_pv_soins_mort_parchemin_US.pdf" } }
      ]
    },

    /* ---------- LA MAGIE ---------- */
    {
      titre: { fr: "La Magie", en: "Magic" },
      intro: { fr: "Lancer un sort, reconnaître la magie et manier les objets magiques.", en: "Casting, recognizing magic and handling magic items." },
      tri: false,
      fiches: [
        { titre: { fr: "Lancer un sort", en: "Casting a Spell" },
          desc: { fr: "Composantes, portée, durée et concentration", en: "Components, range, duration and concentration" },
          tags: { fr: "sort, lancer un sort, incantation, composantes, verbale, gestuelle, matérielle, portée, durée, concentration, rituel, emplacement de sort, magie",
                  en: "spell, cast, casting, components, verbal, somatic, material, range, duration, concentration, ritual, spell slot, magic" },
          fichiers: { fr: "parchemins/fiche_lancer_un_sort_parchemin.pdf", en: "parchemins/fiche_lancer_un_sort_parchemin_US.pdf" } },
        { titre: { fr: "Détection de la magie", en: "Detecting Magic" },
          desc: { fr: "Repérer ce qui est magique", en: "Spotting what is magical" },
          tags: { fr: "détection de la magie, détecter la magie, magique, aura, objet magique, école de magie, détecter",
                  en: "detect magic, magical, aura, magic item, school of magic, detect" },
          fichiers: { fr: "parchemins/fiche_detection_magie_parchemin.pdf", en: "parchemins/fiche_detection_magie_parchemin_US.pdf" } },
        { titre: { fr: "Identifier un sort", en: "Identifying a Spell" },
          desc: { fr: "Reconnaître un sort lancé devant soi", en: "Recognizing a spell cast in front of you" },
          tags: { fr: "identifier un sort, reconnaître un sort, sort, arcanes, incantation, composantes, voir lancer",
                  en: "identify a spell, recognize a spell, spell, arcana, casting, components, see cast" },
          fichiers: { fr: "parchemins/fiche_identifier_sort_parchemin.pdf", en: "parchemins/fiche_identifier_sort_parchemin_US.pdf" } },
        { titre: { fr: "Identifier un objet magique", en: "Identifying a Magic Item" },
          desc: { fr: "Découvrir ce que fait un objet magique", en: "Find out what a magic item does" },
          tags: { fr: "identifier un objet magique, objet magique, objet, magie, repos court, détection, propriétés",
                  en: "identify a magic item, magic item, item, magic, short rest, detection, properties" },
          fichiers: { fr: "parchemins/fiche_identifier_objet_magique_parchemin.pdf", en: "parchemins/fiche_identifier_objet_magique_parchemin_US.pdf" } },
        { titre: { fr: "Objets magiques maudits", en: "Cursed Magic Items" },
          desc: { fr: "Malédictions, accord et comment s'en défaire", en: "Curses, attunement and how to be rid of them" },
          tags: { fr: "maudit, malédiction, objet maudit, objet magique, harmonisation, accord, lien, se débarrasser, retirer malédiction",
                  en: "cursed, curse, cursed item, magic item, attunement, bond, get rid of, remove curse" },
          fichiers: { fr: "parchemins/fiche_objets_magiques_maudits_parchemin.pdf", en: "parchemins/fiche_objets_magiques_maudits_parchemin_US.pdf" } },
        { titre: { fr: "Parchemin de sort", en: "Spell Scroll" },
          desc: { fr: "Utiliser et lire un parchemin de sort", en: "Using and reading a spell scroll" },
          tags: { fr: "parchemin, parchemin de sort, lire, sort, niveau, magie, objet magique, copier un sort",
                  en: "scroll, spell scroll, read, spell, level, magic, magic item, copy a spell" },
          fichiers: { fr: "parchemins/fiche_parchemin_de_sort_parchemin.pdf", en: "parchemins/fiche_parchemin_de_sort_parchemin_US.pdf" } },
        { titre: { fr: "Sorts à action bonus", en: "Bonus Action Spells" },
          desc: { fr: "La règle de l'action bonus et la liste des sorts", en: "The bonus action rule and the list of spells" },
          tags: { fr: "action bonus, sort, sorts, règle, un seul sort, tour, bouclier, mot de guérison",
                  en: "bonus action, spell, spells, rule, one spell, turn, shield, healing word" },
          fichiers: { fr: "parchemins/fiche_sorts_action_bonus_parchemin.pdf", en: "parchemins/fiche_sorts_action_bonus_parchemin_US.pdf" } }
      ]
    },

    /* ---------- LES SORTS ---------- */
    {
      titre: { fr: "Les Sorts", en: "Spells" },
      intro: { fr: "Les sorts les plus courants, un par page, classés par ordre alphabétique : tape un nom, un effet ou un niveau.", en: "The most common spells, one per page, in alphabetical order: type a name, an effect or a level." },
      tri: true,
      fiches: [
        { titre: { fr: "Contresort", en: "Counterspell" },
          desc: { fr: "Sort de niveau 3", en: "Level 3 spell" },
          tags: { fr: "sort, sorts, niveau 3, contresort, contrer, annuler un sort, réaction, abjuration",
                  en: "spell, spells, level 3, counterspell, counter, cancel a spell, reaction, abjuration" },
          fichiers: { fr: "parchemins/fiche_contresort_parchemin.pdf", en: "parchemins/fiche_contresort_parchemin_US.pdf" } },
        { titre: { fr: "Toile d'araignée", en: "Web" },
          desc: { fr: "Sort de niveau 2", en: "Level 2 spell" },
          tags: { fr: "sort, sorts, niveau 2, toile, araignée, toile d'araignée, entraver, entravé, filet, zone, dextérité, feu",
                  en: "spell, spells, level 2, web, spider, restrain, restrained, net, area, dexterity, fire" },
          fichiers: { fr: "parchemins/fiche_toile_araignee_parchemin.pdf", en: "parchemins/fiche_toile_araignee_parchemin_US.pdf" } },
        { titre: { fr: "Sommeil", en: "Sleep" },
          desc: { fr: "Sort de niveau 1", en: "Level 1 spell" },
          tags: { fr: "sort, sorts, niveau 1, sommeil, dormir, endormir, inconscient, points de vie, zone, enchantement",
                  en: "spell, spells, level 1, sleep, sleeping, unconscious, hit points, area, enchantment" },
          fichiers: { fr: "parchemins/fiche_sommeil_parchemin.pdf", en: "parchemins/fiche_sommeil_parchemin_US.pdf" } },
        { titre: { fr: "Souhait", en: "Wish" },
          desc: { fr: "Sort de niveau 9", en: "Level 9 spell" },
          tags: { fr: "sort, sorts, niveau 9, souhait, vœu, voeu, exaucer, ultime, niveau 9, copier un sort",
                  en: "spell, spells, level 9, wish, ultimate, grant, level 9, duplicate a spell" },
          fichiers: { fr: "parchemins/fiche_souhait_parchemin.pdf", en: "parchemins/fiche_souhait_parchemin_US.pdf" } },
        { titre: { fr: "Invocation d'animaux", en: "Conjure Animals" },
          desc: { fr: "Sort de niveau 3", en: "Level 3 spell" },
          tags: { fr: "sort, sorts, niveau 3, invocation, invoquer, animaux, bêtes, convoquer, meute, concentration",
                  en: "spell, spells, level 3, conjure, summon, animals, beasts, pack, concentration" },
          fichiers: { fr: "parchemins/fiche_invocation_animaux_parchemin.pdf", en: "parchemins/fiche_invocation_animaux_parchemin_US.pdf" } },
        { titre: { fr: "Insecte géant", en: "Giant Insect" },
          desc: { fr: "Sort de niveau 4", en: "Level 4 spell" },
          tags: { fr: "sort, sorts, niveau 4, insecte, insectes géants, araignée, mille-pattes, guêpe, invoquer, concentration",
                  en: "spell, spells, level 4, giant insect, insects, spider, centipede, wasp, summon, concentration" },
          fichiers: { fr: "parchemins/fiche_insecte_geant_parchemin.pdf", en: "parchemins/fiche_insecte_geant_parchemin_US.pdf" } },
        { titre: { fr: "Rayon de maladie", en: "Ray of Sickness" },
          desc: { fr: "Sort de niveau 1", en: "Level 1 spell" },
          tags: { fr: "sort, sorts, niveau 1, rayon, maladie, nausée, empoisonné, poison, dégâts de poison, attaque à distance",
                  en: "spell, spells, level 1, ray, sickness, nausea, poisoned, poison, poison damage, ranged attack" },
          fichiers: { fr: "parchemins/fiche_rayon_maladie_parchemin.pdf", en: "parchemins/fiche_rayon_maladie_parchemin_US.pdf" } },
        { titre: { fr: "Aura de vitalité", en: "Aura of Vitality" },
          desc: { fr: "Sort de niveau 3", en: "Level 3 spell" },
          tags: { fr: "sort, sorts, niveau 3, aura, vitalité, soins, soigner, action bonus, concentration, guérison",
                  en: "spell, spells, level 3, aura, vitality, healing, heal, bonus action, concentration" },
          fichiers: { fr: "parchemins/fiche_aura_vitalite_parchemin.pdf", en: "parchemins/fiche_aura_vitalite_parchemin_US.pdf" } },
        { titre: { fr: "Projectile magique", en: "Magic Missile" },
          desc: { fr: "Sort de niveau 1", en: "Level 1 spell" },
          tags: { fr: "sort, sorts, niveau 1, projectile magique, projectiles, force, dégâts de force, toujours touche, magicien",
                  en: "spell, spells, level 1, magic missile, missiles, force, force damage, auto-hit, wizard" },
          fichiers: { fr: "parchemins/fiche_projectile_magique_parchemin.pdf", en: "parchemins/fiche_projectile_magique_parchemin_US.pdf" } },
        { titre: { fr: "Bouclier", en: "Shield" },
          desc: { fr: "Sort de niveau 1", en: "Level 1 spell" },
          tags: { fr: "sort, sorts, niveau 1, bouclier, protection, classe d'armure, ca, réaction, projectile magique",
                  en: "spell, spells, level 1, shield, protection, armor class, ac, reaction, magic missile" },
          fichiers: { fr: "parchemins/fiche_bouclier_parchemin.pdf", en: "parchemins/fiche_bouclier_parchemin_US.pdf" } },
        { titre: { fr: "Mot de guérison", en: "Healing Word" },
          desc: { fr: "Sort de niveau 1", en: "Level 1 spell" },
          tags: { fr: "sort, sorts, niveau 1, mot de guérison, soigner, soins, guérison, action bonus, relever, à distance",
                  en: "spell, spells, level 1, healing word, heal, healing, bonus action, get up, ranged" },
          fichiers: { fr: "parchemins/fiche_mot_de_guerison_parchemin.pdf", en: "parchemins/fiche_mot_de_guerison_parchemin_US.pdf" } },
        { titre: { fr: "Immobilisation de personne", en: "Hold Person" },
          desc: { fr: "Sort de niveau 2", en: "Level 2 spell" },
          tags: { fr: "sort, sorts, niveau 2, immobilisation, immobiliser, paralysé, paralysie, humanoïde, concentration, sagesse",
                  en: "spell, spells, level 2, hold person, hold, paralyzed, paralysis, humanoid, concentration, wisdom" },
          fichiers: { fr: "parchemins/fiche_immobilisation_personne_parchemin.pdf", en: "parchemins/fiche_immobilisation_personne_parchemin_US.pdf" } },
        { titre: { fr: "Boule de feu", en: "Fireball" },
          desc: { fr: "Sort de niveau 3", en: "Level 3 spell" },
          tags: { fr: "sort, sorts, niveau 3, boule de feu, feu, explosion, dégâts de feu, zone, dextérité, flammes",
                  en: "spell, spells, level 3, fireball, fire, explosion, fire damage, area, dexterity, flames" },
          fichiers: { fr: "parchemins/fiche_boule_de_feu_parchemin.pdf", en: "parchemins/fiche_boule_de_feu_parchemin_US.pdf" } },
        { titre: { fr: "Métamorphose", en: "Polymorph" },
          desc: { fr: "Sort de niveau 4", en: "Level 4 spell" },
          tags: { fr: "sort, sorts, niveau 4, métamorphose, transformer, transformation, bête, forme, concentration, sagesse",
                  en: "spell, spells, level 4, polymorph, transform, transformation, beast, shape, concentration, wisdom" },
          fichiers: { fr: "parchemins/fiche_metamorphose_parchemin.pdf", en: "parchemins/fiche_metamorphose_parchemin_US.pdf" } },
        { titre: { fr: "Invisibilité", en: "Invisibility" },
          desc: { fr: "Sort de niveau 2", en: "Level 2 spell" },
          tags: { fr: "sort, sorts, niveau 2, invisibilité, invisible, disparaître, concentration, illusion, désavantage, avantage",
                  en: "spell, spells, level 2, invisibility, invisible, vanish, concentration, illusion, disadvantage, advantage" },
          fichiers: { fr: "parchemins/fiche_invisibilite_parchemin.pdf", en: "parchemins/fiche_invisibilite_parchemin_US.pdf" } },
        { titre: { fr: "Mur de force", en: "Wall of Force" },
          desc: { fr: "Sort de niveau 5", en: "Level 5 spell" },
          tags: { fr: "sort, sorts, niveau 5, mur de force, mur, force, barrière, indestructible, concentration, dôme",
                  en: "spell, spells, level 5, wall of force, wall, force, barrier, indestructible, concentration, dome" },
          fichiers: { fr: "parchemins/fiche_mur_de_force_parchemin.pdf", en: "parchemins/fiche_mur_de_force_parchemin_US.pdf" } },
        { titre: { fr: "Image miroir", en: "Mirror Image" },
          desc: { fr: "Sort de niveau 2", en: "Level 2 spell" },
          tags: { fr: "sort, sorts, niveau 2, image miroir, images, doubles, illusion, esquiver, classe d'armure, ca",
                  en: "spell, spells, level 2, mirror image, images, duplicates, illusion, dodge, armor class, ac" },
          fichiers: { fr: "parchemins/fiche_image_miroir_parchemin.pdf", en: "parchemins/fiche_image_miroir_parchemin_US.pdf" } },
        { titre: { fr: "Sanctuaire", en: "Sanctuary" },
          desc: { fr: "Sort de niveau 1", en: "Level 1 spell" },
          tags: { fr: "sort, sorts, niveau 1, sanctuaire, protéger, protection, ne pas être attaqué, action bonus, sagesse",
                  en: "spell, spells, level 1, sanctuary, protect, protection, cannot be attacked, bonus action, wisdom" },
          fichiers: { fr: "parchemins/fiche_sanctuaire_parchemin.pdf", en: "parchemins/fiche_sanctuaire_parchemin_US.pdf" } },
        { titre: { fr: "Charme-personne", en: "Charm Person" },
          desc: { fr: "Sort de niveau 1", en: "Level 1 spell" },
          tags: { fr: "sort, sorts, niveau 1, charme, charme-personne, charmé, humanoïde, ami, sagesse, enchantement",
                  en: "spell, spells, level 1, charm, charm person, charmed, humanoid, friend, wisdom, enchantment" },
          fichiers: { fr: "parchemins/fiche_charme_personne_parchemin.pdf", en: "parchemins/fiche_charme_personne_parchemin_US.pdf" } },
        { titre: { fr: "Peur", en: "Fear" },
          desc: { fr: "Sort de niveau 3", en: "Level 3 spell" },
          tags: { fr: "sort, sorts, niveau 3, peur, effrayé, fuir, terreur, cône, sagesse, concentration",
                  en: "spell, spells, level 3, fear, frightened, flee, terror, cone, wisdom, concentration" },
          fichiers: { fr: "parchemins/fiche_peur_parchemin.pdf", en: "parchemins/fiche_peur_parchemin_US.pdf" } },
        { titre: { fr: "Silence", en: "Silence" },
          desc: { fr: "Sort de niveau 2", en: "Level 2 spell" },
          tags: { fr: "sort, sorts, niveau 2, silence, sourd, assourdi, bruit, verbale, composante verbale, zone, concentration, rituel",
                  en: "spell, spells, level 2, silence, deaf, deafened, noise, verbal, verbal component, area, concentration, ritual" },
          fichiers: { fr: "parchemins/fiche_silence_parchemin.pdf", en: "parchemins/fiche_silence_parchemin_US.pdf" } },
        { titre: { fr: "Animation des morts", en: "Animate Dead" },
          desc: { fr: "Sort de niveau 3", en: "Level 3 spell" },
          tags: { fr: "sort, sorts, niveau 3, animation des morts, mort-vivant, squelette, zombie, nécromancie, morts, relever",
                  en: "spell, spells, level 3, animate dead, undead, skeleton, zombie, necromancy, dead, raise" },
          fichiers: { fr: "parchemins/fiche_animation_des_morts_parchemin.pdf", en: "parchemins/fiche_animation_des_morts_parchemin_US.pdf" } },
        { titre: { fr: "Appel de familier", en: "Find Familiar" },
          desc: { fr: "Sort de niveau 1", en: "Level 1 spell" },
          tags: { fr: "sort, sorts, niveau 1, familier, appel de familier, compagnon, esprit, chat, hibou, corbeau, rituel",
                  en: "spell, spells, level 1, familiar, find familiar, companion, spirit, cat, owl, raven, ritual" },
          fichiers: { fr: "parchemins/fiche_appel_de_familier_parchemin.pdf", en: "parchemins/fiche_appel_de_familier_parchemin_US.pdf" } },
        { titre: { fr: "Dissipation de la magie", en: "Dispel Magic" },
          desc: { fr: "Sort de niveau 3", en: "Level 3 spell" },
          tags: { fr: "sort, sorts, niveau 3, dissipation, dissiper, annuler la magie, mettre fin à un sort, caractéristique de lancer de sorts",
                  en: "spell, spells, level 3, dispel magic, dispel, end magic, end a spell, spellcasting ability" },
          fichiers: { fr: "parchemins/fiche_dissipation_de_la_magie_parchemin.pdf", en: "parchemins/fiche_dissipation_de_la_magie_parchemin_US.pdf" } },
        { titre: { fr: "Bannissement", en: "Banishment" },
          desc: { fr: "Sort de niveau 4", en: "Level 4 spell" },
          tags: { fr: "sort, sorts, niveau 4, bannissement, bannir, renvoyer, autre plan, charisme, concentration, extraplanaire",
                  en: "spell, spells, level 4, banishment, banish, send away, other plane, charisma, concentration, extraplanar" },
          fichiers: { fr: "parchemins/fiche_bannissement_parchemin.pdf", en: "parchemins/fiche_bannissement_parchemin_US.pdf" } },
        { titre: { fr: "Esprits gardiens", en: "Spirit Guardians" },
          desc: { fr: "Sort de niveau 3", en: "Level 3 spell" },
          tags: { fr: "sort, sorts, niveau 3, esprits gardiens, esprits, gardiens, aura, zone, dégâts radiants, clerc, concentration, sagesse",
                  en: "spell, spells, level 3, spirit guardians, spirits, guardians, aura, area, radiant damage, cleric, concentration, wisdom" },
          fichiers: { fr: "parchemins/fiche_esprits_gardiens_parchemin.pdf", en: "parchemins/fiche_esprits_gardiens_parchemin_US.pdf" } }
      ]
    }
  ];


  /* Recherches fréquentes proposées sous les barres de recherche (un clic = la recherche se lance). */
  var SUGGESTIONS = {
    fr: ['corde', 'boule de feu', 'initiative', 'repos', 'concentration', 'invisible'],
    en: ['rope', 'fireball', 'initiative', 'rest', 'concentration', 'invisible']
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
    var mots = q.split(' ').filter(function (m) { return m.length > 1 || /^[0-9]$/.test(m); });
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
