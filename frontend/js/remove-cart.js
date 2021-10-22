/* Suppression du panier client lorsqu'on appuie sur "Vider le panier" de la page panier --- */


// --- Déclaration des variables ---
// Remarque : La variable removeCartElement est déjà déclarée dans cart-display.js

// --- Déclaration de fonctions ---
// Fonction de suppression/vidage du panier client
function removeCart () {
    // Gestion du clic "Vider le panier"
    removeCartElement.addEventListener("click", () => {
        // Message de confirmation de suppression du panier client
        if (confirm("Voulez-vous vraiment supprimer votre panier ?")) {
            // Suppression de tout le localStorage
            localStorage.clear();
            // Refresh de la page panier
            location.reload();
        }
    });
}
removeCart();