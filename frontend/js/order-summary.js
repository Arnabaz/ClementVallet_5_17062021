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
    // Afficher les informations de la commande client
    orderNumberElement.textContent = `${orderData.orderId}`;
    orderPriceElement.textContent = `${formatPrice(totalPriceOrder)} €`;
    // Vider le panier et le localStorage
    localStorage.clear();
    /* window.addEventListener("keypress", (e) => {
         console.log(e.key)
         let keypress = e.key;
         if (keypress === "F5") {
         location.replace("../index.html");
         }

    })

         */

}
orderSummary();

// Fonction pour vider le panier client (remise à zéro) après avoir cliqué sur retour à l'accueil
function resetData() {
    orderHomeLink.addEventListener("click", () => {
        localStorage.clear();
    })
}
resetData();