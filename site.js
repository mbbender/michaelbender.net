const toggle = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('#mobile-menu');
if (toggle && menu) {
  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    menu.hidden = true;
  };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.hidden = !open;
  });
  menu.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !menu.hidden) { closeMenu(); toggle.focus(); }
  });
  window.matchMedia('(min-width: 851px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
}
const answers = {
  custom: "A customer portal, booking system, or internal tool built for your business may use PHP, even if its address doesn't end in .php. I can help identify it and check what needs attention.",
  wordpress: "WordPress and WooCommerce run on PHP. Updating a plugin or WordPress alone doesn't update PHP on your server. Your host may already have applied the fix; I can help confirm it.",
  unsure: "You don't need to figure this out first. Start with your website address or the name of the system you use. We'll identify what runs it and what your hosting provider has already done."
};
document.querySelectorAll('[data-software]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-software]').forEach(choice => {
      choice.classList.toggle('active', choice === button);
      choice.setAttribute('aria-pressed', String(choice === button));
    });
    document.querySelector('#software-answer').textContent = answers[button.dataset.software];
  });
});
const requestType = document.querySelector('#request-type');
const preferredTime = document.querySelector('#preferred-time');
if (requestType && preferredTime) {
  const updateRequest = () => {
    preferredTime.hidden = requestType.value !== 'scheduled';
    preferredTime.querySelector('input').disabled = preferredTime.hidden;
  };
  requestType.addEventListener('change', updateRequest);
  updateRequest();
}
document.querySelectorAll('[data-year]').forEach(element => { element.textContent = new Date().getFullYear(); });
// Keep confirmation in this preview when reviewing locally.
if (['localhost', '127.0.0.1'].includes(window.location.hostname)) {
  const next = document.querySelector('input[name="_next"]');
  if (next) next.value = new URL('/thanks/', window.location.origin).href;
}
