/* --- Création de la section "products-section" de la page d'accueil = liste des produits --- */
/* Explications
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

// --- Déclaration des variables ---
let product = [];
let products = []; // Variable pour stocker les données produits de l'API

// --- Déclarations de fonction ---
// Fonction de création de l'élément article
function createArticleElement(number) {
    //Création de l'élément article
    const newArticleElement = document.createElement("article");
    // Rattachement des classes à l'élément article
    newArticleElement.classList.add("products-section__article", "products-section__article-" + (number + 1))
    // Insertion de l'élément article dans le DOM
    let currentElement = document.getElementById("products-section");
    currentElement.appendChild(newArticleElement);
}

// Fonction de création de l'élément a
function createAElement(number) {
    // Création de l'élément a
    const newAElement = document.createElement("a");
    // Rattachement des classes à l'élément a
    newAElement.classList.add("products-section__link", "products-section__link-" + (number + 1))
    // Insertion de l'élément a dans le DOM
    let currentElement = document.querySelector(".products-section__article-" + (number + 1));
    currentElement.appendChild(newAElement);
    // Ajout de l'attribut href (lien avec id du produit)
    newAElement.setAttribute("href", "./frontend/product.html?id=" + products[number]._id);
}

// Fonction de création de l'élement figure
function createFigureElement(number) {
    // Création de l'élément figure
    const newFigureElement = document.createElement("figure");
    // Rattachement des classes à l'élément figure
    newFigureElement.classList.add("product-card", "product-card-" + (number + 1));
    // Insertion de l'élément figure dans le DOM
    let currentElement = document.querySelector(".products-section__link-" + (number + 1));
    currentElement.appendChild(newFigureElement);
}

// Fonction de création de l'élément img
function createImgElement(number) {
// Création de l'élément img
    const newImgElement = document.createElement("img");
// Rattachement des classes à l'élément img
    newImgElement.classList.add("product-card__img");
// Insertion de l'élément img dans le DOM
    let currentElement = document.querySelector(".product-card-" + (number + 1));
    currentElement.appendChild(newImgElement);
// Ajout de l'attribut src (url de l'image)
    newImgElement.setAttribute("src", products[number].imageUrl);
    newImgElement.setAttribute("alt", products[number].name);
}

// Fonction de création de l'élément figcaption
function createFigcaptionElement(number) {
// Création de l'élément figcaption
    const newFigcaptionElement = document.createElement("figcaption");
// Rattachement des classes à l'élément figcaption
    newFigcaptionElement.classList.add("product-card__info", "product-card__info-" + (number + 1));
// Insertion de l'élément figcaption dans le DOM
    let currentElement = document.querySelector(".product-card-" + (number + 1));
    currentElement.appendChild(newFigcaptionElement);
}

// Fonction de création de l'élément h3
function createH3Element(number) {
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
function createPElement(number) {
    // Conversion du prix en nombre décimale avec euros.
    let productPrice = formatPrice(products[number].price);

// Création de l'élément p
    const newPElement = document.createElement("p");
// Rattachement des classes à l'élément p
    newPElement.classList.add("product-card__price");
// Création du contenu de l'élément p
    const newPContent = document.createTextNode(
        productPrice + " €"
    );
// Rattachement du contenu et de l'élément P
    newPElement.appendChild(newPContent);
// Insertion de l'élément p dans le DOM
    let currentElement = document.querySelector(".product-card__info-" + (number + 1));
    currentElement.appendChild(newPElement);
}

// Fonction de création de l'élément div (créé s'il n'y a pas de produits disponibles)
function createNoProductElement() {
    // Création de l'élément p (= NoArticle)
    const newNoProductElement = document.createElement("p");
    // Rattachement des classes à l'élément NoArticle
    newNoProductElement.classList.add("no-product");
    // Création du contenu de l'élément NoArticle
    const newNoProductContent = document.createTextNode("Désolé mais nous sommes actuellement en rupture de stock de tous nos produits. Pour vous tenir informés de l’arrivée de nouveaux stocks et de nouveaux produits, n’hésitez pas à vous abonner !");
    // Rattachement du contenu et de l'élément NoArticle
    newNoProductElement.appendChild(newNoProductContent);
    // Insertion de l'élément NoArticle dans le DOM
    let currentElement = document.getElementById("products-section");
    currentElement.appendChild(newNoProductElement);
}

// --- HOMEPAGE - Affichage de la section Produits ---
// Interroger l'API pour récupérer les données des produits
getDataProductsAPI(products)
    // Résolution de la promesse
    .then((answer) => {
        // Stocker la résolution de la promesse dans la variable products
        products = answer;
        // S'il n'y a pas de produits disponibles, afficher l'élément NoProduct
        if (products.length === 0) {
            createNoProductElement();
            // S'il y a des éléments disponibles, afficher la liste des produits
        } else if (products.length > 0) {
            // Boucle pour récupérer les produits un par un
            for (let i = 0; i < products.length; i++) {
                createArticleElement(i);
                createAElement(i);
                createFigureElement(i);
                createImgElement(i);
                createFigcaptionElement(i);
                createH3Element(i);
                createPElement(i);
            }
        }
    })
    // Rejet de la promesse et renvoi de l'erreur vers la console
    .catch((error) => console.error(error));


