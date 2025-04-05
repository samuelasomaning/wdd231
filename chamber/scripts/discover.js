// discover.js

async function loadItems() {
    const response = await fetch("data/discover.json");
    const data = await response.json();
    const items = data.items;
    const container = document.getElementById("items-container");

    items.forEach((item) => {
        // Create card wrapper
        const theCard = document.createElement("div");
        theCard.classList.add("card"); // Add a class for styling

        // Create and add image
        const thePhoto = document.createElement("img");
        thePhoto.src = item.image;
        thePhoto.alt = item.name;
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

document.addEventListener("DOMContentLoaded", loadItems);
