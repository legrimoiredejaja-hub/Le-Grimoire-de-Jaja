(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#navigation');
  const year = document.querySelector('#year');

  if (year) year.textContent = new Date().getFullYear();

  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      navigation.classList.toggle('is-open', !isOpen);
    });

    navigation.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navigation.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Remplacez le lien ci-dessous par votre page Ko-fi, PayPal ou autre
  // lorsque vous serez prêt à recevoir des contributions.
  const donationUrl = '';
  const donationLink = document.querySelector('#donation-link');
  if (donationUrl && donationLink) donationLink.href = donationUrl;
})();
