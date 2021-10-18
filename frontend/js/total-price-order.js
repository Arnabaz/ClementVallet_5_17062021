/*
Fonction qui permettra d'afficher le prix total de la commande sur les pages cart.html et order.html
Calcul du prix total de la commande :
Total = produit * qté
 */
let customCart = JSON.parse(localStorage.getItem("customCart"));
let totalPrice;
let totalPriceElement = document.getElementById("total-price");
totalPriceOrder = function () {
    totalPrice = customCart.price * customCart.quantity;
    totalPrice = parseInt(totalPrice, 10) / 100;
    totalPrice = totalPrice.toFixed(2);
    totalPrice = totalPrice.replace('.', ',');
    localStorage.totalPrice = JSON.stringify(totalPrice);
    totalPriceElement.innerText = totalPrice + "€";
}
totalPriceOrder();
