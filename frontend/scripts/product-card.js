/* --- Création de la fiche produit de la page produit --- */
// --- Déclaration des variables ---
let params; // Variable pour stocker le paramètre de l'URL
let idProduct; // Variable pour stocker l'id produit issu du paramètre de l'url
let product = []; // Variable pour stocker les données d'un produit de l'API

// --- Déclaration de fonction ---
// Fonction principale de création de h2
function createH2ElementProductPage() {
    let newH2ElementProductPage = undefined;
    let newH2ContentProductPage;
    let referentElementProductPage;
    let parentElementProductPage;
    createHTMLElement("h2", newH2ElementProductPage)
        .then((res => {
            addClassAttribute("product-section__product-title", res);
            addContentText("Présentation du produit", newH2ContentProductPage, res);
            addElementToDOMIS(res, referentElementProductPage, ".product-page__add-to-cart", parentElementProductPage, ".product-section");
        }))
        .catch((error) => (console.error("Erreur au niveau de la fonction de création de l'élément h2", error)))
}

// Fonction principale de création de l'élément figure :
function createFigureElementProductPage() {
    let newFigureElementProductPage = undefined;
    let referentElementProductPage;
    let parentElementProductPage;
    createHTMLElement("figure", newFigureElementProductPage)
        .then((res => {
            addClassAttribute("product-section__card", res);
            addElementToDOMIS(res, referentElementProductPage, ".product-page__add-to-cart", parentElementProductPage, ".product-section");
        }))
        .catch((error) => (console.error("Erreur au niveau de la fonction de création de l'élément figure", error)))
}

// Fonction principale de création de l'élément img :
function createImgElementProductPage() {
    let newImgElementProductPage = undefined;
    let parentElementProductPage;
    createHTMLElement("img", newImgElementProductPage)
        .then((res => {
            addClassAttribute("product-page__img", res);
            addElementToDOMAC(res, parentElementProductPage, ".product-section__card");
            addAttribute(res, "src", product.imageUrl);
            addAttribute(res, "alt", product.name);
        }))
        .catch((error) => (console.error("Erreur au niveau de la fonction de création de l'élément img", error)))
}

// Fonction principale de création de l'élément figcaption :
function createFigcaptionElementProductPage() {
    let newFigcaptionElementProductPage = undefined;
    let parentElementProductPage;
    createHTMLElement("figcaption", newFigcaptionElementProductPage)
        .then((res => {
            addClassAttribute("product-page__info", res);
            addElementToDOMAC(res, parentElementProductPage, ".product-section__card");
        }))
        .catch((error) => (console.error("Erreur au niveau de la fonction de création de l'élément figcaption", error)))
}

// Fonction principale de création de l'élément h3 :
function createH3ElementProductPage() {
    let newH3ElementProductPage = undefined;
    let newH3ContentProductPage;
    let parentElementProductPage;
    createHTMLElement("figcaption", newH3ElementProductPage)
        .then((res => {
            addClassAttribute("product-page__name", res);
            addContentText(product.name, newH3ContentProductPage, res);
            addElementToDOMAC(res, parentElementProductPage, ".product-page__info");
        }))
        .catch((error) => (console.error("Erreur au niveau de la fonction de création de l'élément h3", error)))
}

// Fonction principale de création de l'élément span :
function createSpanElementProductPage() {
    let newSpanElementProductPage = undefined;
    let newSpanContentProductPage;
    let productPriceProductPage = formatPrice(product.price);
    let parentElementProductPage;
    createHTMLElement("span", newSpanElementProductPage)
        .then((res => {
            addClassAttribute("product-page__price", res);
            addContentText(productPriceProductPage, newSpanContentProductPage, res)
            addElementToDOMAC(res, parentElementProductPage, ".product-page__info");
        }))
        .catch((error) => (console.error("Erreur au niveau de la fonction de création de l'élément span", error)))
}

// Fonction principale de création de l'élément p :
function createPElementProductPage() {
    let newPElementProductPage = undefined;
    let newPContentProductPage;
    let parentElementProductPage;
    createHTMLElement("p", newPElementProductPage)
        .then((res => {
            addClassAttribute("product-page__text", res);
            addContentText(product.description, newPContentProductPage, res);
            addElementToDOMAC(res, parentElementProductPage, ".product-page__info");
        }))
        .catch((error) => (console.error("Erreur au niveau de la fonction de création de l'élément p", error)))
}

// Fonction principale de création de l'élément form :
function createFormElementProductPage() {
    let newFormElementProductPage = undefined;
    let parentElementProductPage;
    createHTMLElement("form", newFormElementProductPage)
        .then((res => {
            addClassAttribute("product-page__form", res);
            addElementToDOMAC(res, parentElementProductPage, ".product-page__info");
            addAttribute(res, "name", "product-form");
        }))
        .catch((error) => (console.error("Erreur au niveau de la fonction de création de l'élément form", error)))
}

// Fonction principale de création de l'élément label :
function createLabelElementProductPage() {
    let newLabelElementProductPage = undefined;
    let newLabelContentProductPage;
    let parentElementProductPage;
    createHTMLElement("label", newLabelElementProductPage)
        .then((res => {
            addContentText("Vernis :", newLabelContentProductPage, res);
            addElementToDOMAC(res, parentElementProductPage, ".product-page__form");
            addAttribute(res, "for", "varnish-choice")
        }))
        .catch((error) => (console.error("Erreur au niveau de la fonction de création de l'élément label", error)))
}

// Fonction principale de création de l'élément select :
function createSelectElementProductPage() {
    let newSelectElementProductPage = undefined;
    let parentElementProductPage;
    createHTMLElement("select", newSelectElementProductPage)
        .then((res => {
            addClassAttribute("product-page__select", res);
            addElementToDOMAC(res, parentElementProductPage, ".product-page__form");
            addAttribute(res, "name", "product-form")
            addAttribute(res, "id", "varnish-choice")
        }))
        .catch((error) => (console.error("Erreur au niveau de la fonction de création de l'élément select", error)))
}

// Fonction principale de création de l'élément option n°1 :
function createOptionElementProductPage() {
    let newOptionElementProductPage = undefined;
    let newOptionContentProductPage;
    let parentElementProductPage;
    createHTMLElement("option", newOptionElementProductPage)
        .then((res => {
            addContentText("Choisissez un vernis", newOptionContentProductPage, res);
            addElementToDOMAC(res, parentElementProductPage, ".product-page__select");
            addAttribute(res, "value", "");
        }))
        .catch((error) => (console.error("Erreur au niveau de la fonction de création de l'élément option", error)))
}

// Fonction principale de création de l'élément option n°1 :
function createOptionElementsProductPage() {
    let productVarnish = product.varnish;
    let newOptionElementsProductPage = undefined;
    let newOptionContentsProductPage;
    let parentElementProductPage;
    for (let i = 0; i < productVarnish.length; i++) {
        createHTMLElement("option", newOptionElementsProductPage)
            .then((res => {
                addContentText(productVarnish[i], newOptionContentsProductPage, res);
                addElementToDOMAC(res, parentElementProductPage, ".product-page__select");
                addAttribute(res, "value", productVarnish[i]);
            }))
            .catch((error) => (console.error("Erreur au niveau de la fonction de création des éléments option", error)))
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
        createOptionElementsProductPage();
    })
    .catch((error) => (console.error("L'erreur provient de l'appel à l'API", error)));




