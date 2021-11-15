/*

    Sur toutes les pages du site - Affichage/Masquage du menu déroulant

 */

// --- Déclaration de fonctions ---
// Fonction qui gère le menu-toggle
function menuToggle() {
    const menuBarsElement = document.querySelector(".bars-button");
    const menuElement = document.querySelector(".menu-navbar");
    const menuProductsElement = document.querySelector(".menu-item__products");
    menuBarsElement.addEventListener("click", () => {
        if (menuElement.classList.contains("folded")) {
            menuElement.classList.replace("folded", "unfolded");
        } else {
            menuElement.classList.replace("unfolded", "folded");
        }
    });
    menuProductsElement.addEventListener("click", () => {
        menuElement.classList.replace("unfolded", "folded");
    });
}

menuToggle();
