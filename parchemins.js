/* Liste des guides et pages d'aide. */
(function() {
  "use strict";
  var GUIDES = [
    {
      titre: { fr: "Écran du Maître du Jeu", en: "Dungeon Master's Screen" },
      desc: { fr: "Les règles essentielles, côté MD", en: "The essential rules, DM side" },
      tags: {
        fr: "écran, maître du jeu, md, mj, degré de difficulté, dd, jet de sauvegarde, règles essentielles",
        en: "screen, dungeon master, dm, game master, difficulty class, dc, saving throw, essential rules"
      },
      fichiers: { fr: "parchemins/Ecran_MDJ_Le_Grimoire_de_Jaja.pdf", en: "parchemins/GM_Screen_Le_Grimoire_de_Jaja_US.pdf" }
    },
    {
      titre: { fr: "Guide de combat", en: "Combat Guide" },
      desc: { fr: "Le déroulé d'un tour, de l'initiative aux réactions", en: "The turn sequence, from initiative to reactions" },
      tags: {
        fr: "combat, initiative, tour de jeu, ordre du tour, action, action bonus, réaction, déplacement, attaque, se battre",
        en: "combat, initiative, turn, turn order, action, bonus action, reaction, movement, attack, fight"
      },
      fichiers: { fr: "parchemins/Guide_de_Combat%20-%20Le%20Grimoire%20de%20Jaja%20-%20FR%20SRD.pdf", en: "parchemins/Combat_Guide%20-%20Le%20Grimoire%20de%20Jaja%20-%20US%20SRD.pdf" }
    }
  ];
  var THEMES = [
    /* ---------- LES COMPÉTENCES ---------- */
    {
      titre: { fr: "Les Compétences", en: "Skills" },
      intro: { fr: "Une page par compétence ou action, classées par ordre alphabétique : cherche « corde », « nager »… ou le nom de la compétence.", en: 'One page per skill or action, in alphabetical order: search "rope", "swim"… or the skill name.' },
      tri: true,
      fiches: [
        {
          titre: { fr: "Acrobaties", en: "Acrobatics" },
          desc: { fr: "Dextérité · équilibre, chutes et cabrioles", en: "Dexterity · balance, falls and tumbling" },
          tags: {
            fr: "acrobatie, acrobaties, équilibre, saut périlleux, chute, esquive, dextérité, tomber",
            en: "acrobatics, balance, tumble, flip, fall, dexterity"
          },
          fichiers: { fr: "parchemins/fiche_acrobaties_parchemin.pdf", en: "parchemins/fiche_acrobaties_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Arcanes", en: "Arcana" },
          desc: { fr: "Intelligence · savoir sur la magie", en: "Intelligence · knowledge of magic" },
          tags: {
            fr: "arcane, arcanes, magie, sorts, savoir, intelligence, planes, créatures magiques",
            en: "arcana, magic, spells, lore, intelligence, planes, magical creatures"
          },
          fichiers: { fr: "parchemins/fiche_arcanes_parchemin.pdf", en: "parchemins/fiche_arcanes_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Athlétisme", en: "Athletics" },
          desc: { fr: "Force · escalader, nager, sauter", en: "Strength · climb, swim, jump" },
          tags: {
            fr: "athlétisme, force, escalader, nager, sauter, grimper, lutter",
            en: "athletics, strength, climb, swim, jump, grapple"
          },
          fichiers: { fr: "parchemins/fiche_athletisme_parchemin.pdf", en: "parchemins/fiche_athletisme_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Discrétion", en: "Stealth" },
          desc: { fr: "Dextérité · se cacher et se déplacer en silence", en: "Dexterity · hide and move silently" },
          tags: {
            fr: "discrétion, furtivité, se cacher, silence, sournois, dextérité, caché",
            en: "stealth, sneak, hide, hidden, silent, dexterity"
          },
          fichiers: { fr: "parchemins/fiche_discretion_parchemin.pdf", en: "parchemins/fiche_discretion_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Dressage", en: "Animal Handling" },
          desc: { fr: "Sagesse · calmer et guider un animal", en: "Wisdom · calm and guide an animal" },
          tags: {
            fr: "dressage, animal, animaux, monture, calmer, dresser, sagesse, cheval",
            en: "animal handling, animals, mount, calm, wisdom, horse"
          },
          fichiers: { fr: "parchemins/fiche_dressage_parchemin.pdf", en: "parchemins/fiche_dressage_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Escamotage", en: "Sleight of Hand" },
          desc: { fr: "Dextérité · vol à la tire et tours de passe-passe", en: "Dexterity · pickpocketing and sleight of hand" },
          tags: {
            fr: "escamotage, vol, voler, pickpocket, passe-passe, dextérité, subtiliser, cacher un objet",
            en: "sleight of hand, steal, pickpocket, theft, dexterity, palm"
          },
          fichiers: { fr: "parchemins/fiche_escamotage_parchemin.pdf", en: "parchemins/fiche_escamotage_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Histoire", en: "History" },
          desc: { fr: "Intelligence · savoir sur le passé", en: "Intelligence · knowledge of the past" },
          tags: {
            fr: "histoire, passé, légendes, royaumes, guerres, savoir, intelligence",
            en: "history, past, legends, kingdoms, wars, lore, intelligence"
          },
          fichiers: { fr: "parchemins/fiche_histoire_parchemin.pdf", en: "parchemins/fiche_histoire_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Intimidation", en: "Intimidation" },
          desc: { fr: "Charisme · pousser quelqu'un à céder par la peur", en: "Charisma · pressure someone with fear" },
          tags: {
            fr: "intimidation, intimider, menace, menacer, peur, charisme, pression",
            en: "intimidation, intimidate, threat, threaten, fear, charisma, pressure"
          },
          fichiers: { fr: "parchemins/fiche_intimidation_parchemin.pdf", en: "parchemins/fiche_intimidation_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Connaître une créature", en: "Identify a Creature" },
          desc: { fr: "Ce que l'on sait d'une créature", en: "What you know about a creature" },
          tags: {
            fr: "créature, monstre, connaître, identifier, faiblesses, savoir, vulnérabilité, résistance, arcanes, nature, religion, histoire",
            en: "creature, monster, identify, know, weakness, lore, vulnerability, resistance, arcana, nature, religion, history"
          },
          fichiers: { fr: "parchemins/fiche_connaitre_creature_parchemin.pdf", en: "parchemins/fiche_connaitre_creature_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Escalader une corde", en: "Climb a Rope" },
          desc: { fr: "Athlétisme · Force", en: "Athletics · Strength" },
          tags: {
            fr: "grimper, escalade, escalader, corde, mur, falaise, athlétisme, force, vitesse",
            en: "climb, climbing, rope, wall, cliff, athletics, strength, speed"
          },
          fichiers: { fr: "parchemins/fiche_escalader_corde_parchemin.pdf", en: "parchemins/fiche_escalader_corde_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Natation et vie sous l'eau", en: "Swimming and Underwater" },
          desc: { fr: "Nager, retenir son souffle et se noyer", en: "Swim, hold your breath and drown" },
          tags: {
            fr: "nage, nager, eau, noyade, se noyer, sous l'eau, sous-marin, souffle, retenir sa respiration, rivière, mer, courant",
            en: "swim, swimming, water, drowning, underwater, breath, hold breath, river, sea, current"
          },
          fichiers: { fr: "parchemins/fiche_natation_sous_marine_parchemin.pdf", en: "parchemins/fiche_natation_sous_marine_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Perception", en: "Perception" },
          desc: { fr: "Sagesse · repérer, entendre, remarquer", en: "Wisdom · spot, hear, notice" },
          tags: {
            fr: "perception, repérer, entendre, remarquer, guetter, sagesse, fouiller, vigilance",
            en: "perception, spot, hear, notice, watch, wisdom, search, alertness"
          },
          fichiers: { fr: "parchemins/fiche_perception_parchemin.pdf", en: "parchemins/fiche_perception_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Perspicacité", en: "Insight" },
          desc: { fr: "Sagesse · deviner les intentions", en: "Wisdom · read intentions" },
          tags: {
            fr: "perspicacité, mensonge, intentions, deviner, sagesse, sentir, lire quelqu'un",
            en: "insight, lie, intentions, guess, wisdom, read someone, motive"
          },
          fichiers: { fr: "parchemins/fiche_perspicacite_parchemin.pdf", en: "parchemins/fiche_perspicacite_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Médecine", en: "Medicine" },
          desc: { fr: "Sagesse · soigner et stabiliser", en: "Wisdom · treat and stabilize" },
          tags: {
            fr: "médecine, soigner, stabiliser, blessure, maladie, sagesse, premiers secours",
            en: "medicine, heal, stabilize, wound, disease, wisdom, first aid"
          },
          fichiers: { fr: "parchemins/fiche_medecine_parchemin.pdf", en: "parchemins/fiche_medecine_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Survie", en: "Survival" },
          desc: { fr: "Sagesse · pister, s'orienter, se nourrir", en: "Wisdom · track, navigate, forage" },
          tags: {
            fr: "survie, pister, traces, orienter, chasser, chercher de la nourriture, sagesse",
            en: "survival, track, tracks, navigate, hunt, forage, wisdom"
          },
          fichiers: { fr: "parchemins/fiche_survie_parchemin.pdf", en: "parchemins/fiche_survie_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Nature", en: "Nature" },
          desc: { fr: "Intelligence · savoir sur la nature", en: "Intelligence · knowledge of nature" },
          tags: {
            fr: "nature, plantes, animaux, météo, terrain, savoir, intelligence",
            en: "nature, plants, animals, weather, terrain, lore, intelligence"
          },
          fichiers: { fr: "parchemins/fiche_nature_parchemin.pdf", en: "parchemins/fiche_nature_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Religion", en: "Religion" },
          desc: { fr: "Intelligence · savoir sur les dieux", en: "Intelligence · knowledge of the gods" },
          tags: {
            fr: "religion, dieux, symboles, rites, mort-vivant, savoir, intelligence",
            en: "religion, gods, symbols, rites, undead, lore, intelligence"
          },
          fichiers: { fr: "parchemins/fiche_religion_parchemin.pdf", en: "parchemins/fiche_religion_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Persuasion", en: "Persuasion" },
          desc: { fr: "Charisme · convaincre avec tact", en: "Charisma · convince with tact" },
          tags: {
            fr: "persuasion, convaincre, négocier, diplomatie, charisme, marchander",
            en: "persuasion, convince, negotiate, diplomacy, charisma, haggle"
          },
          fichiers: { fr: "parchemins/fiche_persuasion_parchemin.pdf", en: "parchemins/fiche_persuasion_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Tromperie", en: "Deception" },
          desc: { fr: "Charisme · mentir et dissimuler", en: "Charisma · lie and disguise" },
          tags: {
            fr: "tromperie, mentir, mensonge, bluffer, déguisement, charisme, duper",
            en: "deception, lie, bluff, disguise, charisma, trick"
          },
          fichiers: { fr: "parchemins/fiche_tromperie_parchemin.pdf", en: "parchemins/fiche_tromperie_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Représentation", en: "Performance" },
          desc: { fr: "Charisme · divertir un public", en: "Charisma · entertain an audience" },
          tags: {
            fr: "représentation, spectacle, musique, chanter, danser, jouer, charisme, public",
            en: "performance, show, music, sing, dance, act, charisma, audience"
          },
          fichiers: { fr: "parchemins/fiche_representation_parchemin.pdf", en: "parchemins/fiche_representation_parchemin_US.pdf" }
        }
      ]
    },
    /* ---------- LE COMBAT ---------- */
    {
      titre: { fr: "Le Combat", en: "Combat" },
      intro: { fr: "Initiative, surprise, lutte et états : le tour de jeu sans débat.", en: "Initiative, surprise, grappling and conditions: the turn without arguments." },
      tri: false,
      fiches: [
        {
          titre: { fr: "Combattre une créature invisible", en: "Fighting an Invisible Creature" },
          desc: { fr: "Attaquer ce que l'on ne voit pas", en: "Attacking what you cannot see" },
          tags: {
            fr: "invisible, invisibilité, créature invisible, attaque, désavantage, avantage, deviner, cacher, combat",
            en: "invisible, invisibility, invisible creature, attack, disadvantage, advantage, guess, hidden, combat"
          },
          fichiers: { fr: "parchemins/fiche_combat_creatures_invisibles_parchemin.pdf", en: "parchemins/fiche_combat_creatures_invisibles_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Lutte", en: "Grappling" },
          desc: { fr: "Agripper, immobiliser et projeter", en: "Grab, restrain and shove" },
          tags: {
            fr: "lutte, lutter, agripper, agrippé, empoigner, immobiliser, plaquer, bousculer, projeter, à terre, saisir",
            en: "grapple, grappling, grappled, grab, restrain, shove, prone, wrestle"
          },
          fichiers: { fr: "parchemins/fiche_lutte_parchemin.pdf", en: "parchemins/fiche_lutte_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Initiative", en: "Initiative" },
          desc: { fr: "Qui joue en premier, et dans quel ordre", en: "Who goes first, and in what order" },
          tags: {
            fr: "initiative, ordre, tour de jeu, ordre du tour, dextérité, qui joue, début du combat",
            en: "initiative, order, turn order, dexterity, who goes first, start of combat"
          },
          fichiers: { fr: "parchemins/fiche_initiative_parchemin.pdf", en: "parchemins/fiche_initiative_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Surprise", en: "Surprise" },
          desc: { fr: "Embuscade et premier tour de combat", en: "Ambush and the first round of combat" },
          tags: {
            fr: "surprise, surpris, embuscade, attaque surprise, discrétion, désavantage, initiative",
            en: "surprise, surprised, ambush, sneak attack, stealth, disadvantage, initiative"
          },
          fichiers: { fr: "parchemins/fiche_surprise_parchemin.pdf", en: "parchemins/fiche_surprise_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Tous les états", en: "All Conditions" },
          desc: { fr: "Effets résumés sur une seule page", en: "Effects summarized on a single page" },
          tags: {
            fr: "état, états, condition, aveuglé, charmé, assourdi, sourd, épuisement, effrayé, peur, agrippé, neutralisé, incapable d'agir, invisible, paralysé, pétrifié, empoisonné, à terre, entravé, étourdi, inconscient",
            en: "condition, conditions, blinded, charmed, deafened, exhaustion, frightened, grappled, incapacitated, invisible, paralyzed, petrified, poisoned, prone, restrained, stunned, unconscious"
          },
          fichiers: { fr: "parchemins/fiche_les_etats_parchemin.pdf", en: "parchemins/fiche_les_etats_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Utiliser un bouclier", en: "Using a Shield" },
          desc: { fr: "Équiper, retirer et bénéficier d'un bouclier", en: "Don, doff and benefit from a shield" },
          tags: {
            fr: "bouclier, boucliers, équiper, retirer, classe d'armure, ca, armure, formation, main libre",
            en: "shield, shields, don, doff, armor class, ac, armor, training, free hand"
          },
          fichiers: { fr: "parchemins/fiche_utiliser_un_bouclier_parchemin.pdf", en: "parchemins/fiche_utiliser_un_bouclier_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Attaque d'opportunité", en: "Opportunity Attack" },
          desc: { fr: "Quand quitter la portée d'un ennemi coûte une attaque", en: "When leaving an enemy's reach costs you an attack" },
          tags: {
            fr: "attaque d'opportunité, opportunité, réaction, désengager, se désengager, quitter la portée, fuir, déplacement, portée",
            en: "opportunity attack, reaction, disengage, leave reach, flee, movement, reach"
          },
          fichiers: { fr: "parchemins/fiche_attaque_opportunite_parchemin.pdf", en: "parchemins/fiche_attaque_opportunite_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Les actions en combat", en: "Actions in Combat" },
          desc: { fr: "Toutes les actions possibles à son tour", en: "Every action available on your turn" },
          tags: {
            fr: "actions, action, attaquer, foncer, se désengager, esquiver, aider, se cacher, préparer, utiliser un objet, tour",
            en: "actions, action, attack, dash, disengage, dodge, help, hide, ready, use an object, turn"
          },
          fichiers: { fr: "parchemins/fiche_actions_en_combat_parchemin.pdf", en: "parchemins/fiche_actions_en_combat_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Le couvert", en: "Cover" },
          desc: { fr: "Abri partiel, important ou total", en: "Half, three-quarters and total cover" },
          tags: {
            fr: "couvert, abri, se cacher derrière, classe d'armure, ca, tir, obstacle",
            en: "cover, half cover, three-quarters cover, total cover, armor class, ac, obstacle"
          },
          fichiers: { fr: "parchemins/fiche_couvert_parchemin.pdf", en: "parchemins/fiche_couvert_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Avantage et désavantage", en: "Advantage and Disadvantage" },
          desc: { fr: "Quand lancer deux d20, et lequel garder", en: "When to roll two d20s, and which to keep" },
          tags: {
            fr: "avantage, désavantage, deux dés, d20, relancer, se compensent, jet",
            en: "advantage, disadvantage, two dice, d20, reroll, cancel out, roll"
          },
          fichiers: { fr: "parchemins/fiche_avantage_desavantage_parchemin.pdf", en: "parchemins/fiche_avantage_desavantage_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Dégâts, résistances et vulnérabilités", en: "Damage, Resistance and Vulnerability" },
          desc: { fr: "Types de dégâts et ce qui les modifie", en: "Damage types and what changes them" },
          tags: {
            fr: "dégâts, résistance, vulnérabilité, immunité, type de dégâts, moitié, double, critique",
            en: "damage, resistance, vulnerability, immunity, damage type, half, double, critical"
          },
          fichiers: { fr: "parchemins/fiche_degats_resistances_parchemin.pdf", en: "parchemins/fiche_degats_resistances_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Les maîtrises d'armes", en: "Weapon Mastery" },
          desc: { fr: "Entaille, Sape, Ralentissement et les autres", en: "Cleave, Sap, Slow and the others" },
          tags: {
            fr: "maîtrise, maîtrises d'armes, arme, entaille, sape, ralentissement, harcèlement, éraflure, coup d'appoint, déstabilisation, poussée",
            en: "mastery, weapon mastery, weapon, cleave, sap, slow, vex, graze, nick, topple, push"
          },
          fichiers: { fr: "parchemins/fiche_maitrises_d_armes_parchemin.pdf", en: "parchemins/fiche_maitrises_d_armes_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Le déplacement", en: "Movement" },
          desc: { fr: "Vitesse, terrain difficile, ramper, grimper", en: "Speed, difficult terrain, crawling, climbing" },
          tags: {
            fr: "déplacement, vitesse, terrain difficile, ramper, grimper, se relever, à terre, mètres, cases",
            en: "movement, speed, difficult terrain, crawl, climb, stand up, prone, feet, squares"
          },
          fichiers: { fr: "parchemins/fiche_deplacement_parchemin.pdf", en: "parchemins/fiche_deplacement_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Armures et armes : propriétés", en: "Armor and Weapons: Properties" },
          desc: { fr: "Finesse, Allonge, Lancer, Polyvalente…", en: "Finesse, Reach, Thrown, Versatile…" },
          tags: {
            fr: "armure, armes, propriétés, finesse, allonge, lancer, polyvalente, deux mains, légère, lourde, munition, chargement",
            en: "armor, weapons, properties, finesse, reach, thrown, versatile, two-handed, light, heavy, ammunition, loading"
          },
          fichiers: { fr: "parchemins/fiche_armures_et_armes_proprietes_parchemin.pdf", en: "parchemins/fiche_armures_et_armes_proprietes_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Se préparer", en: "Ready" },
          desc: { fr: "Préparer une action pour plus tard", en: "Prepare an action for later" },
          tags: {
            fr: "se préparer, préparer, action préparée, déclencheur, réaction, attendre, sort préparé",
            en: "ready, readied action, trigger, reaction, wait, readied spell"
          },
          fichiers: { fr: "parchemins/fiche_se_preparer_parchemin.pdf", en: "parchemins/fiche_se_preparer_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Les réactions", en: "Reactions" },
          desc: { fr: "Ce qu'est une réaction et quand l'utiliser", en: "What a reaction is and when to use it" },
          tags: {
            fr: "réaction, réactions, déclencheur, attaque d'opportunité, une par tour, tour de table",
            en: "reaction, reactions, trigger, opportunity attack, once per round"
          },
          fichiers: { fr: "parchemins/fiche_reactions_parchemin.pdf", en: "parchemins/fiche_reactions_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Monter une monture", en: "Mounted Combat" },
          desc: { fr: "Monter, descendre et combattre à cheval", en: "Mounting, dismounting and fighting from a mount" },
          tags: {
            fr: "monture, cheval, monter, descendre, combat monté, chevaucher, destrier, déplacement",
            en: "mount, horse, mounting, dismounting, mounted combat, ride, steed, movement"
          },
          fichiers: { fr: "parchemins/fiche_monter_une_monture_parchemin.pdf", en: "parchemins/fiche_monter_une_monture_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Mettre hors de combat", en: "Knocking Out" },
          desc: { fr: "Assommer plutôt que tuer", en: "Knock out instead of killing" },
          tags: {
            fr: "assommer, hors de combat, non létal, épargner, 0 pv, inconscient, capturer, mettre à terre",
            en: "knock out, nonlethal, spare, 0 hp, unconscious, capture, subdue"
          },
          fichiers: { fr: "parchemins/fiche_mettre_hors_de_combat_parchemin.pdf", en: "parchemins/fiche_mettre_hors_de_combat_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Se cacher en combat", en: "Hiding in Combat" },
          desc: { fr: "Action Se cacher, discrétion et être repéré", en: "The Hide action, stealth and being spotted" },
          tags: {
            fr: "se cacher, cacher, discrétion, furtif, invisible, repérer, perception, couvert, embuscade",
            en: "hide, hiding, stealth, unseen, spot, perception, cover, ambush"
          },
          fichiers: { fr: "parchemins/fiche_se_cacher_en_combat_parchemin.pdf", en: "parchemins/fiche_se_cacher_en_combat_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Attaque sournoise", en: "Sneak Attack" },
          desc: { fr: "Quand et comment ajouter les dégâts sournois", en: "When and how to add sneak damage" },
          tags: {
            fr: "attaque sournoise, sournoise, roublard, avantage, allié adjacent, dégâts supplémentaires, finesse, distance",
            en: "sneak attack, rogue, advantage, adjacent ally, extra damage, finesse, ranged"
          },
          fichiers: { fr: "parchemins/fiche_attaque_sournoise_parchemin.pdf", en: "parchemins/fiche_attaque_sournoise_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Embuscade", en: "Ambush" },
          desc: { fr: "Attaquer par surprise depuis une cachette", en: "Attacking by surprise from hiding" },
          tags: {
            fr: "embuscade, guet-apens, surprise, caché, discrétion, attaque surprise, initiative",
            en: "ambush, surprise, hidden, stealth, surprise attack, initiative"
          },
          fichiers: { fr: "parchemins/fiche_embuscade_parchemin.pdf", en: "parchemins/fiche_embuscade_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Couloirs et flanquement", en: "Corridors and Flanking" },
          desc: { fr: "Se placer en couloir ou entourer un ennemi", en: "Positioning in corridors or surrounding an enemy" },
          tags: {
            fr: "couloir, flanquement, flanquer, encercler, position, placement, étroit, grille",
            en: "corridor, flanking, flank, surround, position, placement, narrow, grid"
          },
          fichiers: { fr: "parchemins/fiche_couloir_et_flanquement_parchemin.pdf", en: "parchemins/fiche_couloir_et_flanquement_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Coups critiques", en: "Critical Hits" },
          desc: { fr: "Quand un 20 naturel double les dés de dégâts", en: "When a natural 20 doubles the damage dice" },
          tags: {
            fr: "coup critique, critique, 20 naturel, dégâts doublés, échec critique, 1 naturel",
            en: "critical hit, critical, natural 20, double damage, critical miss, natural 1"
          },
          fichiers: { fr: "parchemins/fiche_coups_critiques_parchemin.pdf", en: "parchemins/fiche_coups_critiques_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Fuir, se rendre, prisonniers", en: "Fleeing, Surrendering, Prisoners" },
          desc: { fr: "Quitter un combat, se rendre et garder des captifs", en: "Leaving a fight, surrendering and holding captives" },
          tags: {
            fr: "fuir, fuite, se rendre, reddition, prisonnier, captif, moral, retraite, désengager",
            en: "flee, fleeing, surrender, prisoner, captive, morale, retreat, disengage"
          },
          fichiers: { fr: "parchemins/fiche_fuir_un_combat_parchemin.pdf", en: "parchemins/fiche_fuir_un_combat_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Attaques à distance au contact", en: "Ranged Attacks in Melee" },
          desc: { fr: "Tirer quand un ennemi est tout proche", en: "Shooting when an enemy is right next to you" },
          tags: {
            fr: "distance, au contact, désavantage, arc, arbalète, tirer, adjacent, proche, mêlée",
            en: "ranged, in melee, disadvantage, bow, crossbow, shoot, adjacent, close, melee"
          },
          fichiers: { fr: "parchemins/fiche_attaques_distance_contact_parchemin.pdf", en: "parchemins/fiche_attaques_distance_contact_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Combat à deux armes", en: "Two-Weapon Fighting" },
          desc: { fr: "Attaquer avec deux armes légères", en: "Attacking with two light weapons" },
          tags: {
            fr: "deux armes, arme légère, attaque supplémentaire, action bonus, dague, deux mains, ambidextre",
            en: "two weapons, light weapon, extra attack, bonus action, dagger, dual wield"
          },
          fichiers: { fr: "parchemins/fiche_combat_deux_armes_parchemin.pdf", en: "parchemins/fiche_combat_deux_armes_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Désarmer", en: "Disarming" },
          desc: { fr: "Faire lâcher son arme à un adversaire", en: "Making an opponent drop their weapon" },
          tags: {
            fr: "désarmer, désarmement, arme, lâcher, objet tenu, maîtrise, attaque spéciale",
            en: "disarm, disarming, weapon, drop, held object, mastery, special attack"
          },
          fichiers: { fr: "parchemins/fiche_desarmer_parchemin.pdf", en: "parchemins/fiche_desarmer_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Pousser", en: "Shoving" },
          desc: { fr: "Repousser ou jeter à terre une créature", en: "Pushing back or knocking a creature prone" },
          tags: {
            fr: "pousser, bousculer, repousser, à terre, jeter, projeter, falaise, force, athlétisme",
            en: "shove, push, knock prone, prone, hurl, cliff, strength, athletics"
          },
          fichiers: { fr: "parchemins/fiche_pousser_parchemin.pdf", en: "parchemins/fiche_pousser_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Taille des créatures et espace", en: "Creature Size and Space" },
          desc: { fr: "Combien de place prend chaque créature", en: "How much room each creature takes" },
          tags: {
            fr: "taille, espace, grande, petite, très grande, gigantesque, case, grille, se faufiler",
            en: "size, space, large, small, huge, gargantuan, square, grid, squeeze"
          },
          fichiers: { fr: "parchemins/fiche_taille_et_espace_parchemin.pdf", en: "parchemins/fiche_taille_et_espace_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Combat sous l'eau", en: "Underwater Combat" },
          desc: { fr: "Attaquer, lancer des sorts et se déplacer sous l'eau", en: "Attacking, casting and moving underwater" },
          tags: {
            fr: "sous l'eau, sous-marin, nager, noyade, désavantage, feu, flèche, aquatique",
            en: "underwater, swim, drowning, disadvantage, fire, arrow, aquatic"
          },
          fichiers: { fr: "parchemins/fiche_combat_sous_leau_parchemin.pdf", en: "parchemins/fiche_combat_sous_leau_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Combat en vol", en: "Flying Combat" },
          desc: { fr: "Voler, planer et tomber pendant un combat", en: "Flying, hovering and falling during a fight" },
          tags: {
            fr: "vol, voler, planer, chute, altitude, vitesse de vol, volant, tomber",
            en: "flying, fly, hover, fall, altitude, fly speed, falling"
          },
          fichiers: { fr: "parchemins/fiche_combat_en_vol_parchemin.pdf", en: "parchemins/fiche_combat_en_vol_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Poursuites", en: "Chases" },
          desc: { fr: "Mener une course-poursuite sans la figer", en: "Running a chase without bogging it down" },
          tags: {
            fr: "poursuite, course, fuite, rattraper, foncer, obstacle, vitesse, tour de jeu",
            en: "chase, pursuit, run, catch up, dash, obstacle, speed, round"
          },
          fichiers: { fr: "parchemins/fiche_poursuites_parchemin.pdf", en: "parchemins/fiche_poursuites_parchemin_US.pdf" }
        }
      ]
    },
    /* ---------- EXPLORATION ET SURVIE ---------- */
    {
      titre: { fr: "Exploration et survie", en: "Exploration and Survival" },
      intro: { fr: "Pièges, repos, points de vie et mort.", en: "Traps, rests, hit points and dying." },
      tri: false,
      fiches: [
        {
          titre: { fr: "Pièges", en: "Traps" },
          desc: { fr: "Repérer, désamorcer et subir un piège", en: "Spot, disarm and survive a trap" },
          tags: {
            fr: "piège, pièges, désamorcer, détecter, repérer, fosse, dard, perception, investigation, voleur, dégâts",
            en: "trap, traps, disarm, detect, spot, pit, dart, perception, investigation, thief, damage"
          },
          fichiers: { fr: "parchemins/fiche_pieges_parchemin.pdf", en: "parchemins/fiche_pieges_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Repos", en: "Resting" },
          desc: { fr: "Repos court et repos long", en: "Short rest and long rest" },
          tags: {
            fr: "repos, repos court, repos long, dés de vie, récupérer, soigner, se reposer, sommeil, 8 heures, une heure",
            en: "rest, short rest, long rest, hit dice, recover, heal, sleep, 8 hours, one hour"
          },
          fichiers: { fr: "parchemins/fiche_repos_parchemin.pdf", en: "parchemins/fiche_repos_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Points de vie, soins et mort", en: "Hit Points, Healing and Dying" },
          desc: { fr: "Dégâts, soins, jets de sauvegarde contre la mort", en: "Damage, healing, death saving throws" },
          tags: {
            fr: "points de vie, pv, soins, soigner, mort, mourir, mourant, inconscient, jet de sauvegarde contre la mort, stabiliser, 0 pv, dégâts",
            en: "hit points, hp, healing, heal, death, dying, unconscious, death saving throw, stabilize, 0 hp, damage"
          },
          fichiers: { fr: "parchemins/fiche_pv_soins_mort_parchemin.pdf", en: "parchemins/fiche_pv_soins_mort_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Lumière, vision et obscurité", en: "Light, Vision and Darkness" },
          desc: { fr: "Lumière vive, faible lumière et noir total", en: "Bright light, dim light and darkness" },
          tags: {
            fr: "lumière, vision, obscurité, vision dans le noir, faible lumière, noir, torche, aveugle, lourdement obscurci",
            en: "light, vision, darkness, darkvision, dim light, dark, torch, blind, heavily obscured"
          },
          fichiers: { fr: "parchemins/fiche_lumiere_et_vision_parchemin.pdf", en: "parchemins/fiche_lumiere_et_vision_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Dangers de l'environnement", en: "Environmental Hazards" },
          desc: { fr: "Chutes, feu, froid, étouffement, famine", en: "Falling, fire, cold, suffocation, starvation" },
          tags: {
            fr: "danger, dangers, environnement, chute, feu, froid, chaleur, noyade, étouffement, faim, soif, poison",
            en: "hazard, hazards, environment, fall, fire, cold, heat, drowning, suffocation, hunger, thirst, poison"
          },
          fichiers: { fr: "parchemins/fiche_dangers_environnement_parchemin.pdf", en: "parchemins/fiche_dangers_environnement_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Voyage et exploration", en: "Travel and Exploration" },
          desc: { fr: "Rythme de marche et activités de voyage", en: "Travel pace and travel activities" },
          tags: {
            fr: "voyage, exploration, rythme, marche, distance, vitesse, éclaireur, se perdre, voyager",
            en: "travel, exploration, pace, walking, distance, speed, scout, getting lost, journey"
          },
          fichiers: { fr: "parchemins/fiche_voyage_et_exploration_parchemin.pdf", en: "parchemins/fiche_voyage_et_exploration_parchemin_US.pdf" }
        },
        {
          titre: { fr: "La perception passive", en: "Passive Perception" },
          desc: { fr: "Le 10 + bonus qui remarque sans chercher", en: "The 10 + bonus that notices without looking" },
          tags: {
            fr: "perception passive, passive, remarquer, 10 +, sans chercher, embuscade, piège",
            en: "passive perception, passive, notice, 10 +, without looking, ambush, trap"
          },
          fichiers: { fr: "parchemins/fiche_perception_passive_parchemin.pdf", en: "parchemins/fiche_perception_passive_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Résistance à l'alcool", en: "Alcohol Tolerance" },
          desc: { fr: "Boire, tenir le coup et ses conséquences", en: "Drinking, holding it and the consequences" },
          tags: {
            fr: "alcool, boire, ivresse, ivre, résistance, constitution, taverne, gueule de bois, poison",
            en: "alcohol, drinking, drunk, tolerance, constitution, tavern, hangover, poison"
          },
          fichiers: { fr: "parchemins/fiche_resistance_alcool_parchemin.pdf", en: "parchemins/fiche_resistance_alcool_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Chute, étouffement, feu et froid", en: "Falling, Suffocation, Fire and Cold" },
          desc: { fr: "Les dégâts du quotidien dangereux", en: "The everyday damaging hazards" },
          tags: {
            fr: "chute, tomber, étouffement, suffocation, noyade, feu, brûlure, froid, gel, hauteur",
            en: "fall, falling, suffocation, drowning, fire, burn, cold, freezing, height"
          },
          fichiers: { fr: "parchemins/fiche_chute_etouffement_feu_froid_parchemin.pdf", en: "parchemins/fiche_chute_etouffement_feu_froid_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Portes, serrures et objets", en: "Doors, Locks and Objects" },
          desc: { fr: "Forcer, crocheter et abîmer les objets", en: "Forcing, picking and damaging objects" },
          tags: {
            fr: "porte, serrure, crocheter, forcer, enfoncer, objet, CA d'objet, points de vie d'objet, coffre",
            en: "door, lock, pick, force, break, object, object ac, object hit points, chest"
          },
          fichiers: { fr: "parchemins/fiche_portes_serrures_objets_parchemin.pdf", en: "parchemins/fiche_portes_serrures_objets_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Météo et climats extrêmes", en: "Weather and Extreme Climates" },
          desc: { fr: "Chaleur, froid, vent, pluie et tempêtes", en: "Heat, cold, wind, rain and storms" },
          tags: {
            fr: "météo, climat, chaleur, froid extrême, vent, pluie, tempête, neige, brouillard",
            en: "weather, climate, heat, extreme cold, wind, rain, storm, snow, fog"
          },
          fichiers: { fr: "parchemins/fiche_meteo_et_climats_extremes_parchemin.pdf", en: "parchemins/fiche_meteo_et_climats_extremes_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Tours de garde et veille", en: "Watches and Keeping Guard" },
          desc: { fr: "Organiser la nuit et repérer les intrus", en: "Organizing the night and spotting intruders" },
          tags: {
            fr: "garde, veille, tour de garde, camp, nuit, repos, perception, sentinelle, bivouac",
            en: "watch, guard, night watch, camp, night, rest, perception, sentry, bivouac"
          },
          fichiers: { fr: "parchemins/fiche_tours_de_garde_parchemin.pdf", en: "parchemins/fiche_tours_de_garde_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Maladies", en: "Diseases" },
          desc: { fr: "Contracter, subir et soigner une maladie", en: "Catching, suffering and curing a disease" },
          tags: {
            fr: "maladie, maladies, contagion, fièvre, guérison, épidémie, infecté, soin",
            en: "disease, diseases, contagion, fever, cure, epidemic, infected, healing"
          },
          fichiers: { fr: "parchemins/fiche_maladies_parchemin.pdf", en: "parchemins/fiche_maladies_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Poisons", en: "Poisons" },
          desc: { fr: "Types de poison, sauvegardes et effets", en: "Poison types, saves and effects" },
          tags: {
            fr: "poison, poisons, empoisonné, toxine, venin, antidote, sauvegarde de constitution, lame empoisonnée",
            en: "poison, poisons, poisoned, toxin, venom, antidote, constitution save, poisoned blade"
          },
          fichiers: { fr: "parchemins/fiche_poisons_parchemin.pdf", en: "parchemins/fiche_poisons_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Drogues et substances", en: "Drugs and Substances" },
          desc: { fr: "Substances à effet et risques de dépendance", en: "Substances with effects and risks of dependency" },
          tags: {
            fr: "drogue, substance, potion, dépendance, sevrage, effet, risque, herbe, alcool",
            en: "drug, substance, potion, dependency, withdrawal, effect, risk, herb, alcohol"
          },
          fichiers: { fr: "parchemins/fiche_drogues_et_substances_parchemin.pdf", en: "parchemins/fiche_drogues_et_substances_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Temps libre : entraînement", en: "Downtime: Training" },
          desc: { fr: "Utiliser le temps libre pour apprendre ou s'entraîner", en: "Using downtime to learn or train" },
          tags: {
            fr: "temps libre, entraînement, entraîner, apprendre, langue, outil, jours, coût",
            en: "downtime, training, train, learn, language, tool, days, cost"
          },
          fichiers: { fr: "parchemins/fiche_temps_libre_entrainement_parchemin.pdf", en: "parchemins/fiche_temps_libre_entrainement_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Temps libre : fabrication d'objets", en: "Downtime: Crafting" },
          desc: { fr: "Fabriquer un objet pendant le temps libre", en: "Crafting an item during downtime" },
          tags: {
            fr: "temps libre, fabrication, fabriquer, artisanat, outils d'artisan, coût, jours, objet",
            en: "downtime, crafting, craft, artisan, artisan's tools, cost, days, item"
          },
          fichiers: { fr: "parchemins/fiche_temps_libre_fabrication_parchemin.pdf", en: "parchemins/fiche_temps_libre_fabrication_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Temps libre : travail", en: "Downtime: Work" },
          desc: { fr: "Gagner sa vie entre deux aventures", en: "Earning a living between adventures" },
          tags: {
            fr: "temps libre, travail, métier, gagner de l'argent, salaire, vie courante, revenu",
            en: "downtime, work, job, earn money, wage, lifestyle, income"
          },
          fichiers: { fr: "parchemins/fiche_temps_libre_travail_parchemin.pdf", en: "parchemins/fiche_temps_libre_travail_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Capacité de charge", en: "Carrying Capacity" },
          desc: { fr: "Combien on peut porter, tirer et soulever", en: "How much you can carry, drag and lift" },
          tags: {
            fr: "charge, capacité de charge, poids, encombrement, porter, soulever, force, 7,5 kg, tirer",
            en: "carry, carrying capacity, weight, encumbrance, lift, drag, strength"
          },
          fichiers: { fr: "parchemins/fiche_capacite_de_charge_parchemin.pdf", en: "parchemins/fiche_capacite_de_charge_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Monnaies et prix", en: "Coins and Prices" },
          desc: { fr: "Les pièces, leur valeur et les prix courants", en: "The coins, their value and common prices" },
          tags: {
            fr: "monnaie, pièces, or, argent, cuivre, platine, électrum, prix, coût, valeur, échange",
            en: "coin, coins, gold, silver, copper, platinum, electrum, price, cost, value, exchange"
          },
          fichiers: { fr: "parchemins/fiche_monnaies_et_prix_parchemin.pdf", en: "parchemins/fiche_monnaies_et_prix_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Vivres et eau", en: "Food and Water" },
          desc: { fr: "Combien manger et boire, et que risque-t-on", en: "How much to eat and drink, and the risks" },
          tags: {
            fr: "vivres, nourriture, eau, soif, faim, ration, épuisement, manger, boire, jeûne",
            en: "food, water, thirst, hunger, ration, exhaustion, eat, drink, starvation"
          },
          fichiers: { fr: "parchemins/fiche_vivres_et_eau_parchemin.pdf", en: "parchemins/fiche_vivres_et_eau_parchemin_US.pdf" }
        }
      ]
    },
    /* ---------- LA MAGIE ---------- */
    {
      titre: { fr: "La Magie", en: "Magic" },
      intro: { fr: "Lancer un sort, reconnaître la magie et manier les objets magiques.", en: "Casting, recognizing magic and handling magic items." },
      tri: false,
      fiches: [
        {
          titre: { fr: "Lancer un sort", en: "Casting a Spell" },
          desc: { fr: "Composantes, portée, durée et concentration", en: "Components, range, duration and concentration" },
          tags: {
            fr: "sort, lancer un sort, incantation, composantes, verbale, gestuelle, matérielle, portée, durée, concentration, rituel, emplacement de sort, magie",
            en: "spell, cast, casting, components, verbal, somatic, material, range, duration, concentration, ritual, spell slot, magic"
          },
          fichiers: { fr: "parchemins/fiche_lancer_un_sort_parchemin.pdf", en: "parchemins/fiche_lancer_un_sort_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Détection de la magie", en: "Detecting Magic" },
          desc: { fr: "Repérer ce qui est magique", en: "Spotting what is magical" },
          tags: {
            fr: "détection de la magie, détecter la magie, magique, aura, objet magique, école de magie, détecter",
            en: "detect magic, magical, aura, magic item, school of magic, detect"
          },
          fichiers: { fr: "parchemins/fiche_detection_magie_parchemin.pdf", en: "parchemins/fiche_detection_magie_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Identifier un sort", en: "Identifying a Spell" },
          desc: { fr: "Reconnaître un sort lancé devant soi", en: "Recognizing a spell cast in front of you" },
          tags: {
            fr: "identifier un sort, reconnaître un sort, sort, arcanes, incantation, composantes, voir lancer",
            en: "identify a spell, recognize a spell, spell, arcana, casting, components, see cast"
          },
          fichiers: { fr: "parchemins/fiche_identifier_sort_parchemin.pdf", en: "parchemins/fiche_identifier_sort_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Identifier un objet magique", en: "Identifying a Magic Item" },
          desc: { fr: "Découvrir ce que fait un objet magique", en: "Find out what a magic item does" },
          tags: {
            fr: "identifier un objet magique, objet magique, objet, magie, repos court, détection, propriétés",
            en: "identify a magic item, magic item, item, magic, short rest, detection, properties"
          },
          fichiers: { fr: "parchemins/fiche_identifier_objet_magique_parchemin.pdf", en: "parchemins/fiche_identifier_objet_magique_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Objets magiques maudits", en: "Cursed Magic Items" },
          desc: { fr: "Malédictions, accord et comment s'en défaire", en: "Curses, attunement and how to be rid of them" },
          tags: {
            fr: "maudit, malédiction, objet maudit, objet magique, harmonisation, accord, lien, se débarrasser, retirer malédiction",
            en: "cursed, curse, cursed item, magic item, attunement, bond, get rid of, remove curse"
          },
          fichiers: { fr: "parchemins/fiche_objets_magiques_maudits_parchemin.pdf", en: "parchemins/fiche_objets_magiques_maudits_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Parchemin de sort", en: "Spell Scroll" },
          desc: { fr: "Utiliser et lire un parchemin de sort", en: "Using and reading a spell scroll" },
          tags: {
            fr: "parchemin, parchemin de sort, lire, sort, niveau, magie, objet magique, copier un sort",
            en: "scroll, spell scroll, read, spell, level, magic, magic item, copy a spell"
          },
          fichiers: { fr: "parchemins/fiche_parchemin_de_sort_parchemin.pdf", en: "parchemins/fiche_parchemin_de_sort_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Sorts à action bonus", en: "Bonus Action Spells" },
          desc: { fr: "La règle de l'action bonus et la liste des sorts", en: "The bonus action rule and the list of spells" },
          tags: {
            fr: "action bonus, sort, sorts, règle, un seul sort, tour, bouclier, mot de guérison",
            en: "bonus action, spell, spells, rule, one spell, turn, shield, healing word"
          },
          fichiers: { fr: "parchemins/fiche_sorts_action_bonus_parchemin.pdf", en: "parchemins/fiche_sorts_action_bonus_parchemin_US.pdf" }
        },
        {
          titre: { fr: "La concentration", en: "Concentration" },
          desc: { fr: "Ce qui la maintient et ce qui la brise", en: "What keeps it and what breaks it" },
          tags: {
            fr: "concentration, se concentrer, rompre, dégâts, sauvegarde de constitution, sort",
            en: "concentration, concentrate, break, damage, constitution save, spell"
          },
          fichiers: { fr: "parchemins/fiche_concentration_parchemin.pdf", en: "parchemins/fiche_concentration_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Composantes et focaliseur", en: "Components and Focus" },
          desc: { fr: "Verbale, somatique, matérielle", en: "Verbal, somatic, material" },
          tags: {
            fr: "composantes, composante, verbale, somatique, matérielle, focaliseur, focaliseur arcanique, sac à composantes, main libre",
            en: "components, component, verbal, somatic, material, focus, arcane focus, component pouch, free hand"
          },
          fichiers: { fr: "parchemins/fiche_composantes_et_focaliseur_parchemin.pdf", en: "parchemins/fiche_composantes_et_focaliseur_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Zones d'effet et lignes de vue", en: "Areas of Effect and Lines of Sight" },
          desc: { fr: "Cône, cube, cylindre, ligne, sphère", en: "Cone, cube, cylinder, line, sphere" },
          tags: {
            fr: "zone, zones d'effet, cône, cube, cylindre, ligne, sphère, ligne de vue, origine, portée",
            en: "area, areas of effect, cone, cube, cylinder, line, sphere, line of sight, origin, range"
          },
          fichiers: { fr: "parchemins/fiche_zones_d_effet_parchemin.pdf", en: "parchemins/fiche_zones_d_effet_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Créatures invoquées et compagnons", en: "Summoned Creatures and Companions" },
          desc: { fr: "Qui agit, quand et avec quelles actions", en: "Who acts, when and with which actions" },
          tags: {
            fr: "créature invoquée, invocation, compagnon, familier, monture, animal, initiative, ordre, commander",
            en: "summoned creature, summon, companion, familiar, mount, animal, initiative, command"
          },
          fichiers: { fr: "parchemins/fiche_creatures_invoquees_compagnons_parchemin.pdf", en: "parchemins/fiche_creatures_invoquees_compagnons_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Forme sauvage", en: "Wild Shape" },
          desc: { fr: "Se transformer en bête : règles et limites", en: "Turning into a beast: rules and limits" },
          tags: {
            fr: "forme sauvage, druide, bête, métamorphose, transformation, pv, utilisations, équipement",
            en: "wild shape, druid, beast, transformation, hit points, uses, equipment"
          },
          fichiers: { fr: "parchemins/fiche_forme_sauvage_parchemin.pdf", en: "parchemins/fiche_forme_sauvage_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Les rituels", en: "Rituals" },
          desc: { fr: "Lancer un sort en rituel, sans emplacement", en: "Casting a spell as a ritual, without a slot" },
          tags: {
            fr: "rituel, rituels, 10 minutes, sans emplacement, adepte des rituels, sort rituel",
            en: "ritual, rituals, 10 minutes, no slot, ritual caster, ritual spell"
          },
          fichiers: { fr: "parchemins/fiche_rituels_parchemin.pdf", en: "parchemins/fiche_rituels_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Les emplacements de sort", en: "Spell Slots" },
          desc: { fr: "Dépenser, récupérer et lancer à un niveau supérieur", en: "Spend, recover and cast at a higher level" },
          tags: {
            fr: "emplacement de sort, emplacements, niveau supérieur, repos, récupération, lancer, incantation",
            en: "spell slot, spell slots, higher level, rest, recovery, cast, upcasting"
          },
          fichiers: { fr: "parchemins/fiche_emplacements_de_sort_parchemin.pdf", en: "parchemins/fiche_emplacements_de_sort_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Sorts à sauvegarde", en: "Saving Throw Spells" },
          desc: { fr: "DD, jets de sauvegarde et effets en cas de réussite", en: "DC, saving throws and effects on a success" },
          tags: {
            fr: "sort à sauvegarde, jet de sauvegarde, DD des sorts, réussite, échec, moitié des dégâts, zone",
            en: "saving throw spell, saving throw, spell dc, success, failure, half damage, area"
          },
          fichiers: { fr: "parchemins/fiche_sorts_a_sauvegarde_parchemin.pdf", en: "parchemins/fiche_sorts_a_sauvegarde_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Mourir et ressusciter", en: "Dying and Resurrection" },
          desc: { fr: "Mort, retour à la vie et limites des sorts", en: "Death, coming back and the limits of spells" },
          tags: {
            fr: "mourir, mort, ressusciter, résurrection, réanimer, retour à la vie, rappel à la vie, cadavre",
            en: "dying, death, resurrect, resurrection, revive, return to life, raise dead, corpse"
          },
          fichiers: { fr: "parchemins/fiche_mourir_et_ressusciter_parchemin.pdf", en: "parchemins/fiche_mourir_et_ressusciter_parchemin_US.pdf" }
        }
      ]
    },
    /* ---------- LES SORTS ---------- */
    {
      titre: { fr: "Les Sorts", en: "Spells" },
      intro: { fr: "Les sorts les plus courants, un par page, classés par ordre alphabétique : tape un nom, un effet ou un niveau.", en: "The most common spells, one per page, in alphabetical order: type a name, an effect or a level." },
      tri: true,
      fiches: [
        {
          titre: { fr: "Contresort", en: "Counterspell" },
          desc: { fr: "Sort de niveau 3", en: "Level 3 spell" },
          tags: {
            fr: "sort, sorts, niveau 3, contresort, contrer, annuler un sort, réaction, abjuration",
            en: "spell, spells, level 3, counterspell, counter, cancel a spell, reaction, abjuration"
          },
          fichiers: { fr: "parchemins/fiche_contresort_parchemin.pdf", en: "parchemins/fiche_contresort_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Toile d'araignée", en: "Web" },
          desc: { fr: "Sort de niveau 2", en: "Level 2 spell" },
          tags: {
            fr: "sort, sorts, niveau 2, toile, araignée, toile d'araignée, entraver, entravé, filet, zone, dextérité, feu",
            en: "spell, spells, level 2, web, spider, restrain, restrained, net, area, dexterity, fire"
          },
          fichiers: { fr: "parchemins/fiche_toile_araignee_parchemin.pdf", en: "parchemins/fiche_toile_araignee_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Sommeil", en: "Sleep" },
          desc: { fr: "Sort de niveau 1", en: "Level 1 spell" },
          tags: {
            fr: "sort, sorts, niveau 1, sommeil, dormir, endormir, inconscient, points de vie, zone, enchantement",
            en: "spell, spells, level 1, sleep, sleeping, unconscious, hit points, area, enchantment"
          },
          fichiers: { fr: "parchemins/fiche_sommeil_parchemin.pdf", en: "parchemins/fiche_sommeil_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Souhait", en: "Wish" },
          desc: { fr: "Sort de niveau 9", en: "Level 9 spell" },
          tags: {
            fr: "sort, sorts, niveau 9, souhait, vœu, voeu, exaucer, ultime, niveau 9, copier un sort",
            en: "spell, spells, level 9, wish, ultimate, grant, level 9, duplicate a spell"
          },
          fichiers: { fr: "parchemins/fiche_souhait_parchemin.pdf", en: "parchemins/fiche_souhait_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Invocation d'animaux", en: "Conjure Animals" },
          desc: { fr: "Sort de niveau 3", en: "Level 3 spell" },
          tags: {
            fr: "sort, sorts, niveau 3, invocation, invoquer, animaux, bêtes, convoquer, meute, concentration",
            en: "spell, spells, level 3, conjure, summon, animals, beasts, pack, concentration"
          },
          fichiers: { fr: "parchemins/fiche_invocation_animaux_parchemin.pdf", en: "parchemins/fiche_invocation_animaux_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Insecte géant", en: "Giant Insect" },
          desc: { fr: "Sort de niveau 4", en: "Level 4 spell" },
          tags: {
            fr: "sort, sorts, niveau 4, insecte, insectes géants, araignée, mille-pattes, guêpe, invoquer, concentration",
            en: "spell, spells, level 4, giant insect, insects, spider, centipede, wasp, summon, concentration"
          },
          fichiers: { fr: "parchemins/fiche_insecte_geant_parchemin.pdf", en: "parchemins/fiche_insecte_geant_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Rayon de maladie", en: "Ray of Sickness" },
          desc: { fr: "Sort de niveau 1", en: "Level 1 spell" },
          tags: {
            fr: "sort, sorts, niveau 1, rayon, maladie, nausée, empoisonné, poison, dégâts de poison, attaque à distance",
            en: "spell, spells, level 1, ray, sickness, nausea, poisoned, poison, poison damage, ranged attack"
          },
          fichiers: { fr: "parchemins/fiche_rayon_maladie_parchemin.pdf", en: "parchemins/fiche_rayon_maladie_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Aura de vitalité", en: "Aura of Vitality" },
          desc: { fr: "Sort de niveau 3", en: "Level 3 spell" },
          tags: {
            fr: "sort, sorts, niveau 3, aura, vitalité, soins, soigner, action bonus, concentration, guérison",
            en: "spell, spells, level 3, aura, vitality, healing, heal, bonus action, concentration"
          },
          fichiers: { fr: "parchemins/fiche_aura_vitalite_parchemin.pdf", en: "parchemins/fiche_aura_vitalite_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Projectile magique", en: "Magic Missile" },
          desc: { fr: "Sort de niveau 1", en: "Level 1 spell" },
          tags: {
            fr: "sort, sorts, niveau 1, projectile magique, projectiles, force, dégâts de force, toujours touche, magicien",
            en: "spell, spells, level 1, magic missile, missiles, force, force damage, auto-hit, wizard"
          },
          fichiers: { fr: "parchemins/fiche_projectile_magique_parchemin.pdf", en: "parchemins/fiche_projectile_magique_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Bouclier", en: "Shield" },
          desc: { fr: "Sort de niveau 1", en: "Level 1 spell" },
          tags: {
            fr: "sort, sorts, niveau 1, bouclier, protection, classe d'armure, ca, réaction, projectile magique",
            en: "spell, spells, level 1, shield, protection, armor class, ac, reaction, magic missile"
          },
          fichiers: { fr: "parchemins/fiche_bouclier_parchemin.pdf", en: "parchemins/fiche_bouclier_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Mot de guérison", en: "Healing Word" },
          desc: { fr: "Sort de niveau 1", en: "Level 1 spell" },
          tags: {
            fr: "sort, sorts, niveau 1, mot de guérison, soigner, soins, guérison, action bonus, relever, à distance",
            en: "spell, spells, level 1, healing word, heal, healing, bonus action, get up, ranged"
          },
          fichiers: { fr: "parchemins/fiche_mot_de_guerison_parchemin.pdf", en: "parchemins/fiche_mot_de_guerison_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Immobilisation de personne", en: "Hold Person" },
          desc: { fr: "Sort de niveau 2", en: "Level 2 spell" },
          tags: {
            fr: "sort, sorts, niveau 2, immobilisation, immobiliser, paralysé, paralysie, humanoïde, concentration, sagesse",
            en: "spell, spells, level 2, hold person, hold, paralyzed, paralysis, humanoid, concentration, wisdom"
          },
          fichiers: { fr: "parchemins/fiche_immobilisation_personne_parchemin.pdf", en: "parchemins/fiche_immobilisation_personne_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Boule de feu", en: "Fireball" },
          desc: { fr: "Sort de niveau 3", en: "Level 3 spell" },
          tags: {
            fr: "sort, sorts, niveau 3, boule de feu, feu, explosion, dégâts de feu, zone, dextérité, flammes",
            en: "spell, spells, level 3, fireball, fire, explosion, fire damage, area, dexterity, flames"
          },
          fichiers: { fr: "parchemins/fiche_boule_de_feu_parchemin.pdf", en: "parchemins/fiche_boule_de_feu_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Métamorphose", en: "Polymorph" },
          desc: { fr: "Sort de niveau 4", en: "Level 4 spell" },
          tags: {
            fr: "sort, sorts, niveau 4, métamorphose, transformer, transformation, bête, forme, concentration, sagesse",
            en: "spell, spells, level 4, polymorph, transform, transformation, beast, shape, concentration, wisdom"
          },
          fichiers: { fr: "parchemins/fiche_metamorphose_parchemin.pdf", en: "parchemins/fiche_metamorphose_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Invisibilité", en: "Invisibility" },
          desc: { fr: "Sort de niveau 2", en: "Level 2 spell" },
          tags: {
            fr: "sort, sorts, niveau 2, invisibilité, invisible, disparaître, concentration, illusion, désavantage, avantage",
            en: "spell, spells, level 2, invisibility, invisible, vanish, concentration, illusion, disadvantage, advantage"
          },
          fichiers: { fr: "parchemins/fiche_invisibilite_parchemin.pdf", en: "parchemins/fiche_invisibilite_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Mur de force", en: "Wall of Force" },
          desc: { fr: "Sort de niveau 5", en: "Level 5 spell" },
          tags: {
            fr: "sort, sorts, niveau 5, mur de force, mur, force, barrière, indestructible, concentration, dôme",
            en: "spell, spells, level 5, wall of force, wall, force, barrier, indestructible, concentration, dome"
          },
          fichiers: { fr: "parchemins/fiche_mur_de_force_parchemin.pdf", en: "parchemins/fiche_mur_de_force_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Image miroir", en: "Mirror Image" },
          desc: { fr: "Sort de niveau 2", en: "Level 2 spell" },
          tags: {
            fr: "sort, sorts, niveau 2, image miroir, images, doubles, illusion, esquiver, classe d'armure, ca",
            en: "spell, spells, level 2, mirror image, images, duplicates, illusion, dodge, armor class, ac"
          },
          fichiers: { fr: "parchemins/fiche_image_miroir_parchemin.pdf", en: "parchemins/fiche_image_miroir_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Sanctuaire", en: "Sanctuary" },
          desc: { fr: "Sort de niveau 1", en: "Level 1 spell" },
          tags: {
            fr: "sort, sorts, niveau 1, sanctuaire, protéger, protection, ne pas être attaqué, action bonus, sagesse",
            en: "spell, spells, level 1, sanctuary, protect, protection, cannot be attacked, bonus action, wisdom"
          },
          fichiers: { fr: "parchemins/fiche_sanctuaire_parchemin.pdf", en: "parchemins/fiche_sanctuaire_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Charme-personne", en: "Charm Person" },
          desc: { fr: "Sort de niveau 1", en: "Level 1 spell" },
          tags: {
            fr: "sort, sorts, niveau 1, charme, charme-personne, charmé, humanoïde, ami, sagesse, enchantement",
            en: "spell, spells, level 1, charm, charm person, charmed, humanoid, friend, wisdom, enchantment"
          },
          fichiers: { fr: "parchemins/fiche_charme_personne_parchemin.pdf", en: "parchemins/fiche_charme_personne_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Peur", en: "Fear" },
          desc: { fr: "Sort de niveau 3", en: "Level 3 spell" },
          tags: {
            fr: "sort, sorts, niveau 3, peur, effrayé, fuir, terreur, cône, sagesse, concentration",
            en: "spell, spells, level 3, fear, frightened, flee, terror, cone, wisdom, concentration"
          },
          fichiers: { fr: "parchemins/fiche_peur_parchemin.pdf", en: "parchemins/fiche_peur_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Silence", en: "Silence" },
          desc: { fr: "Sort de niveau 2", en: "Level 2 spell" },
          tags: {
            fr: "sort, sorts, niveau 2, silence, sourd, assourdi, bruit, verbale, composante verbale, zone, concentration, rituel",
            en: "spell, spells, level 2, silence, deaf, deafened, noise, verbal, verbal component, area, concentration, ritual"
          },
          fichiers: { fr: "parchemins/fiche_silence_parchemin.pdf", en: "parchemins/fiche_silence_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Animation des morts", en: "Animate Dead" },
          desc: { fr: "Sort de niveau 3", en: "Level 3 spell" },
          tags: {
            fr: "sort, sorts, niveau 3, animation des morts, mort-vivant, squelette, zombie, nécromancie, morts, relever",
            en: "spell, spells, level 3, animate dead, undead, skeleton, zombie, necromancy, dead, raise"
          },
          fichiers: { fr: "parchemins/fiche_animation_des_morts_parchemin.pdf", en: "parchemins/fiche_animation_des_morts_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Appel de familier", en: "Find Familiar" },
          desc: { fr: "Sort de niveau 1", en: "Level 1 spell" },
          tags: {
            fr: "sort, sorts, niveau 1, familier, appel de familier, compagnon, esprit, chat, hibou, corbeau, rituel",
            en: "spell, spells, level 1, familiar, find familiar, companion, spirit, cat, owl, raven, ritual"
          },
          fichiers: { fr: "parchemins/fiche_appel_de_familier_parchemin.pdf", en: "parchemins/fiche_appel_de_familier_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Dissipation de la magie", en: "Dispel Magic" },
          desc: { fr: "Sort de niveau 3", en: "Level 3 spell" },
          tags: {
            fr: "sort, sorts, niveau 3, dissipation, dissiper, annuler la magie, mettre fin à un sort, caractéristique de lancer de sorts",
            en: "spell, spells, level 3, dispel magic, dispel, end magic, end a spell, spellcasting ability"
          },
          fichiers: { fr: "parchemins/fiche_dissipation_de_la_magie_parchemin.pdf", en: "parchemins/fiche_dissipation_de_la_magie_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Bannissement", en: "Banishment" },
          desc: { fr: "Sort de niveau 4", en: "Level 4 spell" },
          tags: {
            fr: "sort, sorts, niveau 4, bannissement, bannir, renvoyer, autre plan, charisme, concentration, extraplanaire",
            en: "spell, spells, level 4, banishment, banish, send away, other plane, charisma, concentration, extraplanar"
          },
          fichiers: { fr: "parchemins/fiche_bannissement_parchemin.pdf", en: "parchemins/fiche_bannissement_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Esprits gardiens", en: "Spirit Guardians" },
          desc: { fr: "Sort de niveau 3", en: "Level 3 spell" },
          tags: {
            fr: "sort, sorts, niveau 3, esprits gardiens, esprits, gardiens, aura, zone, dégâts radiants, clerc, concentration, sagesse",
            en: "spell, spells, level 3, spirit guardians, spirits, guardians, aura, area, radiant damage, cleric, concentration, wisdom"
          },
          fichiers: { fr: "parchemins/fiche_esprits_gardiens_parchemin.pdf", en: "parchemins/fiche_esprits_gardiens_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Hâte", en: "Haste" },
          desc: { fr: "Sort de niveau 3", en: "Level 3 spell" },
          tags: {
            fr: "sort, sorts, niveau 3, hâte, vitesse, action supplémentaire, concentration, allié",
            en: "spell, spells, level 3, haste, speed, extra action, concentration, ally"
          },
          fichiers: { fr: "parchemins/fiche_hate_parchemin.pdf", en: "parchemins/fiche_hate_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Lenteur", en: "Slow" },
          desc: { fr: "Sort de niveau 3", en: "Level 3 spell" },
          tags: {
            fr: "sort, sorts, niveau 3, lenteur, ralentir, ennemi, sagesse, concentration",
            en: "spell, spells, level 3, slow, slowed, enemy, wisdom, concentration"
          },
          fichiers: { fr: "parchemins/fiche_lenteur_parchemin.pdf", en: "parchemins/fiche_lenteur_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Flou", en: "Blur" },
          desc: { fr: "Sort de niveau 2", en: "Level 2 spell" },
          tags: {
            fr: "sort, sorts, niveau 2, flou, désavantage, attaque, défense, concentration",
            en: "spell, spells, level 2, blur, disadvantage, attack, defense, concentration"
          },
          fichiers: { fr: "parchemins/fiche_flou_parchemin.pdf", en: "parchemins/fiche_flou_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Cécité/Surdité", en: "Blindness/Deafness" },
          desc: { fr: "Sort de niveau 2", en: "Level 2 spell" },
          tags: {
            fr: "sort, sorts, niveau 2, cécité, surdité, aveuglé, assourdi, aveugle, sourd, constitution",
            en: "spell, spells, level 2, blindness, deafness, blinded, deafened, blind, deaf, constitution"
          },
          fichiers: { fr: "parchemins/fiche_cecite_surdite_parchemin.pdf", en: "parchemins/fiche_cecite_surdite_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Arme spirituelle", en: "Spiritual Weapon" },
          desc: { fr: "Sort de niveau 2", en: "Level 2 spell" },
          tags: {
            fr: "sort, sorts, niveau 2, arme spirituelle, arme, action bonus, clerc, force",
            en: "spell, spells, level 2, spiritual weapon, weapon, bonus action, cleric, force"
          },
          fichiers: { fr: "parchemins/fiche_arme_spirituelle_parchemin.pdf", en: "parchemins/fiche_arme_spirituelle_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Détection des pensées", en: "Detect Thoughts" },
          desc: { fr: "Sort de niveau 2", en: "Level 2 spell" },
          tags: {
            fr: "sort, sorts, niveau 2, détection des pensées, pensées, télépathie, lire dans l'esprit, concentration",
            en: "spell, spells, level 2, detect thoughts, thoughts, telepathy, read minds, concentration"
          },
          fichiers: { fr: "parchemins/fiche_detection_des_pensees_parchemin.pdf", en: "parchemins/fiche_detection_des_pensees_parchemin_US.pdf" }
        }
      ]
    },
    {
      titre: { fr: "Règles générales et personnage", en: "General Rules and Character" },
      intro: { fr: "Jets, inspiration, dons, outils et objets magiques.", en: "Checks, inspiration, feats, tools and magic items." },
      tri: false,
      fiches: [
        {
          titre: { fr: "Jets d'attribut et de sauvegarde", en: "Ability Checks and Saving Throws" },
          desc: { fr: "Le d20, le bonus et le DD", en: "The d20, the bonus and the DC" },
          tags: {
            fr: "jet d'attribut, test de caractéristique, jet de sauvegarde, sauvegarde, d20, dd, degré de difficulté, bonus de maîtrise",
            en: "ability check, saving throw, save, d20, dc, difficulty class, proficiency bonus"
          },
          fichiers: { fr: "parchemins/fiche_jets_attribut_sauvegarde_parchemin.pdf", en: "parchemins/fiche_jets_attribut_sauvegarde_parchemin_US.pdf" }
        },
        {
          titre: { fr: "L'inspiration héroïque", en: "Heroic Inspiration" },
          desc: { fr: "Gagner, garder et dépenser l'inspiration", en: "Gain, keep and spend inspiration" },
          tags: {
            fr: "inspiration, inspiration héroïque, relancer, récompense, humain",
            en: "inspiration, heroic inspiration, reroll, reward, human"
          },
          fichiers: { fr: "parchemins/fiche_inspiration_heroique_parchemin.pdf", en: "parchemins/fiche_inspiration_heroique_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Le multiclassage", en: "Multiclassing" },
          desc: { fr: "Prérequis, niveaux et emplacements de sort", en: "Prerequisites, levels and spell slots" },
          tags: {
            fr: "multiclassage, multiclasse, prérequis, niveau, plusieurs classes, emplacements de sorts",
            en: "multiclassing, multiclass, prerequisite, level, several classes, spell slots"
          },
          fichiers: { fr: "parchemins/fiche_multiclassage_parchemin.pdf", en: "parchemins/fiche_multiclassage_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Les dons", en: "Feats" },
          desc: { fr: "Dons d'origine, généraux et de style de combat", en: "Origin, general and fighting style feats" },
          tags: {
            fr: "don, dons, origine, général, style de combat, amélioration de caractéristique",
            en: "feat, feats, origin, general, fighting style, ability score improvement"
          },
          fichiers: { fr: "parchemins/fiche_dons_parchemin.pdf", en: "parchemins/fiche_dons_parchemin_US.pdf" }
        },
        {
          titre: { fr: "L'utilisation d'outils", en: "Using Tools" },
          desc: { fr: "Maîtrise d'outils et jets associés", en: "Tool proficiency and related checks" },
          tags: {
            fr: "outil, outils, maîtrise d'outils, kit, artisan, voleur, jet, utiliser un outil",
            en: "tool, tools, tool proficiency, kit, artisan, thieves, check, use a tool"
          },
          fichiers: { fr: "parchemins/fiche_utilisation_d_outils_parchemin.pdf", en: "parchemins/fiche_utilisation_d_outils_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Harmonisation et objets magiques", en: "Attunement and Magic Items" },
          desc: { fr: "Qui peut porter quoi, et combien", en: "Who can wear what, and how many" },
          tags: {
            fr: "harmonisation, s'harmoniser, objet magique, objets magiques, trois objets, repos court, raretés",
            en: "attunement, attune, magic item, magic items, three items, short rest, rarity"
          },
          fichiers: { fr: "parchemins/fiche_harmonisation_objets_magiques_parchemin.pdf", en: "parchemins/fiche_harmonisation_objets_magiques_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Langues et communication", en: "Languages and Communication" },
          desc: { fr: "Parler, écrire et se faire comprendre", en: "Speaking, writing and being understood" },
          tags: {
            fr: "langue, langues, communiquer, traduire, écrire, alphabet, dialecte, commun, télépathie",
            en: "language, languages, communicate, translate, write, script, dialect, common, telepathy"
          },
          fichiers: { fr: "parchemins/fiche_langues_et_communication_parchemin.pdf", en: "parchemins/fiche_langues_et_communication_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Propriété : maison, guilde, forteresse", en: "Property: House, Guild, Stronghold" },
          desc: { fr: "Acheter, tenir et défendre un lieu à soi", en: "Buying, running and defending a place of your own" },
          tags: {
            fr: "propriété, maison, guilde, forteresse, château, domaine, acheter, bâtiment, entretien",
            en: "property, house, guild, stronghold, castle, estate, buy, building, upkeep"
          },
          fichiers: { fr: "parchemins/fiche_propriete_maison_forteresse_parchemin.pdf", en: "parchemins/fiche_propriete_maison_forteresse_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Attitude des PNJ et jeu social", en: "NPC Attitude and Social Play" },
          desc: { fr: "Amical, indifférent ou hostile : jouer les échanges", en: "Friendly, indifferent or hostile: running social exchanges" },
          tags: {
            fr: "attitude, PNJ, amical, hostile, indifférent, social, persuasion, négocier, réaction, dialogue",
            en: "attitude, npc, friendly, hostile, indifferent, social, persuasion, negotiate, reaction, dialogue"
          },
          fichiers: { fr: "parchemins/fiche_attitude_pnj_jeu_social_parchemin.pdf", en: "parchemins/fiche_attitude_pnj_jeu_social_parchemin_US.pdf" }
        }
      ]
    },
    {
      titre: { fr: "Guide du MD", en: "DM Guide" },
      intro: { fr: "Fixer les difficultés et préparer les rencontres.", en: "Setting difficulties and preparing encounters." },
      tri: false,
      fiches: [
        {
          titre: { fr: "DD et difficulté", en: "DCs and Difficulty" },
          desc: { fr: "Fixer le bon degré de difficulté", en: "Setting the right difficulty class" },
          tags: {
            fr: "dd, degré de difficulté, difficulté, facile, difficile, md, mj, fixer, jet",
            en: "dc, difficulty class, difficulty, easy, hard, dm, gm, set, roll"
          },
          fichiers: { fr: "parchemins/fiche_dd_et_difficulte_parchemin.pdf", en: "parchemins/fiche_dd_et_difficulte_parchemin_US.pdf" }
        },
        {
          titre: { fr: "Les rencontres", en: "Encounters" },
          desc: { fr: "Préparer et équilibrer une rencontre", en: "Prepare and balance an encounter" },
          tags: {
            fr: "rencontre, rencontres, équilibrer, monstres, facteur de puissance, md, mj, préparer, combat",
            en: "encounter, encounters, balance, monsters, challenge rating, cr, dm, gm, prepare, combat"
          },
          fichiers: { fr: "parchemins/fiche_rencontres_parchemin.pdf", en: "parchemins/fiche_rencontres_parchemin_US.pdf" }
        }
      ]
    }
  ];
  var SUGGESTIONS = {
    fr: ["corde", "boule de feu", "initiative", "repos", "concentration", "invisible"],
    en: ["rope", "fireball", "initiative", "rest", "concentration", "invisible"]
  };
  function simpl(s) {
    return " " + String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[·,.:;()«»'’\-]/g, " ").replace(/\s+/g, " ").trim();
  }
  var ENTREES = [];
  GUIDES.forEach(function(g, j) {
    ENTREES.push({ cle: "g" + j, fiche: g, theme: null, guide: true });
  });
  THEMES.forEach(function(th, i) {
    th.fiches.forEach(function(f, j) {
      ENTREES.push({ cle: "t" + i + "-" + j, fiche: f, theme: th, guide: false });
    });
  });
  ENTREES.forEach(function(e) {
    var f = e.fiche;
    e.simpleTitre = simpl(f.titre.fr + " " + f.titre.en);
    e.simpleDesc = simpl([f.desc.fr, f.desc.en, e.theme ? e.theme.titre.fr + " " + e.theme.titre.en : "guide guides"].join(" "));
    e.listeTags = [];
    ["fr", "en"].forEach(function(L) {
      var brut = f.tags && f.tags[L] ? f.tags[L].split(",") : [];
      brut.forEach(function(t) {
        t = t.trim();
        if (t) {
          e.listeTags.push({ texte: t, simple: simpl(t) });
        }
      });
    });
  });
  function chercher(requete) {
    var q = simpl(requete).trim();
    if (!q) {
      return [];
    }
    var mots = q.split(" ").filter(function(m) {
      return m.length > 1 || /^[0-9]$/.test(m);
    });
    if (!mots.length) {
      mots = [q];
    }
    var res = [];
    ENTREES.forEach(function(e, ordre) {
      var score = 0, ok = true, trouves = [];
      mots.forEach(function(m) {
        var aiguille = " " + m;
        if (e.simpleTitre.indexOf(aiguille) !== -1) {
          score += 3;
          return;
        }
        var tags = e.listeTags.filter(function(t) {
          return t.simple.indexOf(aiguille) !== -1;
        });
        if (tags.length) {
          score += 2;
          tags.slice(0, 2).forEach(function(t) {
            if (trouves.indexOf(t.texte) === -1) {
              trouves.push(t.texte);
            }
          });
          return;
        }
        if (e.simpleDesc.indexOf(aiguille) !== -1) {
          score += 1;
          return;
        }
        ok = false;
      });
      if (ok) {
        res.push({ entree: e, score, ordre, tags: trouves.slice(0, 3) });
      }
    });
    res.sort(function(a, b) {
      return b.score - a.score || a.ordre - b.ordre;
    });
    return res;
  }
  if (window.GJ) {
    window.GJ.catalogue = { guides: GUIDES, themes: THEMES, entrees: ENTREES };
    window.GJ.chercher = chercher;
    window.GJ.suggestions = SUGGESTIONS;
  }
  var ETIQUETTES = { "SRD": "SRD", "hors SRD": "Hors SRD", "règle de table": "Règle de table", "interprétation": "Interprétation" };
  var MENTION = "SRD 5.2 (CC BY 4.0) · fiche non officielle, interprétation de nos recherches";
  var conteneur = document.getElementById("parchemins");
  if (!conteneur) {
    return;
  }
  var dico = {};
  function lier(o) {
    if (o && o.fr && o.en && o.fr !== o.en) {
      dico[o.fr] = o.en;
    }
  }
  function compte(n, un, plusieurs) {
    return n + " " + (n > 1 ? plusieurs : un);
  }
  dico[MENTION] = "SRD 5.2 (CC BY 4.0) · unofficial sheet, interpretation from our own research";
  var ng = GUIDES.length;
  dico[compte(ng, "guide", "guides")] = compte(ng, "guide", "guides");
  GUIDES.forEach(function(g) {
    lier(g.titre);
    lier(g.desc);
  });
  THEMES.forEach(function(theme) {
    lier(theme.titre);
    lier(theme.intro);
    var n = theme.fiches.length;
    dico[compte(n, "page d'aide", "pages d'aide")] = compte(n, "help page", "help pages");
    theme.fiches.forEach(function(f) {
      lier(f.titre);
      lier(f.desc);
    });
  });
  if (window.GJ && window.GJ.extend) {
    window.GJ.extend(dico);
  }
  function el(balise, classe, texte) {
    var e = document.createElement(balise);
    if (classe) {
      e.className = classe;
    }
    if (texte !== void 0) {
      e.textContent = texte;
    }
    return e;
  }
  function deux(n) {
    return (n < 10 ? "0" : "") + n;
  }
  function ligneFichier(code, fichiers, telechargeable) {
    var ligne = el("div", "file-row");
    var pages = Array.isArray(fichiers) ? fichiers : fichiers ? [fichiers] : [];
    var lien = el("a", "file-link");
    lien.setAttribute("href", pages.length ? pages[0] : "#");
    if (pages.length > 1) {
      lien.setAttribute("data-pages", pages.join("|"));
    }
    if (!telechargeable) {
      lien.setAttribute("data-lecture", "seule");
    }
    lien.appendChild(el("span", "", code));
    lien.appendChild(el("em", "file-name", telechargeable ? "Lire le guide" : "Consulter la page"));
    ligne.appendChild(lien);
    if (pages.length && telechargeable) {
      var dl = el("a", "file-dl", "↓");
      dl.setAttribute("href", pages[0]);
      dl.setAttribute("download", "");
      dl.setAttribute("title", "Télécharger");
      dl.setAttribute("aria-label", "Télécharger");
      ligne.appendChild(dl);
    }
    return ligne;
  }
  function carte(fiche, j, telechargeable, cle) {
    var item = el("div", "download-item");
    item.setAttribute("data-key", cle);
    var info = el("div", "download-info");
    info.appendChild(el("span", "download-number", deux(j + 1)));
    var texte = el("div");
    texte.appendChild(el("h3", "", fiche.titre.fr));
    texte.appendChild(el("p", "", fiche.desc.fr));
    var cle = fiche.etiquette && ETIQUETTES[fiche.etiquette] ? fiche.etiquette : "SRD";
    texte.appendChild(el("span", "tag tag-" + cle.replace(/\s+/g, "-"), ETIQUETTES[cle]));
    info.appendChild(texte);
    item.appendChild(info);
    var liens = el("div", "download-links");
    liens.appendChild(ligneFichier("FR", fiche.fichiers.fr, telechargeable));
    liens.appendChild(ligneFichier("EN", fiche.fichiers.en, telechargeable));
    item.appendChild(liens);
    item.appendChild(el("p", "fiche-mention", MENTION));
    return item;
  }
  function entete(classe, eyebrow, titre, intro) {
    var s = el("div", "library-head");
    s.appendChild(el("p", "eyebrow", eyebrow));
    s.appendChild(el("h2", "library-title", titre));
    s.appendChild(el("p", "library-intro", intro));
    return s;
  }
  var sectionGuides = el("section", "library-section");
  sectionGuides.appendChild(entete("", "Lire en grand ou emporter", "Les guides à télécharger", "Pour les lire ici, en grand, ou les télécharger et les garder avec toi."));
  var liste = el("div", "guides-list");
  GUIDES.forEach(function(g, j) {
    liste.appendChild(carte(g, j, true, "g" + j));
  });
  sectionGuides.appendChild(liste);
  conteneur.appendChild(sectionGuides);
  var sectionPages = el("section", "library-section");
  sectionPages.appendChild(entete("", "À consulter sur le site", "Les pages d'aide à consulter", "Des pages en très bonne qualité, à lire ici même : reviens quand tu veux, elles sont toujours à jour."));
  THEMES.forEach(function(theme, i) {
    var details = el("details", "download-category");
    var resume = el("summary");
    resume.appendChild(el("span", "cat-number", deux(i + 1)));
    resume.appendChild(el("h3", "cat-title", theme.titre.fr));
    var n = theme.fiches.length;
    resume.appendChild(el("span", "cat-meta", compte(n, "page d'aide", "pages d'aide")));
    var bascule = el("span", "cat-toggle");
    bascule.setAttribute("aria-hidden", "true");
    resume.appendChild(bascule);
    details.appendChild(resume);
    var panneau = el("div", "category-panel");
    if (theme.tri) {
      panneau.setAttribute("data-sort", "");
    }
    panneau.appendChild(el("p", "category-intro", theme.intro.fr));
    theme.fiches.forEach(function(fiche, j) {
      panneau.appendChild(carte(fiche, j, false, "t" + i + "-" + j));
    });
    details.appendChild(panneau);
    sectionPages.appendChild(details);
  });
  conteneur.appendChild(sectionPages);
  if (window.GJ && window.GJ.register) {
    window.GJ.register(conteneur);
  }
})();
