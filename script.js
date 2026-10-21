// 01. Récupère le bouton de menu et la navigation sur chaque page.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

// 02. Sur téléphone, le bouton ouvre ou ferme les liens de navigation.
if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

// 03. Affiche automatiquement l'année en cours dans le pied de page.
const yearElement = document.querySelector('#year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
