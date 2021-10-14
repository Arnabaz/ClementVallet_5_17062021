// Function to unfold/fold the menu navigation bar
function menuToggle () {
    // Variables
    const menuBarsElement = document.querySelector(".bars-button");
    const menuElement = document.querySelector(".menu-navbar");
    const menuProductsElement = document.querySelector(".menu-item__products");
    // Menu nav-bar toggle
    menuBarsElement.addEventListener("click", () => {
        if (menuElement.classList.contains("folded")) {
            menuElement.classList.replace("folded", "unfolded");
        } else {
            menuElement.classList.replace("unfolded", "folded");
        }
    });
    // Replier le menu après avoir cliqué sur Produits
    menuProductsElement.addEventListener("click", () => {menuElement.classList.replace("unfolded", "folded");});
}
menuToggle();
