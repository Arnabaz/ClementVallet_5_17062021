/*

    Sur toutes les pages du site - Affichage/Masquage du menu déroulant

 */

// --- Déclaration de fonctions ---
// Fonction qui permet de dévoiler les items du menu de navigation
function unfoldedMenu (input) {
    input.classList.replace("folded", "unfolded");
}

// Fonction qui permet de masquer les items du menu de navigation
function foldedMenu (input) {
    input.classList.replace("unfolded", "folded");
}

// Fonction globale qui gère le menu-toggle
function menuToggle () {
const menuBarsElement = document.querySelector(".bars-button");
const menuElement = document.querySelector(".menu-navbar");
const menuProductsElement = document.querySelector(".menu-item__products");
menuBarsElement.addEventListener("click", () => {
    if (menuElement.classList.contains("folded")) {
        unfoldedMenu(menuElement);
    } else {
        foldedMenu(menuElement);
    }
});
menuProductsElement.addEventListener("click", () => {
    foldedMenu(menuElement);
});
}
menuToggle();
