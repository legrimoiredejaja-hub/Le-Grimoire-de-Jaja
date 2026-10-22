/* ============================================================
   CONTACT : sur ordinateur, un clic sur « Me contacter », sur la hutte
   ou sur tout lien marqué data-mail ouvre une petite fenêtre avec 3 choix
   (application mail, Gmail, copier l'adresse), car « mailto: » ne fait
   rien si l'ordinateur n'a pas de logiciel de messagerie.
   Sur téléphone, le clic ouvre directement l'application mail.
   La fenêtre est créée ici : elle marche donc sur toutes les pages.
   ============================================================ */
(function () {
  'use strict';

  var ADRESSE = 'legrimoiredeJaja@gmail.com';

  var declencheurs = document.querySelectorAll('[data-mail], .contact-art');
  if (!declencheurs.length) { return; }

  var souris = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!souris) { return; } // Téléphone / tablette : on garde le lien mailto normal.

  var fenetre = null;
  var message = null;

  function t(fr) { return (window.GJ && window.GJ.t) ? window.GJ.t(fr) : fr; }

  /* Crée la fenêtre la première fois qu'on en a besoin. */
  function creer() {
    fenetre = document.createElement('dialog');
    fenetre.className = 'mail-dialog';
    fenetre.id = 'mail-dialog';
    fenetre.setAttribute('aria-labelledby', 'mail-title');
    fenetre.innerHTML =
      '<h3 id="mail-title">Écrire au Grimoire de Jaja</h3>' +
      '<p>Choisis comment envoyer ton message :</p>' +
      '<div class="mail-options">' +
        '<a class="button button-primary" href="mailto:' + ADRESSE + '">Ouvrir mon application mail <span>↗</span></a>' +
        '<a class="button button-outline" href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=' + ADRESSE + '" target="_blank" rel="noopener noreferrer">Écrire avec Gmail <span>↗</span></a>' +
        '<button class="button button-outline" type="button" data-copy="' + ADRESSE + '">Copier l\'adresse <span>⧉</span></button>' +
      '</div>' +
      '<p class="mail-copied" role="status" aria-live="polite"></p>' +
      '<button class="mail-close" type="button" data-close>Fermer</button>';
    document.body.appendChild(fenetre);
    if (window.GJ && window.GJ.register) { window.GJ.register(fenetre); }
    message = fenetre.querySelector('.mail-copied');

    /* Fermer : bouton « Fermer » ou clic en dehors de la fenêtre. */
    fenetre.querySelector('[data-close]').addEventListener('click', function () { fenetre.close(); });
    fenetre.addEventListener('click', function (e) { if (e.target === fenetre) { fenetre.close(); } });

    /* Copier l'adresse. */
    fenetre.querySelector('[data-copy]').addEventListener('click', function () {
      function ok() { message.textContent = t('Adresse copiée :') + ' ' + ADRESSE; }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(ADRESSE).then(ok, function () { message.textContent = ADRESSE; });
      } else {
        message.textContent = ADRESSE;
      }
    });
  }

  Array.prototype.forEach.call(declencheurs, function (lien) {
    lien.addEventListener('click', function (e) {
      if (typeof HTMLDialogElement === 'undefined') { return; } // Très vieux navigateur : lien normal.
      e.preventDefault();
      if (!fenetre) { creer(); }
      message.textContent = '';
      fenetre.showModal();
    });
  });
})();
