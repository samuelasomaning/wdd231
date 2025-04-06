// discover.js
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;

    displayVisitMessage();
    loadItems();
});

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

    async function loadItems() {
    const response = await fetch("data/discover.json");
    const data = await response.json();
    const items = data.items;
    const container = document.getElementById("items-container");

    items.forEach((item) => {
        // Create card wrapper
        const theCard = document.createElement("div");
        theCard.classList.add("cards"); // Add a class for styling

        // Create and add image
        const thePhoto = document.createElement("img");
        thePhoto.src = item.image;
        thePhoto.alt = item.name;
        thePhoto.loading = "lazy";
        theCard.appendChild(thePhoto);

        // Title
        const theTitle = document.createElement("h2");
        theTitle.textContent = item.name;
        theCard.appendChild(theTitle);

        // Address
        const theAddress = document.createElement("address");
        theAddress.textContent = item.address;
        theCard.appendChild(theAddress);

        // Description
        const theDesc = document.createElement("p");
        theDesc.textContent = item.description;
        theCard.appendChild(theDesc);

        // Learn More button
        const theButton = document.createElement("button");
        theButton.textContent = "Learn More";
        theButton.onclick = () => alert("More info coming soon!");
        theCard.appendChild(theButton);

        // Append card to container
        container.appendChild(theCard);
    });
}
