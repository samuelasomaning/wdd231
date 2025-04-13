// main.js //
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

  // Mobile nav toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Modal logic and localStorage
  document.addEventListener('click', async (e) => {
    // Favorite button logic
    if (e.target.classList.contains('favorite-btn')) {
      const id = e.target.dataset.id;
      let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

      if (!favorites.includes(id)) {
        favorites.push(id);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('Added to favorites!');
      } else {
        alert('Already in favorites.');
      }
    }

    // View More button logic (open modal)
    if (e.target.classList.contains('view-more')) {
      const id = e.target.dataset.id;
      const gadgets = await fetchGadgets();
      const gadget = gadgets.find(g => g.id == id);
      if (gadget) {
        const modalBody = document.getElementById('modal-body');
        modalBody.innerHTML = `
          <h2>${gadget.name}</h2>
          <img src="${gadget.image}" alt="${gadget.name}" style="width: 100%; max-height: 300px;">
          <p>${gadget.description}</p>
        `;
        document.getElementById('modal').classList.remove('hidden');
      }
    }

    // Close modal
    if (e.target.classList.contains('close-btn')) {
      document.getElementById('modal').classList.add('hidden');
    }
  });
});



