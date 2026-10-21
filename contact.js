/* ============================================================
   CONTACT : sur ordinateur, un clic sur la hutte ouvre une petite fenêtre
   avec 3 choix (application mail, Gmail, copier l'adresse), car « mailto: »
   ne fait rien si l'ordinateur n'a pas de logiciel de messagerie.
   Sur téléphone, le clic ouvre directement l'application mail.
   ============================================================ */
(function () {
  'use strict';

  var lien = document.querySelector('.contact-art');
  var fenetre = document.getElementById('mail-dialog');
  if (!lien || !fenetre || typeof fenetre.showModal !== 'function') { return; }

  var souris = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var message = fenetre.querySelector('.mail-copied');

  if (souris) {
    lien.addEventListener('click', function (e) {
      e.preventDefault();
      message.textContent = '';
      fenetre.showModal();
    });
  }

  /* Fermer : bouton « Fermer » ou clic en dehors de la fenêtre. */
  fenetre.querySelector('[data-close]').addEventListener('click', function () { fenetre.close(); });
  fenetre.addEventListener('click', function (e) { if (e.target === fenetre) { fenetre.close(); } });

  /* Copier l'adresse. */
  fenetre.querySelector('[data-copy]').addEventListener('click', function (e) {
    var adresse = e.currentTarget.getAttribute('data-copy');
    function ok() { message.textContent = 'Adresse copiée : ' + adresse; }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(adresse).then(ok, function () { message.textContent = adresse; });
    } else {
      message.textContent = adresse;
    }
  });
})();
