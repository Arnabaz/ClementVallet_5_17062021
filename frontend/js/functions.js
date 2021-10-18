// --- Déclaration variables ---
const url = "http://localhost:3000/api/furniture/";

// --- Déclaration des classes ---

/*
class CustomCart {
    constructor(id, name, price, quantity, varnish) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.varnish = varnish;
    }
}

*/
// --- Déclaration des fonctions ---




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

// Fonction de formattage du prix :
formatPrice = function (price) {
    let productPrice = parseInt(price, 10) / 100;
    productPrice = productPrice.toFixed(2);
    productPrice = productPrice.replace('.', ',');
    return productPrice;
};