/* Fonctions pour créer la carte d'un produit
Chaque produit possède sa propre carte.
Chaque carte produit est organisée de cette manière en HTML :
        <figure class="product-section__card">
            <img class="product-page__img" src="../backend/images/oak_1.jpg"/>
                <figcaption class="product-page__info">
                    <h2 class="product-page__name">Cross-table</h2>
                    <span class="product-page__price">699,00€</span>
                    <p class="product-page__text">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do elusmod tempor
                        incidunt ut labore et dolore magna aliqua.</p>
                    <form name="product-form" class="product-page__form">
                        <label for="color-choice">Couleur :</label>
                        <select name="product-form" id="color-choice">
                            <option value="">Choisissez une couleur</option>
                            <option value="Tan">Brun clair</option>
                            <option value="Chocolate">Chocolat</option>
                            <option value="Black">Noir</option>
                            <option value="White">Blanc</option>
                        </select>
                    </form>
                </figcaption>
        </figure>

Pour chaque élément HTML de la carte produit, on va créer une fonction spécifique.

Processus de création de la carte de présentation produit
Pour chaque élément, il faut :
1. Créer l'élément HTML
2. Ajouter une classe à cet élément nouvellement créé
3. Créer le contenu de l'élément HTML (texte)
4. Rattacher le contenu créé à l'élément HTML créé précedemment
5. Insérer tout l'élément HTML dans le DOM
 */

// Fonction de création de l'élément figure
createFigureElement2 = function () {
    //Création de l'élément figure
    const newFigureElement2 = document.createElement("figure");
    // Rattachement de classe à l'élément figure
    newFigureElement2.classList.add("product-section__card");
    // Insertion de l'élément figure dans le DOM
    let AElement2 = document.querySelector(".product-page__add-to-cart");
    let currentElement2 = document.querySelector(".product-section");
    currentElement2.insertBefore(newFigureElement2, AElement2);
}

// Fonction de création de l'élément img
createImgElement2 = function () {
    // Création de l'élément img
    const newImgElement2 = document.createElement("img");
    // Rattachement de classe à l'élément img
    newImgElement2.classList.add("product-page__img");
    // Insertion de l'élément img dans le DOM
    let currentElement2 = document.querySelector(".product-section__card");
    currentElement2.appendChild(newImgElement2);
// Ajout de la référence à l'élément img
newImgElement2.setAttribute("src", product2.imageUrl);
}

// Fonction de création de l'élement figcaption
createFigcaptionElement2 = function () {
    // Création de l'élément figcation
    const newFigcaptionElement2 = document.createElement("figcaption");
    // Rattachement de classe à l'élément figcaption
    newFigcaptionElement2.classList.add("product-page__info");
    // Insertion de l'élément figcaption dans le DOM
    let currentElement2 = document.querySelector(".product-section__card");
    currentElement2.appendChild(newFigcaptionElement2);
}

// Fonction de création de l'élément h2
createH2Element2 = function () {
// Création de l'élément img
    const newH2Element2 = document.createElement("h2");
// Rattachement de classe à l'élément h2
    newH2Element2.classList.add("product-page__name");
    // Création du contenu de l'élément h3
    const newH2Content2 = document.createTextNode(
        product2.name
    );
// Rattachement du contenu et de l'élément h2
    newH2Element2.appendChild(newH2Content2);
// Insertion de l'élément h2 dans le DOM
    let currentElement2 = document.querySelector(".product-page__info");
    currentElement2.appendChild(newH2Element2);
}

// Fonction de création de l'élément span
createSpanElement2 = function () {
    let productPrice2 = parseInt(product2.price, 10) / 100;
    productPrice2 = productPrice2.toFixed(2);
// Création de l'élément span
    const newSpanElement2 = document.createElement("span");
// Rattachement de classe à l'élément span
    newSpanElement2.classList.add("product-page__price");
    // Création du contenu de l'élément span
    const newPContent2 = document.createTextNode(
        productPrice2 + "€"
    );
// Rattachement du contenu et de l'élément P
    newSpanElement2.appendChild(newPContent2);
// Insertion de l'élément span dans le DOM
    let currentElement2 = document.querySelector(".product-page__info");
    currentElement2.appendChild(newSpanElement2);
}

// Fonction de création de l'élément p
createPElement2 = function () {
// Création de l'élément p
    const newPElement2 = document.createElement("p");
// Rattachement de classe à l'élément p
    newPElement2.classList.add("product-page__text");
    // Création du contenu de l'élément p
    const newPContent2 = document.createTextNode(
        product2.description
    );
// Rattachement du contenu et de l'élément P
    newPElement2.appendChild(newPContent2);
// Insertion de l'élément p dans le DOM
    let currentElement2 = document.querySelector(".product-page__info");
    currentElement2.appendChild(newPElement2);
}

// Fonction de création de l'élément form
createFormElement2 = function () {
// Création de l'élément form
    const newFormElement2 = document.createElement("form");
// Rattachement des classes à l'élément form
    newFormElement2.classList.add("product-page__form");
// Insertion de l'élément form dans le DOM
    let currentElement2 = document.querySelector(".product-page__info");
    currentElement2.appendChild(newFormElement2);
// Ajout de l'attribut name à l'élément form
newFormElement2.setAttribute("name", "product-form");
}

// Fonction de création de l'élément label
createLabelElement2 = function () {
// Création de l'élément label
    const newLabelElement2 = document.createElement("label");
// Création du contenu de l'élément label
    const newLabelContent2 = document.createTextNode("Couleur :");
// Rattachement du contenu et de l'élément label
    newLabelElement2.appendChild(newLabelContent2);
// Insertion de l'élément label dans le DOM
    let currentElement2 = document.querySelector(".product-page__form");
    currentElement2.appendChild(newLabelElement2);
    // Ajout de l'attribut name à l'élément form
    newLabelElement2.setAttribute("for", "color-choice");
}

//Fonction de création de l'élément select
createSelectElement2 = function () {
// Création de l'élément select
    const newSelectElement2 = document.createElement("select");
    // Rattachement des classes à l'élément form
    newSelectElement2.classList.add("product-form__select");
// Insertion de l'élément select dans le DOM
    let currentElement2 = document.querySelector(".product-page__form");
    currentElement2.appendChild(newSelectElement2);
    // Ajout de l'attribut name à l'élément form
    newSelectElement2.setAttribute("name", "product-form");
    newSelectElement2.setAttribute("id", "color-choice");
}

//Fonction de création de l'élément option n°1 (différent des autres)
createOptionElement2 = function () {
// Création de l'élément option
    const newOptionElement2 = document.createElement("option");
    // Création du contenu de l'élément option
    const newOptionContent2 = document.createTextNode("Choisissez une couleur");
// Rattachement du contenu et de l'élément option
    newOptionElement2.appendChild(newOptionContent2);
// Insertion de l'élément select dans le DOM
    let currentElement2 = document.querySelector(".product-form__select");
    currentElement2.appendChild(newOptionElement2);
    // Ajout de l'attribut value à l'élément option
    newOptionElement2.setAttribute("value", "");
}


//Fonction de création des autres éléments option
createOptionsElement2 = function () {
    let productColors = product2.varnish;
    for (let i = 0; i < productColors.length; i++) {
        // Création de l'élément option
        const newOptionsElement2 = document.createElement("option");
        // Création du contenu de l'élément option
        const newOptionsContent2 = document.createTextNode(productColors[i]);
        // Rattachement du contenu et de l'élément option
        newOptionsElement2.appendChild(newOptionsContent2);
        // Insertion de l'élément select dans le DOM
        let currentElement2 = document.querySelector(".product-form__select");
        currentElement2.appendChild(newOptionsElement2);
        // Ajout de l'attribut value à l'élément option
        newOptionsElement2.setAttribute("value", productColors[i]);
    }
}
// Interroger l'API pour récupérer les données

let params = new URLSearchParams(document.location.search);
let idProduct = params.get("id");

let product2;
fetch("http://localhost:3000/api/furniture/" + idProduct)
    // Récupérer le body du fichier.JSON
    .then((res) => res.json())
    // Convertir la réponse en .json et la stocker dans la variable products
    .then((data) => {
        product2 = JSON.stringify(data);
        // Transformer le .json en objet JS exploitable
        product2 = JSON.parse(product2);

        createFigureElement2 ();
        createImgElement2 ();
        createFigcaptionElement2 ();
        createH2Element2();
        createSpanElement2 ();
        createPElement2 ();
        createFormElement2 ();
        createLabelElement2 ();
        createSelectElement2();
        createOptionElement2 ();
        createOptionsElement2 ();

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
