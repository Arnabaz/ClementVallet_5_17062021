/* --- Ajout du produit dans le panier du client lorsque celui-ci appuie sur le bouton "Ajouter au panier" de la page produit ---

Fonction qui permet de faire rentrer le produit sélectionné et personnalisé dans l'objet Panier
L'objet Panier sera réutilisé dans la page Cart pour afficher le panier de commande du client

 */

// Utiliser l'id du produit pour communiquer avec l'API les infos utiles (prix surtout)
// Récupérer le prix du produit et le stocker dans l'objet Panier (stocké dans le localStorage)

// --- Déclaration des variables ---
let productSectionElement = document.querySelector(".product-section"); // Variable pour viser product-section
let addToCartButtonElement = document.querySelector(".product-page__add-to-cart"); // variable pour viser le bouton Ajouter au panier
let newAlertPElement; // Variable qui sert à viser l'élément d'alerte pour les vernis
let figcaptionProductPage;// Variable pour viser figcaption
let varnishCustomSelect = document.getElementById("varnish-choice"); // Variable pour viser le select du formulaire
let alertVarnish;


// --- Déclaration de fonction ---
// Fonction de supression du message d'alerte (manque sélection vernis) suite à l'utilisation du bouton Ajouter au panier
function removeAlertElement(alertElementQS, parentElementQS) {
    figcaptionProductPage = document.querySelector(parentElementQS);
    newAlertPElement = document.querySelector(alertElementQS);
    if (figcaptionProductPage.contains(newAlertPElement)) {
        figcaptionProductPage.removeChild(newAlertPElement);
    }
}

// Fonction de création du message qui apparait suite à l'utilisation du bouton Ajouter au panier
function displayAddCartMessage() {
    productSectionElement.innerHTML += `<div class="product-page__success">
<p class="product-page__success-message">Le produit a bien été ajouté au panier</p>
<a class="product-page__success-link product-link" href="../index.html#products-section">< Continuer mes achats</a>
<a class="product-page__success-link cart-link" href="./cart.html">Voir mon panier ></a>
</div>`;
}

// Fonction d'ajout du produit sélectionné dans le panier du client
function addProductToCart() {
    figcaptionProductPage = document.querySelector("figcaption");
    newAlertPElement = document.querySelector(".product-page__alert")
    varnishCustomSelect = document.getElementById("varnish-choice");
    // Vérification que le vernis a bien été choisi par le client :
    if (varnishCustomSelect.value === "") {
        if (figcaptionProductPage.contains(newAlertPElement) === false) {
            // Si l'utilisateur n'a pas sélectionné de vernis et s'il n'y a pas dèjà de message d'alerte alors afficher un message d'alerte
        alertDisplay(alertVarnish, "product-page__alert", "Vous devez choisir un vernis avant d'ajouter le produit au panier", "product-page__form", "figcaption");
    }} else {
        // Sinon ajouter le produit au panier dans le localStorage (création de l'objet customProduct pour l'ajouter au panier du localStorage)
        let objectCustomProduct = new CustomProduct(
            product._id,
            varnishCustomSelect.value,
            1,
        );
        // Vérification de la présence ou non du produit dans le panier
        let isProductAlreadyPresent = false;
        let indexModificator;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].varnish === varnishCustomSelect.value) {
                isProductAlreadyPresent = true;
                indexModificator = i;
            }
        }
        // Si le produit est déjà présent, incrémente seulement la quantité du produit de 1
        if (isProductAlreadyPresent) {
            cart[indexModificator].quantity = +cart[indexModificator].quantity + +objectCustomProduct.quantity;
            localStorage.setItem("customCart", JSON.stringify(cart));
            // Sinon s'il est absent du panier, ajoute-le dans le locaStorage
        } else {
            // Sinon ajouter le produit au panier
            cart.push(objectCustomProduct);
            localStorage.setItem("customCart", JSON.stringify(cart))
        }
        // Evènements suite à l'ajout du produit au panier :
        // Suppression du bouton Ajouter au panier suite à l'ajout d'un produit au panier
        productSectionElement.removeChild(addToCartButtonElement);
        // Supression du message d'alerte (s'il existe)
        removeAlertElement(".product-page__alert", "figcaption");
        // Création du message qui apparait suite à l'utilisation du bouton Ajouter au panier
        displayAddCartMessage();
    }
}









