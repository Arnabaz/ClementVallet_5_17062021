// --- Déclaration variables ---
let cart = JSON.parse(localStorage.getItem("customCart")) || [];

// --- Déclaration des fonctions ---
// Price formatting :
function formatPrice(price) {
    if (Number.isInteger(price) === false || isNaN(price)) {
        console.error("La variable indiquée en paramètre dans formatPrice() n'est pas un nombre");
    } else {
        let productPrice = parseInt(price, 10) / 100;
        productPrice = productPrice.toFixed(2);
        productPrice = productPrice.replace('.', ',');
        return productPrice;
    }
}

// Fonction de création et d'affichage d'une alerte pour l'utilisateur
function alertDisplay(referentElementQS, className, textAlert) {
    let alertNameElement = document.querySelector(referentElementQS);
    alertNameElement.outerHTML += `
    <p class=${className}>${textAlert}</p>
`;
}