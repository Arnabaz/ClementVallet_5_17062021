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
let idProduct;

// --- Déclaration de fonctions
// Fonctions d'affichage du tableau de produit et ses composantes
// Affichage du tableau des articles présents dans le panier du client
function cartDisplaying (number) {
    productList.innerHTML +=`
    <tr class="cart-section__product-line">
    <td><i class="fa fa-times cart-section__remove-product" aria-hidden="true" title="Retirer le produit" data-index="${number}" ></i></td>
    <td class="cart-section__product-name">
        ${cart[number].name}
    <em>${cart[number].varnish}</em>
    </td>
    <td>
        <label for="quantity-choice" data-index="${number}"></label>
            <input type="number" id="quantity-choice" min="1" max="10" name="cart-form" data-index="${number}" value="${cart[number].quantity}"/>
        </td>
        <td class="cart-section__product-price">${formatPrice(cart[number].price * cart[number].quantity)}€</td>
    </tr>`;
    removeProductElement = document.querySelector(".cart-section__remove-product.fa-times");
    productLineElement = document.querySelector(".cart-section__product-line");
}

// Fonction d'affichage du prix total du panier
function totalPriceDisplaying () {
    productList.innerHTML += `<tr class="cart-section__total-line">
        <td></td>
        <td></td>
        <td>TOTAL</td>
        <td id="total-price"></td>
   </tr>`;
}

// Fonction d'affichage du lien de supression de tout le panier
function removeCartDisplaying () {
    removeCartElement = document.createElement("p");
    removeCartElement.classList.add("cart-section__remove-cart");
    const removeCartElementContent = document.createTextNode("Vider le panier");
    removeCartElement.appendChild(removeCartElementContent);
    cartSectionElement.insertBefore(removeCartElement, cartSectionFormElement);
}

// Fonction de réglage de l'affichage du prix du produit en fonction de la quantité choisie d'un article dans le panier
function setPriceProduct (number) {
    idProduct = cart[number].id;
    console.log(cart[number].price)
    // Récupérer les données de l'API
    fetch("http://localhost:3000/api/furniture/" + idProduct)
        .then((response) =>
            response.json()
        )
        .catch((e) =>
            console.log(e)
        )
        // Convertir la réponse en .json et la stocker dans la variable products
        .then((data) => {
            productData = data;
            console.log(productData)
            // Mise à jour du prix du produit
            cart[number].price = productData.price;
            // Calcul du prix total de l'article
            cart[number].totalPrice = cart[number].price * cart[number].quantity;
            localStorage.setItem("customCart", JSON.stringify(cart));
            // Changer le prix total du panier
            console.log(cart[number].quantity);
            // A finir avec un data-index sur la case du prix pour pouvoir la modifier en temps réel
            // ... Doit-on afficher seulement le prix unitaire ou doit-on afficher le prix total de l'article ?
            // Peut-on se contenter de rafraichir la page pour afficher le prix total de l'article ?
        })
}
// Fonction de mise à jour d'affichage de la quantité de produits dans l'article du panier
function quantityDisplayUpdate () {
    let inputQuantityChoiceElements = document.querySelectorAll("#quantity-choice");
    inputQuantityChoiceElements.forEach((inputQuantityChoiceElement => {
        inputQuantityChoiceElement.addEventListener("input", (e) => {
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
                setPriceProduct(indexProduct);
                location.reload()
            }
        })
    }))
}

// Fonction qui gère tous les affichages de la section du panier client
function cartSectionDisplaying () {
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
    for (let i = 0; i < cart.length; i++) {
        cartDisplaying(i);
    }
    totalPriceDisplaying ();
    removeCartDisplaying();
    quantityDisplayUpdate();
}
}
cartSectionDisplaying();



