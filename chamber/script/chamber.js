document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;

    //display members
    async function fetchMembers() {
        const response = await fetch("data/members.json");
        const data = await response.json();
        displayMembers(data.members);
    }

    function displayMembers(members) {
        const container = document.getElementById("members-container");

        members.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src = "${member.img}" alt="${member.name}">
                <h2>${member.name}</h2>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;
            container.appendChild(card);
        });
    }

    fetchMembers();

    document.getElementById("grid-view").addEventListener("click", () => {
        document.getElementById("members-container").classList.remove("list");
    });

    document.getElementById("list-view").addEventListener("click", () => {
        document.getElementById("members-container").classList.add("list");
    });

    const menuToggle = document.getElementById("menu_toggle");
    const navMenu = document.getElementById("nav_menu");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

});