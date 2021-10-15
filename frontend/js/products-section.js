/* Fonctions pour créer la section de présentation des articles de produit
Chaque produit possède sa propre carte de présentation. Une boucle for permet de générer autant de produit que nécessaire
(autant que ce que communique l'API).
Chaque carte de présentation est organisée de cette manière en HTML :
        <article class="products-section__article products-section__article-1">
            <a href="#">
                <figure class="product-card">
                    <img class="product-card__img" src="./backend/images/oak_1.jpg" alt="Table en chêne"/>
                    <figcaption class="product-card__info">
                        <h3 class="product-card__name">Cross-table</h3>
                        <p class="product-card__price">699,00€</p>
                    </figcaption>
                </figure>
            </a>
        </article>

Pour chaque élément HTML de la carte de présentation, on va créer une fonction spécifique.

Processus de création de la carte de présentation produit
Pour chaque élément, il faut :
1. Créer l'élément HTML
2. Ajouter une classe à cet élément nouvellement créé
3. Créer le contenu de l'élément HTML (texte)
4. Rattacher le contenu créé à l'élément HTML créé précedemment
5. Insérer tout l'élément HTML dans le DOM
 */


// Fonction de création de l'élément article
createArticleElement = function (number) {
    //Création de l'élément article
    const newArticleElement = document.createElement("article");
    // Rattachement des classes à l'élément article
    newArticleElement.classList.add("products-section__article", "products-section__article-" + (number + 1))
    // Insertion de l'élément article dans le DOM
    let currentElement = document.getElementById("products-section");
    currentElement.appendChild(newArticleElement);
}

// Fonction de création de l'élément a
createAElement = function (number) {
    // Création de l'élément a
    const newAElement = document.createElement("a");
    // Rattachement des classes à l'élément a
    newAElement.classList.add("products-section__link","products-section__link-" + (number + 1))
    // Insertion de l'élément a dans le DOM
    let currentElement = document.querySelector(".products-section__article-" + (number + 1));
    currentElement.appendChild(newAElement);
    // Ajout de l'attribut href (lien avec id du produit)
    newAElement.setAttribute("href", "./frontend/product.html?id=" + products[number]._id);
}

// Fonction de création de l'élement figure
createFigureElement = function (number) {
    // Création de l'élément figure
    const newFigureElement = document.createElement("figure");
    // Rattachement des classes à l'élément figure
    newFigureElement.classList.add("product-card", "product-card-" + (number + 1));
    // Insertion de l'élément figure dans le DOM
    let currentElement = document.querySelector(".products-section__link-" + (number + 1));
    currentElement.appendChild(newFigureElement);
}

// Fonction de création de l'élément img
createImgElement = function (number) {
// Création de l'élément img
    const newImgElement = document.createElement("img");
// Rattachement des classes à l'élément img
    newImgElement.classList.add("product-card__img");
// Insertion de l'élément img dans le DOM
    let currentElement = document.querySelector(".product-card-" + (number + 1));
    currentElement.appendChild(newImgElement);
// Ajout de l'attribut src (url de l'image)
    newImgElement.setAttribute("src", products[number].imageUrl);
}

// Fonction de création de l'élément figcaption
createFigcaptionElement = function (number) {
// Création de l'élément figcaption
    const newFigcaptionElement = document.createElement("figcaption");
// Rattachement des classes à l'élément figcaption
    newFigcaptionElement.classList.add("product-card__info", "product-card__info-" + (number + 1));
// Insertion de l'élément figcaption dans le DOM
    let currentElement = document.querySelector(".product-card-" + (number + 1));
    currentElement.appendChild(newFigcaptionElement);
}

// Fonction de création de l'élément h3
createH3Element = function (number) {
// Création de l'élément h3
    const newH3Element = document.createElement("h3");
// Rattachement des classes à l'élément h3
    newH3Element.classList.add("product-card__name");
// Création du contenu de l'élément h3
    const newH3Content = document.createTextNode(
        products[number].name
    );
// Rattachement du contenu et de l'élément h3
    newH3Element.appendChild(newH3Content);
// Insertion de l'élément h3 dans le DOM
    let currentElement = document.querySelector(".product-card__info-" + (number + 1));
    currentElement.appendChild(newH3Element);
}

//Fonction de création de l'élément p
// Changement du format du prix (centimes en euros avec décimales)
createPElement = function (number) {
    let productPrice = parseInt(products[number].price, 10) / 100;
    productPrice = productPrice.toFixed(2);

// Création de l'élément p
    const newPElement = document.createElement("p");
// Rattachement des classes à l'élément p
    newPElement.classList.add("product-card__price");
// Création du contenu de l'élément p
    const newPContent = document.createTextNode(
        productPrice + "€"
    );
// Rattachement du contenu et de l'élément P
    newPElement.appendChild(newPContent);
// Insertion de l'élément article dans le DOM
    let currentElement = document.querySelector(".product-card__info-" + (number + 1));
    currentElement.appendChild(newPElement);
}

// Interroger l'API pour récupérer les données
let products
fetch("http://localhost:3000/api/furniture")
    // Récupérer le body du fichier.JSON
    .then((res) => res.json())
    // Convertir la réponse en .json et la stocker dans la variable products
    .then((data) => {
        products = JSON.stringify(data);
        // Transformer le .json en objet JS exploitable
        products = JSON.parse(products);
        for (let i = 0; i < products.length; i++) {
            createArticleElement (i);
            createAElement (i);
            createFigureElement(i);
            createImgElement(i);
            createFigcaptionElement(i);
            createH3Element (i);
            createPElement(i);
        }
    })

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



