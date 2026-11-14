
// =================================
// NAMANGA RIVER FOOTBALL CLUB
// Main JavaScript
// =================================

document.addEventListener("DOMContentLoaded", function () {

    // MOBILE NAVIGATION
    const menuToggle = document.getElementById("menu-toggle");
    const navigation = document.getElementById("nav");

    if (menuToggle && navigation) {
        menuToggle.addEventListener("click", function () {

            navigation.classList.toggle("show");

            const isOpen = navigation.classList.contains("show");

            menuToggle.setAttribute("aria-expanded", isOpen);

            menuToggle.innerHTML = isOpen ? "&times;" : "☰";
        });
    }

    // AUTOMATIC COPYRIGHT YEAR
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});
