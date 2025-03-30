document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
});

document.addEventListener("DOMContentLoaded", function () {
    // Retrieve URL parameters
    const jioninfo = new URLSearchParams(window.location.search);
    console.log(jioninfo);
    
    // Extract values
    jioninfo.get("first") || "Not provided";
    jioninfo.get("last") || "Not provided";
    jioninfo.get("email") || "Not provided";
    jioninfo.get("phone") || "Not provided";
    jioninfo.get("Business name") || "Not provided";
    jioninfo.get("timestamp") || "Not recorded";
    
    // Display form details
    document.getElementById("details").innerHTML = `
    <p><strong>First Name:</strong> ${jioninfo.get("first")}</p>
    <p><strong>Last Name:</strong> ${jioninfo.get("last")}</p>
    <p><strong>Email:</strong> ${jioninfo.get("email")}</p>
    <p><strong>Cell Phone:</strong> ${jioninfo.get("phone")}</p>
    <p><strong>Business Name:</strong> ${jioninfo.get("Organisation")}</p>
    <p><strong>Submission Time:</strong> ${jioninfo.get("timestamp")}</p>
    `

    const timestampField = document.getElementById("timestamp");
    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }

    
});
