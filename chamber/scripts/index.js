const apiKey = "b1d30661a8c27a9a9cd3d4056070407e";
const city = "Aburi";
const countryCode = "GH";
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&units=metric&appid=${apiKey}`;

async function fetchWeather() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("weather data not available");

        const data = await response.json();

        document.getElementById("temperature").textContent = data.list[0].main.temp.toFixed(1);
        document.getElementById("description").textContent = data.list[0].weather[0].description;

        document.getElementById("todayTemp").textContent = data.list[0].main.temp.toFixed(1);
        document.getElementById("wednesdayTemp").textContent = data.list[8].main.temp.toFixed(1);
        document.getElementById("thursdayTemp").textContent = data.list[16].main.temp.toFixed(1);
    } catch (error) {
        console.error("Error fetching weather:", error);
        document.querySelector("weather").innerHTML = "<p>Weather data unavailable.</p>";    
    }
    
}

document.addEventListener("DOMContentLoaded", fetchWeather);


document.addEventListener("DOMContentLoaded", () => {
    loadSpotlights();
});

async function fetchSpotlights() {
    try {
        const response = await fetch("data/members.json"); 
        if (!response.ok) throw new Error("Failed to fetch spotlights");

        const data = await response.json();
        displaySpotlights(data.members);
    } catch (error) {
        console.error("Error loading spotlights:", error);
    }
}

function displaySpotlights(members) {
    const container = document.querySelector(".spot-container");
    container.innerHTML = ""; 

    const spotlightMembers = members.filter(member => 
        member.membership === "Gold" || member.membership === "Silver"
    );

    const selected = spotlightMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

    selected.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("spotlight-card");

        card.innerHTML = `
            <h3>${member.name}</h3>
            <p>${member.tagline}</p>
            <img src="${member.image}" alt="${member.name}" loading="lazy">
            <p><strong>Email:</strong> <a href="mailto:${member.email}">${member.email}</a></p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
        `;

        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", fetchSpotlights);
