/* --- Affichage du récapitulatif de commande comprenant le n° de commande envoyé par l'API et le prix total de la commande sur la page order --- */

// Déclaration des variables
const orderData = JSON.parse(localStorage.getItem("order"));
const totalPriceOrder = JSON.parse(localStorage.getItem("totalPrice"));

let orderNumberElement = document.querySelector(".order-section__order-number strong"); // Variable pour viser l'élément du numéro de commande
let orderPriceElement = document.querySelector(".order-section__order-price strong"); // Variable pour viser l'élément du prix de la commande
let orderHomeLink = document.querySelector(".order-section__return-button"); // Variable pour viser l'élément Retour à l'accueil


// Déclaration de fonction
// Fonction d'affichage du récapitulatif de la commande
function orderSummary() {
    console.log("1", orderData)
    console.log("2", totalPriceOrder)
    console.log("3", orderNumberElement)
    console.log("4", orderPriceElement)
    console.log("5", orderData.orderId)
    // Afficher les informations de la commande client
    orderNumberElement.textContent = `${orderData.orderId}`;
    orderPriceElement.textContent = `${formatPrice(totalPriceOrder)} €`;
    // Vider le panier et le localStorage
    localStorage.clear();
}

orderSummary();

// Fonction pour vider le panier client (remise à zéro) après avoir cliqué sur retour à l'accueil
function resetData() {
    orderHomeLink.addEventListener("click", () => {
        localStorage.clear();
    })
}
resetData();
