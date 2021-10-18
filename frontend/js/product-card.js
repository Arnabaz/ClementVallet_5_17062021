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
createFigureElementProductPage = function () {
    //Création de l'élément figure
    const newFigureElementProductPage = document.createElement("figure");
    // Rattachement de classe à l'élément figure
    newFigureElementProductPage.classList.add("product-section__card");
    // Insertion de l'élément figure dans le DOM
    let AElementProductPage = document.querySelector(".product-page__add-to-cart");
    let currentElementProductPage = document.querySelector(".product-section");
    currentElementProductPage.insertBefore(newFigureElementProductPage, AElementProductPage);
}

// Fonction de création de l'élément img
createImgElementProductPage = function () {
    // Création de l'élément img
    const newImgElementProductPage = document.createElement("img");
    // Rattachement de classe à l'élément img
    newImgElementProductPage.classList.add("product-page__img");
    // Insertion de l'élément img dans le DOM
    let currentElementProductPage = document.querySelector(".product-section__card");
    currentElementProductPage.appendChild(newImgElementProductPage);
// Ajout de la référence à l'élément img
newImgElementProductPage.setAttribute("src", product.imageUrl);
}

// Fonction de création de l'élement figcaption
createFigcaptionElementProductPage = function () {
    // Création de l'élément figcation
    const newFigcaptionElementProductPage = document.createElement("figcaption");
    // Rattachement de classe à l'élément figcaption
    newFigcaptionElementProductPage.classList.add("product-page__info");
    // Insertion de l'élément figcaption dans le DOM
    let currentElementProductPage = document.querySelector(".product-section__card");
    currentElementProductPage.appendChild(newFigcaptionElementProductPage);
}

// Fonction de création de l'élément h2
createH2ElementProductPage = function () {
// Création de l'élément img
    const newH2ElementProductPage = document.createElement("h2");
// Rattachement de classe à l'élément h2
    newH2ElementProductPage.classList.add("product-page__name");
    // Création du contenu de l'élément h3
    const newH2ContentProductPage = document.createTextNode(
        product.name
    );
// Rattachement du contenu et de l'élément h2
    newH2ElementProductPage.appendChild(newH2ContentProductPage);
// Insertion de l'élément h2 dans le DOM
    let currentElementProductPage = document.querySelector(".product-page__info");
    currentElementProductPage.appendChild(newH2ElementProductPage);
}

// Fonction de création de l'élément span
createSpanElementProductPage = function () {
    let productPriceProductPage = parseInt(product.price, 10) / 100;
    productPriceProductPage = productPriceProductPage.toFixed(2);
// Création de l'élément span
    const newSpanElementProductPage = document.createElement("span");
// Rattachement de classe à l'élément span
    newSpanElementProductPage.classList.add("product-page__price");
    // Création du contenu de l'élément span
    const newPContentProductPage = document.createTextNode(
        productPriceProductPage + "€"
    );
// Rattachement du contenu et de l'élément P
    newSpanElementProductPage.appendChild(newPContentProductPage);
// Insertion de l'élément span dans le DOM
    let currentElementProductPage = document.querySelector(".product-page__info");
    currentElementProductPage.appendChild(newSpanElementProductPage);
}

// Fonction de création de l'élément p
createPElementProductPage = function () {
// Création de l'élément p
    const newPElementProductPage = document.createElement("p");
// Rattachement de classe à l'élément p
    newPElementProductPage.classList.add("product-page__text");
    // Création du contenu de l'élément p
    const newPContentProductPage = document.createTextNode(
        product.description
    );
// Rattachement du contenu et de l'élément P
    newPElementProductPage.appendChild(newPContentProductPage);
// Insertion de l'élément p dans le DOM
    let currentElementProductPage = document.querySelector(".product-page__info");
    currentElementProductPage.appendChild(newPElementProductPage);
}

// Fonction de création de l'élément form
createFormElementProductPage = function () {
// Création de l'élément form
    const newFormElementProductPage = document.createElement("form");
// Rattachement des classes à l'élément form
    newFormElementProductPage.classList.add("product-page__form");
// Insertion de l'élément form dans le DOM
    let currentElementProductPage = document.querySelector(".product-page__info");
    currentElementProductPage.appendChild(newFormElementProductPage);
// Ajout de l'attribut name à l'élément form
newFormElementProductPage.setAttribute("name", "product-form");
}

// Fonction de création de l'élément label
createLabelElementProductPage = function () {
// Création de l'élément label
    const newLabelElementProductPage = document.createElement("label");
// Création du contenu de l'élément label
    const newLabelContentProductPage = document.createTextNode("Couleur :");
// Rattachement du contenu et de l'élément label
    newLabelElementProductPage.appendChild(newLabelContentProductPage);
// Insertion de l'élément label dans le DOM
    let currentElementProductPage = document.querySelector(".product-page__form");
    currentElementProductPage.appendChild(newLabelElementProductPage);
    // Ajout de l'attribut name à l'élément form
    newLabelElementProductPage.setAttribute("for", "color-choice");
}

//Fonction de création de l'élément select
createSelectElementProductPage = function () {
// Création de l'élément select
    const newSelectElementProductPage = document.createElement("select");
    // Rattachement des classes à l'élément form
    newSelectElementProductPage.classList.add("product-form__select");
// Insertion de l'élément select dans le DOM
    let currentElementProductPage = document.querySelector(".product-page__form");
    currentElementProductPage.appendChild(newSelectElementProductPage);
    // Ajout de l'attribut name à l'élément form
    newSelectElementProductPage.setAttribute("name", "product-form");
    newSelectElementProductPage.setAttribute("id", "color-choice");
}

//Fonction de création de l'élément option n°1 (différent des autres)
createOptionElementProductPage = function () {
// Création de l'élément option
    const newOptionElementProductPage = document.createElement("option");
    // Création du contenu de l'élément option
    const newOptionContentProductPage = document.createTextNode("Choisissez une couleur");
// Rattachement du contenu et de l'élément option
    newOptionElementProductPage.appendChild(newOptionContentProductPage);
// Insertion de l'élément select dans le DOM
    let currentElementProductPage = document.querySelector(".product-form__select");
    currentElementProductPage.appendChild(newOptionElementProductPage);
    // Ajout de l'attribut value à l'élément option
    newOptionElementProductPage.setAttribute("value", "");
}


//Fonction de création des autres éléments option
createOptionsElementProductPage = function () {
    let productVarnish = product.varnish;
    for (let i = 0; i < productVarnish.length; i++) {
        // Création de l'élément option
        const newOptionsElementProductPage = document.createElement("option");
        // Création du contenu de l'élément option
        const newOptionsContentProductPage = document.createTextNode(productVarnish[i]);
        // Rattachement du contenu et de l'élément option
        newOptionsElementProductPage.appendChild(newOptionsContentProductPage);
        // Insertion de l'élément select dans le DOM
        let currentElementProductPage = document.querySelector(".product-form__select");
        currentElementProductPage.appendChild(newOptionsElementProductPage);
        // Ajout de l'attribut value à l'élément option
        newOptionsElementProductPage.setAttribute("value", productVarnish[i]);
    }
}
// Interroger l'API pour récupérer les données
let params = new URLSearchParams(document.location.search);
let idProduct = params.get("id");
let product = [];
 fetch("http://localhost:3000/api/furniture/" + idProduct)
        .then((response) =>
            response.json()
        )
        .catch((e) =>
            console.log(e)
        )
        // Convertir la réponse en .json et la stocker dans la variable products
        .then((data) => {
            product = data;
            createFigureElementProductPage ();
            createImgElementProductPage ();
            createFigcaptionElementProductPage ();
            createH2ElementProductPage ();
            createSpanElementProductPage ();
            createPElementProductPage ();
            createFormElementProductPage ();
            createLabelElementProductPage ();
            createSelectElementProductPage ();
            createOptionElementProductPage ();
            createOptionsElementProductPage ();
        })



