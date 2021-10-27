/* --- Affichage des articles du panier client sur la page panier --- */
/*

la fonction permet d'afficher le panier du client.
De plus, le client peut personnaliser sa commande en personnalisant la quantité de produits qu'il souhaite ajouter au panier.
Il peut également décider de retirer un produit du panier ou bien de vider complètement son panier.
Si le panier est vide, un message lui indique et lui propose de voir les produits.

 */

// --- Déclaration des variables ---
let cartSectionElement = document.querySelector(".cart-section"); // Variable pour viser la section panier
let removeCartElement; // Variable pour viser l'élément pour vider le panier
let removeProductElement; // Variable pour viser l'icone de supression de produit du panier
let cartSectionFormElement = document.querySelector(".cart-section__form") // Variable pour viser le formulaire de la section panier
const emptyCartElement = document.querySelector(".cart-section__empty-cart"); // Variable pour viser l'élément de panier vide
const cartTableElement = document.querySelector(".cart-section__table"); // Variable pour viser le tableau des produits
let productList = document.getElementById("products-list"); // Variable pour viser la liste des produits du panier
let productLineElement = document.querySelector(".cart-section__product-line"); // Variable pour viser les lignes de produits du panier
const cartSectionButton = document.querySelector(".cart-section__button"); // Variable pour viser le bouton de validation du panier
const cartSectionLinkReturn = document.querySelector(".cart-section__link-return"); // Variable pour viser le lien pour continuer ses achats
const formSectionElement = document.querySelector(".form-section"); // Variable pour viser la section formulaire de commande
let productPrice = 0; // Variable pour stocker le prix du produit
let totalPriceCart = 0;


// --- Déclaration de fonctions
// Fonctions d'affichage du tableau de produit et ses composantes
// Affichage du tableau des articles présents dans le panier du client
async function cartDisplaying() {
    for (let i = 0; i < cart.length; i++) {
        // Récupération du prix du produit avec appel à l'API avec la fonction setPriceProductCart
        await setPriceProductCart(i);
        // Calcul du prix total de l'article
        let productTotalPriceCart = productPrice * cart[i].quantity;
        totalPriceCart = totalPriceCart + productTotalPriceCart;
        // Affichage de l'article dans le panier client
        productList.innerHTML += `
    <tr class="cart-section__product-line">
    <td><i class="fa fa-times cart-section__remove-product" aria-hidden="true" title="Retirer le produit" data-index="${i}" ></i></td>
    <td class="cart-section__product-name">
        ${cart[i].name}
    <em>${cart[i].varnish}</em>
    </td>
    <td>
        <label for="quantity-choice" data-index="${i}"></label>
            <input type="number" id="quantity-choice" min="1" max="10" name="cart-form" data-index="${i}" value="${cart[i].quantity}"/>
        </td>
        <td class="cart-section__product-price">${formatPrice(productTotalPriceCart)} €</td>
    </tr>`;
        removeProductElement = document.querySelector(".cart-section__remove-product.fa-times");
        productLineElement = document.querySelector(".cart-section__product-line");
    }
    // Affichage du total du panier de commande du client
    totalPriceDisplay();
    // Affichage du prix total
    let totalPriceElement = document.getElementById("total-price");
    totalPriceElement.innerText = formatPrice(totalPriceCart) + "€";
}

// Fonction de calcul du prix total de l'article dans le panier client
async function setPriceProductCart(number) {
    idProduct = cart[number].id;
    await getDataProductAPI(idProduct, productPrice)
        .then((answer) => (productPrice = answer.price))
        .catch((error) => (console.error(error)))
    return productPrice;
}

// Fonction d'affichage du prix total de la commande client
function totalPriceDisplay () {
    productList.innerHTML += `<tr class="cart-section__total-line">
        <td></td>
        <td></td>
        <td>TOTAL</td>
        <td id="total-price"></td>
   </tr>`;
}

// Fonction d'affichage du lien de supression de tout le panier
function removeCartDisplaying() {
    removeCartElement = document.createElement("p");
    removeCartElement.classList.add("cart-section__remove-cart");
    const removeCartElementContent = document.createTextNode("Vider le panier");
    removeCartElement.appendChild(removeCartElementContent);
    cartSectionElement.insertBefore(removeCartElement, cartSectionFormElement);
    removeCart();
}

// Fonction de mise à jour d'affichage de la quantité de produits dans l'article du panier
function quantityDisplayUpdate() {
    let inputQuantityChoiceElements = document.querySelectorAll("#quantity-choice");
    inputQuantityChoiceElements.forEach((inputQuantityChoiceElement => {
        inputQuantityChoiceElement.addEventListener("change", (e) => {
            let quantityValue = e.target.value;
            quantityValue = parseInt(quantityValue, 10);
            // Vérifier que la variable quantityValue est bien un nombre entier positif inférieur ou égal à 10
            if (Number.isInteger(quantityValue) && quantityValue > 0 && quantityValue <= 10) {
                // Récupérer l'id de l'élément de supression du panier (qui contient l'index objet dans le tableau cart)
                let indexProduct = e.target.getAttribute("data-index");
                // Supprimer le texte inutile de l'id pour n'avoir que l'index
                indexProduct = parseInt(indexProduct, 10);
                // modifier la quantité dans cart
                cart[indexProduct].quantity = quantityValue;
                // Modifier la quantité dans le localStorage
                localStorage.setItem("customCart", JSON.stringify(cart));
                // Changer le prix de l'article
                location.reload()
            } else if (quantityValue < 0 || quantityValue > 10 || (Number.isInteger(quantityValue) === false)) {
                // Afficher un message à l'utilisateur et revenir à l'ancienne valeur entrée dans l'input
                alert("La quantité de produit doit être comprise entre 1 et 10. Veuillez entrer une autre valeur s'il vous plait.");
                location.reload();
            }
        })
    }))
}

// PAGE PANIER - Section Panier Client
// Gestion de tous les affichages de la section du panier client
if (cart.length < 1) {
    emptyCartElement.classList.remove("d-none");
    cartSectionLinkReturn.classList.remove("d-none");
    cartSectionLinkReturn.classList.add("cart-section__empty-cart-link");
    cartSectionLinkReturn.textContent = "Remplissez votre panier d'abord !";
    cartTableElement.classList.add("d-none");
    formSectionElement.classList.add("d-none");
    cartSectionButton.classList.add("d-none");

} else {
    emptyCartElement.classList.add("d-none");
    cartTableElement.classList.remove("d-none");
    formSectionElement.classList.remove("d-none");
    cartDisplaying()
        .then(() => {
            removeCartDisplaying();
            quantityDisplayUpdate();
            removeProduct();
        })
        .catch((error) => console.error(error));
}



