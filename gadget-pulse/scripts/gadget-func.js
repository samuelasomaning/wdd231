// gadget-function //
export async function fetchGadgets() {
  try {
    const response = await fetch('data/gadgets.json');
    if (!response.ok) throw new Error('Failed to load data');
    return await response.json();
  } catch (error) {
    console.error('Fetch Error:', error);
    return [];
  }
}

export function createGadgetCard(gadget, isHome = false) {
  const card = document.createElement('div');
  card.className = 'gadget-card';

  card.innerHTML = `
    <img src="${gadget.image}" alt="${gadget.name}" loading="lazy">
    <h3>${gadget.name}</h3>
    <p>${gadget.description}</p>
    <button class="favorite-btn" data-id="${gadget.id}">❤️ Favorite</button>
    ${isHome ? '' : `<button class="view-more" data-id="${gadget.id}">View More</button>`}
  `;

  return card;
}

export function updateFooter() {
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = document.lastModified;
}
