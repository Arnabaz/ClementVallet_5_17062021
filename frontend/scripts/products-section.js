/* --- Création de la section "products-section" de la page d'accueil = liste des produits --- */
// --- Déclaration des variables ---
let product = [];
let products = []; // Variable pour stocker les données produits de l'API

// --- Déclarations de fonction ---
// Fonction principale de création de l'élément article :
function createArticleElement(number) {
    let newArticleElement = undefined;
    let parentElementHomePage;
    createHTMLElement("article", newArticleElement)
        .then((res => {
            addClassAttribute("products-section__article", res);
            addClassAttribute(`products-section__article-${number + 1}`, res);
            addElementToDOMAC(res, parentElementHomePage, ".products-section");
        }))
        .catch((error) => (console.error("Erreur au niveau de la fonction de création de l'élément article", error)))
}

// Fonction principale de création de l'élément a :
function createAElement(number) {
    let newAElement = undefined;
    let parentElementHomePage;
    createHTMLElement("a", newAElement)
        .then((res => {
            addClassAttribute("products-section__link", res);
            addClassAttribute(`products-section__link-${number + 1}`, res);
            addElementToDOMAC(res, parentElementHomePage, `.products-section__article-${number + 1}`);
            addAttribute(res, "href", `./frontend/product.html?id=${products[number]._id}`);
        }))
        .catch((error) => (console.error("Erreur au niveau de la fonction de création de l'élément a", error)))
}
//Fonction principale de création de l'élément figure
function createFigureElement(number) {
    let newFigureElement = undefined;
    let parentElementHomePage;
    createHTMLElement("figure", newFigureElement)
        .then((res => {
            addClassAttribute("product-card", res);
            addClassAttribute(`product-card-${number + 1}`, res);
            addElementToDOMAC(res, parentElementHomePage, `.products-section__link-${number + 1}`);
        }))
        .catch((error) => (console.error("Erreur au niveau de la fonction de création de l'élément figure", error)))
}

// Fonction de création de l'élément img
function createImgElement(number) {
    let newImgElement = undefined;
    let parentElementHomePage;
    createHTMLElement("img", newImgElement)
        .then((res => {
            addClassAttribute("product-card__img", res);
            addElementToDOMAC(res, parentElementHomePage, `.product-card-${number + 1}`);
            addAttribute(res, "src", products[number].imageUrl);
            addAttribute(res, "alt", products[number].name);
        }))
        .catch((error) => (console.error("Erreur au niveau de la fonction de création de l'élément img", error)))
}

// Fonction de création de l'élément figcaption
function createFigcaptionElement(number) {
    let newFigcaptionElement = undefined;
    let parentElementHomePage;
    createHTMLElement("figcaption", newFigcaptionElement)
        .then((res => {
            addClassAttribute("product-card__info", res);
            addClassAttribute(`product-card__info-${number + 1}`, res);
            addElementToDOMAC(res, parentElementHomePage, `.product-card-${number + 1}`);
        }))
        .catch((error) => (console.error("Erreur au niveau de la fonction de création de l'élément figcaption", error)))
}

// Fonction de création de l'élément h3
function createH3Element(number) {
    let newH3Element = undefined;
    let newH3Content;
    let parentElementHomePage;
    createHTMLElement("h3", newH3Element)
        .then((res => {
            addClassAttribute("product-card__name", res);
            addContentText(products[number].name, newH3Content, res);
            addElementToDOMAC(res, parentElementHomePage, `.product-card__info-${number + 1}`);
        }))
        .catch((error) => (console.error("Erreur au niveau de la fonction de création de l'élément h3", error)))
}

// Fonction de création de l'élément p
function createPElement(number) {
    let newPElement = undefined;
    let newPContent;
    let productPrice = formatPrice(products[number].price);
    let parentElementHomePage;
    createHTMLElement("p", newPElement)
        .then((res => {
            addClassAttribute("product-card__price", res);
            addContentText(productPrice, newPContent, res);
            addElementToDOMAC(res, parentElementHomePage, `.product-card__info-${number + 1}`);
        }))
        .catch((error) => (console.error("Erreur au niveau de la fonction de création de l'élément no-product", error)))
}

// Fonction de création de l'élément p (créé s'il n'y a pas de produits disponibles)
function createNoProductElement() {
    let newNoProductElement = undefined;
    let newNoProductContent;
    let parentElementHomePage;
    createHTMLElement("p", newNoProductElement)
        .then((res => {
            addClassAttribute("no-product", res);
            addContentText("Désolé mais nous sommes actuellement en rupture de stock de tous nos produits. Pour vous tenir informés de l’arrivée de nouveaux stocks et de nouveaux produits, n’hésitez pas à vous abonner !", newNoProductContent, res);
            addElementToDOMAC(res, parentElementHomePage, ".products-section");
        }))
        .catch((error) => (console.error("Erreur au niveau de la fonction de création de l'élément p", error)))
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


