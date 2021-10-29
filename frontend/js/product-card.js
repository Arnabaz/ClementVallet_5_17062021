/* --- Création de la carte d'un produit dans la page produit ---
Chaque produit possède sa propre carte.
Chaque carte produit est organisée de cette manière en HTML :
       <h2 class= product-section__product-title>Présentation du produit</h2>
        <figure class="product-section__card">
            <img class="product-page__img" src="../backend/images/oak_1.jpg"/>
                <figcaption class="product-page__info">
                    <h3 class="product-page__name">Cross-table</h3>
                    <span class="product-page__price">699,00€</span>
                    <p class="product-page__text">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do elusmod tempor
                        incidunt ut labore et dolore magna aliqua.</p>
                    <form name="product-form" class="product-page__form">
                        <label for="varnish-choice">Vernis :</label>
                        <select name="product-form" id="varnish-choice">
                            <option value="">Choisissez un vernis</option>
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

// --- Déclaration des variables ---
let params; // Variable pour stocker le paramètre de l'URL
let idProduct; // Variable pour stocker l'id produit issu du paramètre de l'url
let product = []; // Variable pour stocker les données d'un produit de l'API


// --- Déclaration de fonction
// Fonction de création de l'élément h2
function createH2ElementProductPage() {
// Création de l'élément img
    const newH2ElementProductPage = document.createElement("H2");
// Rattachement de classe à l'élément H2
    newH2ElementProductPage.classList.add("product-section__product-title");
    // Création du contenu de l'élément h2
    const newH2ContentProductPage = document.createTextNode("Présentation du produit");
// Rattachement du contenu et de l'élément H2
    newH2ElementProductPage.appendChild(newH2ContentProductPage);
// Insertion de l'élément H2 dans le DOM
    let AElementProductPage = document.querySelector(".product-page__add-to-cart");
    let currentElementProductPage = document.querySelector(".product-section");
    currentElementProductPage.insertBefore(newH2ElementProductPage, AElementProductPage);
}

// Fonction de création de l'élément figure
function createFigureElementProductPage() {
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
function createImgElementProductPage() {
    // Création de l'élément img
    const newImgElementProductPage = document.createElement("img");
    // Rattachement de classe à l'élément img
    newImgElementProductPage.classList.add("product-page__img");
    // Insertion de l'élément img dans le DOM
    let currentElementProductPage = document.querySelector(".product-section__card");
    currentElementProductPage.appendChild(newImgElementProductPage);
    // Ajout de la référence à l'élément img
    newImgElementProductPage.setAttribute("src", product.imageUrl);
    newImgElementProductPage.setAttribute("alt", product.name)
}

// Fonction de création de l'élement figcaption
function createFigcaptionElementProductPage() {
    // Création de l'élément figcation
    const newFigcaptionElementProductPage = document.createElement("figcaption");
    // Rattachement de classe à l'élément figcaption
    newFigcaptionElementProductPage.classList.add("product-page__info");
    // Insertion de l'élément figcaption dans le DOM
    let currentElementProductPage = document.querySelector(".product-section__card");
    currentElementProductPage.appendChild(newFigcaptionElementProductPage);
}

// Fonction de création de l'élément h3
function createH3ElementProductPage() {
// Création de l'élément img
    const newH3ElementProductPage = document.createElement("H3");
// Rattachement de classe à l'élément H3
    newH3ElementProductPage.classList.add("product-page__name");
    // Création du contenu de l'élément h3
    const newH3ContentProductPage = document.createTextNode(
        product.name
    );
// Rattachement du contenu et de l'élément H3
    newH3ElementProductPage.appendChild(newH3ContentProductPage);
// Insertion de l'élément H3 dans le DOM
    let currentElementProductPage = document.querySelector(".product-page__info");
    currentElementProductPage.appendChild(newH3ElementProductPage);
}

// Fonction de création de l'élément span
function createSpanElementProductPage() {
    let productPriceProductPage = formatPrice(product.price)
// Création de l'élément span
    const newSpanElementProductPage = document.createElement("span");
// Rattachement de classe à l'élément span
    newSpanElementProductPage.classList.add("product-page__price");
    // Création du contenu de l'élément span
    const newPContentProductPage = document.createTextNode(
        productPriceProductPage + " €"
    );
// Rattachement du contenu et de l'élément P
    newSpanElementProductPage.appendChild(newPContentProductPage);
// Insertion de l'élément span dans le DOM
    let currentElementProductPage = document.querySelector(".product-page__info");
    currentElementProductPage.appendChild(newSpanElementProductPage);
}

// Fonction de création de l'élément p
function createPElementProductPage() {
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
function createFormElementProductPage() {
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
function createLabelElementProductPage() {
// Création de l'élément label
    const newLabelElementProductPage = document.createElement("label");
// Création du contenu de l'élément label
    const newLabelContentProductPage = document.createTextNode("Vernis :");
// Rattachement du contenu et de l'élément label
    newLabelElementProductPage.appendChild(newLabelContentProductPage);
// Insertion de l'élément label dans le DOM
    let currentElementProductPage = document.querySelector(".product-page__form");
    currentElementProductPage.appendChild(newLabelElementProductPage);
    // Ajout de l'attribut name à l'élément form
    newLabelElementProductPage.setAttribute("for", "varnish-choice");
}

//Fonction de création de l'élément select
function createSelectElementProductPage() {
    // Création de l'élément select
    const newSelectElementProductPage = document.createElement("select");
    // Rattachement des classes à l'élément form
    newSelectElementProductPage.classList.add("product-form__select");
    // Insertion de l'élément select dans le DOM
    let currentElementProductPage = document.querySelector(".product-page__form");
    currentElementProductPage.appendChild(newSelectElementProductPage);
    // Ajout de l'attribut name à l'élément form
    newSelectElementProductPage.setAttribute("name", "product-form");
    newSelectElementProductPage.setAttribute("id", "varnish-choice");
}

//Fonction de création de l'élément option n°1 (différent des autres)
function createOptionElementProductPage() {
// Création de l'élément option
    const newOptionElementProductPage = document.createElement("option");
    // Création du contenu de l'élément option
    const newOptionContentProductPage = document.createTextNode("Choisissez une vernis");
// Rattachement du contenu et de l'élément option
    newOptionElementProductPage.appendChild(newOptionContentProductPage);
// Insertion de l'élément select dans le DOM
    let currentElementProductPage = document.querySelector(".product-form__select");
    currentElementProductPage.appendChild(newOptionElementProductPage);
    // Ajout de l'attribut value à l'élément option
    newOptionElementProductPage.setAttribute("value", "");
}


//Fonction de création des autres éléments option
function createOptionsElementProductPage() {
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

// --- PAGE PRODUIT - Affichage de la fiche du produit sélectionné
// Récupérer l'id produit dans l'URL
params = new URLSearchParams(document.location.search);
idProduct = params.get("id");
// Interroger l'API pour récupérer les données du produit sélectionné
getDataProductAPI(idProduct, product)
    .then((answer) => {
        product = answer;
        createH2ElementProductPage();
        createFigureElementProductPage();
        createImgElementProductPage();
        createFigcaptionElementProductPage();
        createH3ElementProductPage();
        createSpanElementProductPage();
        createPElementProductPage();
        createFormElementProductPage();
        createLabelElementProductPage();
        createSelectElementProductPage();
        createOptionElementProductPage();
        createOptionsElementProductPage();
    })
    .catch((error) => (console.error(error)));




