// Example announcements - you can modify these or add more
const announcements = [
    {
        date: "2024-03-20",
        title: "Projektstart",
        content: "Mein Bachelorprojekt beginnt bald!",
    },
    {
        date: "2024-03-15",
        title: "Website Online",
        content: "Die Website ist jetzt live!",
    },
];

// Function to display announcements
function displayAnnouncements() {
    const announcementsContainer = document.getElementById("announcements");

    announcements.forEach((announcement) => {
        const announcementElement = document.createElement("div");
        announcementElement.className = "announcement";
        announcementElement.innerHTML = `
            <h4>${announcement.title}</h4>
            <p>${announcement.content}</p>
            <small>${new Date(announcement.date).toLocaleDateString(
                "de-DE"
            )}</small>
        `;
        announcementsContainer.appendChild(announcementElement);
    });
}

// Initialize when the page loads
document.addEventListener("DOMContentLoaded", displayAnnouncements);
