document.addEventListener("DOMContentLoaded", function () {
    // Retrieve URL parameters
    const params = new URLSearchParams(window.location.search);
    
    // Extract values
    const firstName = params.get("first") || "Not provided";
    const lastName = params.get("last") || "Not provided";
    const email = params.get("email") || "Not provided";
    const phone = params.get("phone") || "Not provided";
    const businessName = params.get("Business name") || "Not provided";
    const timestamp = params.get("timestamp") || "Not recorded";

    console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        console.log("Email:", email);
        console.log("Phone:", phone);
        console.log("Business Name:", businessName);
        console.log("Timestamp:", timestamp);
    
    // Display form details
    const formDetails = document.querySelector("#form-details");
    formDetails.innerHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Cell Phone:</strong> ${phone}</p>
        <p><strong>Business Name:</strong> ${businessName}</p>
        <p><strong>Submission Time:</strong> ${timestamp}</p>
    `;
    
    // Update footer year
    document.getElementById("year").textContent = new Date().getFullYear();
});
