/* --- Affichage du récapitulatif de commande comprenant le n° de commande envoyé par l'API et le prix total de la commande sur la page order --- */
// --- Déclaration des variables ---
const orderData = JSON.parse(localStorage.getItem("order"));
const totalPriceOrder = JSON.parse(localStorage.getItem("totalPrice"));
let orderNumberElement = document.querySelector(".order-section__order-number strong"); // Variable pour viser l'élément du numéro de commande
let orderPriceElement = document.querySelector(".order-section__order-price strong"); // Variable pour viser l'élément du prix de la commande

// --- Déclaration de fonction ---
// Fonction d'affichage du récapitulatif de la commande
function orderSummary() {
    if (orderData == null) {
        document.location.href = "../index.html";
    } else {
        // Afficher les informations de la commande client
        orderNumberElement.textContent = `${orderData.orderId}`;
        orderPriceElement.textContent = `${formatPrice(totalPriceOrder)} €`;
        // Vider le panier et le localStorage
        localStorage.clear();
    }
}
orderSummary();