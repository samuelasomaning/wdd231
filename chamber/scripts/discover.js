// discover.js

document.addEventListener("DOMContentLoaded", () => {
    loadItems();
    displayVisitMessage();
    document.getElementById("lastModified").textContent = document.lastModified;
});

async function loadItems() {
    const response = await fetch("data/discover.json");
    const data = await response.json();
    const items = data.items;
    const container = document.getElementById("items-container");

    items.forEach((item, index) => {
        const article = document.createElement("article");
        article.innerHTML = `
            <h2>${item.name}</h2>
            <figure>
                <img src="${item.image}" alt="${item.name}">
            </figure>
            <address>${item.address}</address>
            <p>${item.description}</p>
            <button onclick="alert('More info coming soon!')">Learn More</button>
        `;
        article.style.gridArea = `item${index + 1}`;
        container.appendChild(article);
    });
}

function displayVisitMessage() {
    const now = Date.now();
    const lastVisit = localStorage.getItem("lastVisit");
    const messageArea = document.getElementById("visitor-message");

    if (!lastVisit) {
        messageArea.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysDifference = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
        if (daysDifference < 1) {
            messageArea.textContent = "Back so soon! Awesome!";
        } else {
            messageArea.textContent = `You last visited ${daysDifference} day${daysDifference === 1 ? "" : "s"} ago.`;
        }
    }

    localStorage.setItem("lastVisit", now);
}
