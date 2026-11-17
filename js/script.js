
/* =============================================
   NAMANGA RIVER FOOTBALL CLUB
   COMPLETE WEBSITE JAVASCRIPT
============================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       1. MOBILE NAVIGATION
    ========================================= */

    const menuToggle = document.getElementById("menu-toggle");

    const navigation =
        document.getElementById("nav") ||
        document.querySelector(".main-nav");

    function refreshIcons() {
        if (window.lucide && typeof window.lucide.createIcons === "function") {
            window.lucide.createIcons();
        }
    }

    function updateMenuIcon(isOpen) {

        if (!menuToggle) return;

        menuToggle.innerHTML = isOpen
            ? '<i data-lucide="x"></i>'
            : '<i data-lucide="menu"></i>';

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        refreshIcons();
    }

    function openNavigation() {

        if (!navigation || !menuToggle) return;

        navigation.classList.add("show");

        updateMenuIcon(true);
    }

    function closeNavigation() {

        if (!navigation || !menuToggle) return;

        navigation.classList.remove("show");

        updateMenuIcon(false);
    }

    function toggleNavigation() {

        if (!navigation || !menuToggle) return;

        const isOpen = navigation.classList.contains("show");

        if (isOpen) {
            closeNavigation();
        } else {
            openNavigation();
        }
    }

    if (menuToggle && navigation) {

        menuToggle.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            toggleNavigation();

        });

    }

    /* =========================================
       2. DROPDOWN MENUS
    ========================================= */

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
            event.stopPropagation();

            const isOpen = dropdown.classList.contains("open");

            closeDropdowns();

            if (!isOpen) {

                dropdown.classList.add("open");

                button.setAttribute("aria-expanded", "true");

            }

        });

    });

    /* =========================================
       3. CLOSE MENU AFTER CLICKING A LINK
    ========================================= */

    if (navigation) {

        navigation.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                closeNavigation();
                closeDropdowns();

            });

        });

    }

    /* =========================================
       4. CLOSE MENU WHEN CLICKING OUTSIDE
    ========================================= */

    document.addEventListener("click", function (event) {

        const clickedInsideNavigation =
            navigation && navigation.contains(event.target);

        const clickedMenuButton =
            menuToggle && menuToggle.contains(event.target);

        if (!clickedInsideNavigation && !clickedMenuButton) {

            closeNavigation();

        }

        if (!event.target.closest(".nav-dropdown")) {

            closeDropdowns();

        }

    });

    /* =========================================
       5. KEYBOARD ACCESSIBILITY
    ========================================= */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            closeNavigation();
            closeDropdowns();

            if (menuToggle) {
                menuToggle.focus();
            }

        }

    });

    /* =========================================
       6. RESET MENU ON DESKTOP
    ========================================= */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 767) {

            closeNavigation();
            closeDropdowns();

        }

    });

    /* =========================================
       7. AUTOMATIC COPYRIGHT YEAR
    ========================================= */

    const yearElement = document.getElementById("year");

    if (yearElement) {

        yearElement.textContent = new Date().getFullYear();

    }

    /* =========================================
       8. INITIALISE LUCIDE ICONS
    ========================================= */

    refreshIcons();

    /* =========================================
       9. PREVENT EMPTY MENU BUTTON
    ========================================= */

    if (menuToggle && !menuToggle.innerHTML.trim()) {

        updateMenuIcon(false);

    }

});
