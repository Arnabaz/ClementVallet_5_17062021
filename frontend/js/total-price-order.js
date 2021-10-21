/* CART PAGE & ORDER PAGE - Total price order displaying

Fonction qui permettra d'afficher le prix total de la commande sur les pages cart.html et order.html
Calcul du prix total de la commande :
Total = produit * qté
 */

let customCartData = JSON.parse(localStorage.getItem("customCart"));
let totalPrice = 0;
let totalPriceProduct = 0;
let totalPriceElement = document.getElementById("total-price");
function totalPriceOrder () {
    if (customCartData == null) {

    } else {
    for (let i = 0; i < customCartData.length; i++) {
        totalPriceProduct = customCartData[i].price * customCartData[i].quantity;
        totalPrice = totalPrice + totalPriceProduct;
    }
    totalPrice = parseInt(totalPrice, 10) / 100;
    totalPrice = totalPrice.toFixed(2);
    totalPrice = totalPrice.replace('.', ',');
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
    totalPriceElement.innerText = totalPrice + "€";
    }
}
totalPriceOrder();