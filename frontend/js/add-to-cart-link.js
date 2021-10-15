/*
Fonction qui permet de rentrer l'id du produit sélectionné dans l'URL
 */

setAddToCartLink = function () {
let params = new URLSearchParams(document.location.search);
let idProduct = params.get("id");
const addToCartLink = document.querySelector(".product-page__add-to-cart");
addToCartLink.setAttribute("href", "./cart.html?id=" + idProduct);
}
setAddToCartLink();