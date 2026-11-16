
// =============================================
// NAMANGA RIVER FOOTBALL CLUB
// Main Website JavaScript
// =============================================

document.addEventListener("DOMContentLoaded", function () {

    // =========================================
    // MOBILE NAVIGATION
    // =========================================

    const menuToggle = document.getElementById("menu-toggle");
    const navigation = document.getElementById("nav");

    function updateMenuIcon(isOpen) {
        if (!menuToggle) return;

        const iconName = isOpen ? "x" : "menu";

        if (window.lucide && typeof window.lucide.createIcons === "function") {
            menuToggle.innerHTML = `<i data-lucide="${iconName}"></i>`;
            window.lucide.createIcons();
        } else {
            menuToggle.textContent = isOpen ? "×" : "☰";
        }

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );
    }

    function closeNavigation() {
        if (!menuToggle || !navigation) return;

        navigation.classList.remove("show");
        menuToggle.setAttribute("aria-expanded", "false");
        updateMenuIcon(false);
    }

    if (menuToggle && navigation) {

        menuToggle.addEventListener("click", function () {

            const isOpen = navigation.classList.contains("show");

            navigation.classList.toggle("show", !isOpen);

            menuToggle.setAttribute("aria-expanded", String(!isOpen));

            updateMenuIcon(!isOpen);
        });

    }

    // =========================================
    // DROPDOWN NAVIGATION
    // =========================================

    const dropdowns = document.querySelectorAll(".nav-dropdown");

    function closeDropdowns() {
        dropdowns.forEach(function (dropdown) {
            dropdown.classList.remove("open");

            const button = dropdown.querySelector(".dropdown-toggle");

            if (button) {
                button.setAttribute("aria-expanded", "false");
            }
        });
    }

    dropdowns.forEach(function (dropdown) {

        const button = dropdown.querySelector(".dropdown-toggle");

        if (!button) return;

        button.setAttribute("aria-expanded", "false");

        button.addEventListener("click", function (event) {

            event.preventDefault();

            const isOpen = dropdown.classList.contains("open");

            closeDropdowns();

            if (!isOpen) {
                dropdown.classList.add("open");
                button.setAttribute("aria-expanded", "true");
            }

        });

    });

    // =========================================
    // CLOSE MENU AFTER SELECTING A PAGE
    // =========================================

    if (navigation) {

        const navigationLinks = navigation.querySelectorAll("a");

        navigationLinks.forEach(function (link) {

            link.addEventListener("click", function () {
                closeNavigation();
                closeDropdowns();
            });

        });

    }

    // =========================================
    // CLOSE DROPDOWNS WHEN CLICKING OUTSIDE
    // =========================================

    document.addEventListener("click", function (event) {

        if (!event.target.closest(".nav-dropdown")) {
            closeDropdowns();
        }

        if (
            navigation &&
            menuToggle &&
            !navigation.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {
            closeNavigation();
        }

    });

    // =========================================
    // KEYBOARD ACCESSIBILITY
    // =========================================

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            closeNavigation();
            closeDropdowns();

            if (menuToggle) {
                menuToggle.focus();
            }

        }

    });

    // =========================================
    // RESET MOBILE MENU ON DESKTOP
    // =========================================

    window.addEventListener("resize", function () {

        if (window.innerWidth > 767) {
            closeNavigation();
            closeDropdowns();
        }

    });

    // =========================================
    // AUTOMATIC COPYRIGHT YEAR
    // =========================================

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // =========================================
    // INITIALISE LUCIDE ICONS
    // =========================================

    if (window.lucide && typeof window.lucide.createIcons === "function") {
        window.lucide.createIcons();
    }

});
