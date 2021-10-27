// --- Déclaration variables ---
let cart = JSON.parse(localStorage.getItem("customCart")) || [];

// --- Déclaration des classes ---
class CustomProduct {
    constructor(id, name, varnish, quantity, imgURL) {
        this.id = id;
        this.name = name;
        this.varnish = varnish;
        this.quantity = quantity;
        this.imgURL = imgURL;
    }
}

// --- Déclaration des fonctions ---
// Price formatting :
function formatPrice(price) {
    let productPrice = parseInt(price, 10) / 100;
    productPrice = productPrice.toFixed(2);
    productPrice = productPrice.replace('.', ',');
    return productPrice;
}

// Fonction d'appel à l'API pour tous les produits
function getDataProductsAPI (output) {
    // fetch sur l'url de l'API
    return fetch("http://localhost:3000/api/furniture/")
        // Résolution de la promesse en récupérant une réponse et la convertir en .json
        .then((res) => (res.json()))
        // Stocker la réponse dans une variable "output" qui sera définie en paramètre de la fonction
        .then((productData) => (output = productData))
        // Rejet de la promesse et renvoi de l'erreur dans la console
        .catch((error) => console.error(error));
}

// Fonction d'appel à l'API pour un seul produit
function getDataProductAPI (id, outputData) {
    return fetch("http://localhost:3000/api/furniture/" + id)
        .then((response) => (response.json()))
        .then((productData) => (outputData = productData))
        .catch((error) => console.error(error));
}

/* AFFICHER LES PRODUITS A VENDRE
Interroger l'API sur http://localhost:3000/api/furniture
Récupérer les données de l'API avec fetch()
Extraire les données de l'API

Objet Produits : products --> Pour stocker toutes les données envoyées par l'API :
description
imageUrl
name
price
varnish :[]
_id
*/

/* Nom des variables
Nombre de produits : productNumber  --> products.length
Description : productDescription    --> products.description
Image : productImageURL             --> products.imageURL
Nom : productName                   --> products.name
Prix : productPrice                 --> products.price
Choix couleur : productColorChoice  --> products.varnish
nombre de couleur                   --> products.varnish.length
*/

