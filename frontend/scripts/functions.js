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

// Fonction de vérification de l'ID d'un produit
function verifyingIdProduct(idProduct) {
    return fetch("http://localhost:3000/api/furniture/")
        .then((res) => res.json())
        .then((res) => {
            let idProducts = [];
            for (let i = 0; i < res.length; i++) {
                idProducts.push(res[i]._id);
            }
            return idProducts.includes(idProduct);
        })
        .catch((error) => {console.error("Un problème est survenu pendant l'appel à l'API lors de la vérification de l'ID produit", error)})
}



