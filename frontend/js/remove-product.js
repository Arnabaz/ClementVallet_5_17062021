/* Suppression d'un article du panier client lorsqu'on appuie sur la petite croix rouge avant le nom du produit sur la page panier --- */


// --- Déclaration des variables ---
// Remarque : Les variables de la fonction removeProduct sont déjà déclarées dans cart-display.js

// --- Déclaration de fonctions ---
// Fonction de suppression d'un article dans le panier client
function removeProduct () {
    productList = document.getElementById("products-list");
    productLineElement = document.querySelector(".cart-section__product-line");
    removeProductElement = document.querySelectorAll(".cart-section__remove-product.fa-times")
    if (productList.contains(productLineElement)) {
        removeProductElement.forEach((removeElementIndex) => {
            removeElementIndex.addEventListener("click", (e) => {
                if (confirm("Voulez-vous vraiment supprimer cet article de votre panier ?")) {
                    // Récupérer l'index du produit à supprimer dans le panier
                    let indexProduct = e.target.getAttribute("data-index");
                    // S'assurer que l'index soit bien un nombre entier
                    indexProduct = parseInt(indexProduct, 10);
                    //Supression de l'article dans le panier et le localStorage ET réindexation du tableau
                    delete cart.splice(indexProduct, 1);
                    localStorage.setItem("customCart", JSON.stringify(cart));
                    // Refresh de la page pour actualiser le panier
                    location.reload();
                }
            })
    })
    }
}
removeProduct();
