// --- Déclaration variables ---
const url = "http://localhost:3000/api/furniture/";
const cart = JSON.parse(localStorage.getItem("customCart")) || [];

// --- Déclaration des classes ---
class CustomProduct {
    constructor(id, name, description, price, varnish, quantity, imgURL, totalPrice) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.varnish = varnish;
        this.quantity = quantity;
        this.imgURL = imgURL;
        this.totalPrice = totalPrice;
    }
}

// --- Déclaration des fonctions ---
// Price formatting :
function formatPrice (price) {
    let productPrice = parseInt(price, 10) / 100;
    productPrice = productPrice.toFixed(2);
    productPrice = productPrice.replace('.', ',');
    return productPrice;
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

