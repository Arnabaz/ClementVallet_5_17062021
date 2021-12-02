/* --- CART-DISPLAY.JS --- */
/*
    1. Affichage des différents éléments du panier client dans la section panier de la page panier:
    - Chaque ligne de produit contenu dans le panier client
    - Lien pour supprimer tout le contenu du panier client
    2. Gestion des évènements :
    - Suppression d'une ligne de produit
    - Suppression de tout le panier client
    - Personnalisation de la quantité d'un produit

*/

// --- Déclaration des variables ---
let cartSectionElement = document.querySelector(".cart-section"); // Variable pour viser la section panier
let removeCartElement; // Variable pour viser l'élément pour vider le panier
let removeProductElement; // Variable pour viser l'icone de supression de produit du panier
let cartSectionHeaderElement = document.querySelector(".cart-section header") // Variable pour viser le formulaire de la section panier
const emptyCartElement = document.querySelector(".cart-section__empty-cart"); // Variable pour viser l'élément de panier vide
const cartTableElement = document.querySelector(".cart-section__table"); // Variable pour viser le tableau des produits
let productList = document.getElementById("products-list"); // Variable pour viser la liste des produits du panier
let productLineElement = document.querySelector(".cart-section__product-line"); // Variable pour viser les lignes de produits du panier
const cartSectionButton = document.querySelector(".cart-section__button"); // Variable pour viser le bouton de validation du panier
const cartSectionLinkReturn = document.querySelector(".cart-section__link-return"); // Variable pour viser le lien pour continuer ses achats
const formSectionElement = document.querySelector(".form-section"); // Variable pour viser la section formulaire de commande
let productTotalPriceCart = 0;
let totalPriceCart = 0;
let productFeature = {};
const cartValidatorElement = document.querySelector(".cart-section__button"); // Variable pour viser le bouton de validation du panier


// --- Déclaration de fonctions
// Fonction de mise à jour de la quantité de produit du panier client
function updateProductQuantity(event, idProduct, newProductQuantity) {
    let quantityValue = parseInt(newProductQuantity, 10);
    if (Number.isInteger(quantityValue) === false || quantityValue < 1 || quantityValue > 10) {
        if (!cartSectionElement.contains(document.querySelector(".cart-section__alert"))) {
            alertDisplay(".cart-section__remove-cart", "cart-section__alert", "Vous devez choisir une quantité comprise entre 1 et 10");
        }
        event.target.value = "1";
        console.error("La valeur de la quantité de produit entrée par l'utilisateur n'est pas valable")
    } else {
        cart[idProduct].quantity = quantityValue;
        // Modifier la quantité dans le localStorage
        localStorage.setItem("customCart", JSON.stringify(cart));
        // Changer le prix de l'article
        location.reload()
    }
}

// Fonction de suppression d'un article dans le panier client
function removeProduct(indexProduct) {
    // S'assurer que l'index soit bien un nombre entier
    if (isNaN(indexProduct)) {
        // S'il n'y a pas de message d'alerte :
        if (!cartSectionElement.contains(document.querySelector(".cart-section__alert"))) {
            // Afficher une erreur dans la console + message d'erreur pour l'utilisateur
            console.error("Une erreur s'est produite lors de la suppression du produit");
            alertDisplay(".cart-section__remove-cart", "cart-section__alert", "Le produit n'a pas été supprimé du panier, veuillez réessayer s'il vous plait.");
        } else location.reload()
    } else {
        //Supression de l'article dans le panier et le localStorage ET réindexation du tableau
        delete cart.splice(indexProduct, 1);
        localStorage.setItem("customCart", JSON.stringify(cart));
        // Refresh de la page pour actualiser le panier
        location.reload();
    }
}

// Fonction de calcul du prix total d'un produit
function totalProductPriceCalcul(number, productPrice, productQuantity) {
    return productTotalPriceCart = productPrice * productQuantity;
}

// Fonction de calcul du prix total de tout le panier
function totalPriceCalcul(productTotalPrice) {
    totalPriceCart = totalPriceCart + productTotalPrice;
    return totalPriceCart;
}

// Fonction de calcul du prix total de l'article dans le panier client
async function getProductFeature(idProduct) {
    return fetch("http://localhost:3000/api/furniture/" + idProduct)
        .then((answer) => answer.json())
        .then((answer) => {
            productFeature = {
                price: answer.price,
                name: answer.name
            }
        })
        .catch((error) => (console.error(error)))
}

// Affichage du tableau de produit et ses composantes :
// 1. Affichage du tableau des articles présents dans le panier du client
async function cartDisplaying() { // Pas une vraie fonction mais utile pour faire de l'asynchrone (pour attendre que l'affichage des éléments soit terminé)
    for (let i = 0; i < cart.length; i++) {
        idProduct = cart[i].id;
        // Récupération du prix du produit avec appel à l'API avec la fonction setPriceProductCart
        await getProductFeature(idProduct);
        // Calcul du prix total de l'article
        totalProductPriceCalcul(i, productFeature.price, cart[i].quantity)
        // Calcul du prix total du panier
        totalPriceCalcul(productTotalPriceCart);
        // Affichage de l'article dans le panier client
        productList.innerHTML += `
    <tr class="cart-section__product-line">
    <td><i class="fa fa-times cart-section__remove-product" title="Retirer le produit" data-index="${i}" ></i></td>
    <td class="cart-section__product-name">
        ${productFeature.name}
    <em>${cart[i].varnish}</em>
    </td>
    <td>
        <label for="quantity-choice" data-index="${i}"></label>
            <input type="number" id="quantity-choice" min="1" max="10" autocomplete="off" name="cart-form" data-index="${i}" value="${cart[i].quantity}"/>
        </td>
        <td class="cart-section__product-price">${formatPrice(productTotalPriceCart)} €</td>
    </tr>`;
        removeProductElement = document.querySelector(".cart-section__remove-product.fa-times");
        productLineElement = document.querySelector(".cart-section__product-line");
    }
    // 2. Affichage de la ligne de prix total du panier de commande du client
    productList.innerHTML += `<tr class="cart-section__total-line">
        <td></td>
        <td></td>
        <td>TOTAL</td>
        <td id="total-price"></td>
   </tr>`;
    // Affichage du prix total
    let totalPriceElement = document.getElementById("total-price");
    totalPriceElement.innerText = formatPrice(totalPriceCart) + "€";

    // 3. Affichage du lien pour supprimer le panier client
    cartSectionHeaderElement.outerHTML += `
    <p class="cart-section__remove-cart">Vider le panier</p>
    `
}

// PAGE PANIER - Section Panier Client
// Gestion de tous les affichages de la section du panier client
// Si le panier est vide :
if (cart.length < 1) {
    emptyCartElement.classList.remove("d-none"); // Faire apparaitre l'élement pour indiquer que le panier est vide
    cartSectionLinkReturn.classList.remove("d-none"); // Faire apparaitre le lien pour revenir à l'accueil avec une classe
    cartSectionLinkReturn.classList.add("cart-section__empty-cart-link") // Ajouter une classe au lien de retour vers l'accueil
    cartSectionLinkReturn.textContent = "Remplissez votre panier d'abord !"; // Ajouter le texte au message
    cartTableElement.classList.add("d-none"); // Masquer le panier client
    formSectionElement.classList.add("d-none"); // Masquer le formulaire de commande
    cartSectionButton.classList.add("d-none"); // Masquer le bouton de validation du panier

// Si le panier est rempli avec au moins 1 produit :
} else {
    emptyCartElement.classList.add("d-none"); // Masquer l'élément qui indique que le panier est vide
    cartTableElement.classList.remove("d-none"); // Faire apparaitre le panier client
    formSectionElement.classList.remove("d-none"); // Faire apparaitre le formulaire de commande
    cartDisplaying() // Fonction asynchrone qui affiche le panier client et ses composantes
        .then(() => {
            //Déclaration des nouvelles variables (suite à affichage des éléments)
            let inputQuantityChoiceElements = document.querySelectorAll("#quantity-choice");
            productList = document.getElementById("products-list");
            productLineElement = document.querySelector(".cart-section__product-line");
            removeProductElement = document.querySelectorAll(".cart-section__remove-product.fa-times");
            removeCartElement = document.querySelector(".cart-section__remove-cart");

            // Gestion de la  la personnalisation de la quantité de produit :
            inputQuantityChoiceElements.forEach((inputQuantityChoiceElement) => {
                inputQuantityChoiceElement.addEventListener("change", (e) => {
                    // Récupérer l'id de l'élément de supression du panier (qui contient l'index objet dans le tableau cart)
                    let indexProduct = e.target.getAttribute("data-index");
                    // Supprimer le texte inutile de l'id pour n'avoir que l'index
                    indexProduct = parseInt(indexProduct, 10);
                    let NewQuantityValue = e.target.value;
                    updateProductQuantity(e, indexProduct, NewQuantityValue);
                })
            })
            // Gestion de la suppression d'un produit du panier client :
            if (productList.contains(productLineElement)) {
                removeProductElement.forEach((removeElementIndex) => {
                    removeElementIndex.addEventListener("click", (e) => {
                        if (confirm("Voulez-vous vraiment supprimer cet article de votre panier ?")) {
                            // Récupérer l'index du produit à supprimer dans le panier
                            let indexProduct = e.target.getAttribute("data-index");
                            removeProduct(indexProduct);
                        }
                    })
                })
            }
            // Gestion de la suppression de tout le panier client :
            removeCartElement.addEventListener("click", () => {
                // Message de confirmation de suppression du panier client
                if (confirm("Voulez-vous vraiment supprimer votre panier ?")) {
                    // Suppression de tout le localStorage
                    localStorage.clear();
                    // Refresh de la page panier
                    location.reload();
                } else {
                    console.error("Une erreur est survenue lors de la suppression du panier client");
                    alertDisplay(".cart-section__remove-cart", "cart-section__alert", "Une erreur s'est produite lors de la suppression du panier client, veuillez réessayer s'il vous plait.");
                }
            })
        })
        .catch((error) => console.error(error))
}

// Gestion de la validation du panier par le client avec l'affichage du formulaire de commande :
cartValidatorElement.addEventListener("click", (e) => {
    e.preventDefault();
    orderFormElement.classList.remove("d-none");
    cartValidatorElement.classList.replace("cart-section__button", "cart-section__inactivated-button")
})