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

// --- Déclaration de fonctions


// Fonction de suppression d'un article du panier
function removeProduct () {
    productList = document.getElementById("products-list");
    productLineElement = document.querySelector(".cart-section__product-line");
    removeProductElement = document.querySelectorAll(".cart-section__remove-product.fa-times")
    // Si la liste de produit contient au moins un article
    if (productList.contains(productLineElement)) {
        // boucle pour viser chaque élément du tableau de manière individuel
        removeProductElement.forEach((removeElementIndex) => {
            removeElementIndex.addEventListener("click", (e) => {
                // Demande une confirmation de supression de l'article du panier
                if (confirm("Voulez-vous vraiment supprimer cet article de votre panier ?")) {
                    // Récupérer l'id de l'élément de supression du panier (qui contient l'index objet dans le tableau cart)
                    let idElement = e.target.id;
                    // Supprimer le texte inutile de l'id pour n'avoir que l'index
                    let index = idElement.replace("index-table-", "");
                        index = parseInt(index, 10);
                    //Supression de l'article dans le panier et le localStorage ET réindexation du tableau
                    delete cart.splice(index, 1);
                    localStorage.setItem("customCart", JSON.stringify(cart));
                    // Refresh de la page pour actualiser le panier
                    location.reload();
                }
            })
        })
    }
}

// Fonctions affichage du tableau de produit
// Affichage du tableau des articles présents dans le panier du client
function cartDisplaying (number) {
    productList.innerHTML +=`
    <tr class="cart-section__product-line">
    <td><i class="fa fa-times cart-section__remove-product" aria-hidden="true" title="Retirer le produit" id="index-table-${[number]}"></i></td>
    <td class="cart-section__product-name">
        ${cart[number].name}
    <em>${cart[number].varnish}</em>
    </td>
    <td>
        <label for="quantity-choice-${[number]}"></label>
            <input type="number" id="quantity-choice-${[number]}" class="quantity-choice" min="1" max="10" name="cart-form" value="${cart[number].quantity}"/>
        </td>
        <td class="cart-section__product-price">${formatPrice(cart[number].price * cart[number].quantity)}€</td>
    </tr>`;
    removeProductElement = document.querySelector(".cart-section__remove-product.fa-times");
    productLineElement = document.querySelector(".cart-section__product-line");
}

// Affichage du prix total du panier
function totalPriceDisplaying () {
    productList.innerHTML += `<tr class="cart-section__total-line">
        <td></td>
        <td></td>
        <td>TOTAL</td>
        <td id="total-price"></td>
   </tr>`;
}

// Affichage du lien de supression de tout le panier
function removeCartDisplaying () {
    removeCartElement = document.createElement("p");
    removeCartElement.classList.add("cart-section__remove-cart");
    const removeCartElementContent = document.createTextNode("Vider le panier");
    removeCartElement.appendChild(removeCartElementContent);
    cartSectionElement.insertBefore(removeCartElement, cartSectionFormElement);
    removeCart();
}

// Affichage de la quantité choisie d'un article dans le panier
function quantityDisplayUpdate () {
    let inputQuantityChoiceElements = document.querySelectorAll(".quantity-choice");
    inputQuantityChoiceElements.forEach((inputQuantityChoiceElement => {
        inputQuantityChoiceElement.addEventListener("input", (e) => {
            let quantityValue = e.target.value;
            quantityValue = parseInt(quantityValue, 10);
            console.log(typeof quantityValue)
            console.log(quantityValue)
            if (Number.isInteger(quantityValue) && quantityValue > 0 && quantityValue <= 10) {
               // Récupérer l'id de l'élément de supression du panier (qui contient l'index objet dans le tableau cart)
                let idElement = e.target.id;
                // Supprimer le texte inutile de l'id pour n'avoir que l'index
                let index = idElement.replace("quantity-choice-", "")
                    index = parseInt(index, 10);
                // modifier la quantité dans cart
                cart[index].quantity = quantityValue;
                // Modifier la quantité dans le localStorage
                localStorage.setItem("customCart", JSON.stringify(cart));
                // Changer le prix de l'article
                // Changer le prix total du panier

                console.log(cart[index].quantity);


            }

        })
    }))
}




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
removeProduct();



