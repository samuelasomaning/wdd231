import { fetchGadgets, createGadgetCard, updateFooter } from './gadget-func.js';

document.addEventListener('DOMContentLoaded', async () => {
  updateFooter();

  const container = document.getElementById('gadgetContainer');
  if (!container) return;

  try {
    const gadgets = await fetchGadgets();
    gadgets.slice(0, 3).forEach(gadget => {
      const card = createGadgetCard(gadget, true);
      container.appendChild(card);
    });
  } catch (err) {
    console.error('Error loading gadgets:', err);
  }

  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});
