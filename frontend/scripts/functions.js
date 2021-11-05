// --- Déclaration variables ---
let cart = JSON.parse(localStorage.getItem("customCart")) || [];

// --- Déclaration des classes ---
class CustomProduct {
    constructor(id, varnish, quantity) {
        this.id = id;
        this.varnish = varnish;
        this.quantity = quantity;
    }
}

// --- Déclaration des fonctions ---
// Price formatting :
function formatPrice(price) {
     if (Number.isInteger(price) === false || isNaN(price)) {
        console.error("La variable indiquée en paramètre dans formatPrice() n'est pas un nombre");
   } else {
    let productPrice = parseInt(price, 10) / 100;
    productPrice = productPrice.toFixed(2);
    productPrice = productPrice.replace('.', ',');
    return productPrice;
    }
}


// Fonction d'appel à l'API pour tous les produits
function getDataProductsAPI(output) {
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
function getDataProductAPI(id, outputData) {
    return fetch("http://localhost:3000/api/furniture/" + id)
        .then((response) => (response.json()))
        .then((productData) => (outputData = productData))
        .catch((error) => console.error(error));
}

/*
    Fonction de création d'un élément HTML dans le DOM
    elementHTMLTag : définit le nom de la balise HTML à créer
    elementNameVariable : nom de la variable qui vise l'élément HTML à créer
*/
async function createHTMLElement(elementHTMLTag, elementNameVariable) {
    elementNameVariable = document.createElement(elementHTMLTag);
    return elementNameVariable;
}

/*
    Fonction d'ajout d'un attribut class à un élement HTML
    className : définit le nom de la classe que l'on met en attribut de la balise HTML créé
    elementNameVariable : nom de la variable qui vise l'élément HTML créé
*/
function addClassAttribute(className, elementNameVariable) {
    elementNameVariable.classList.add(className);
}

/*
    Fonction d'ajout d'un attribut à un élement HTML
    elementNameVariable : nom de la variable qui vise l'élément HTML créé
    attributeName : définit le nom de l'attribut de la balise HTML
    attributeValue: définit la valeur de l'attribut
*/
function addAttribute(elementNameVariable, attributeName, attributeValue) {
    elementNameVariable.setAttribute(attributeName, attributeValue);
}

/*
    Fonction de création et d'ajout d'un contenu texte à un élément HTML
    contentText : définit le texte à insérer dans le contenu de la balise HTML créée
    contentNameText : nom de la variable qui vise l'élément du DOM (noeud) de texte
    elementNameVariable : nom de la variable qui vise l'élément HTML créé
*/
function addContentText(contentText, contentNameText, elementNameVariable) {
    contentNameText = document.createTextNode(contentText);
    elementNameVariable.appendChild(contentNameText);
}

/*
    Fonction d'insertion de l'élément HTML créé dans le DOM (avec insertBefore)
    elementNameVariable : nom de la variable qui vise l'élément HTML créé
    elementHTMLReference : nom de la variable de l'élément HTML servant de référence pour l'insertion de l'élément HTML créé
    elementHTMLReferenceQS : nom du sélecteur CSS permettant de cibler l'élément HTML de référence
    elementParent : nom de la variable qui cible l'élément contenant/parent de l'élément HTML créé
    elementParentQS : nom du sélecteur CSS permettant de cibler l'élément HTML parent/contenant
*/
function addElementToDOMIS(elementNameVariable, elementHTMLReference, elementHTMLReferenceQS, elementParent, elementParentQS) {
    elementHTMLReference = document.querySelector(elementHTMLReferenceQS);
    elementParent = document.querySelector(elementParentQS);
    elementParent.insertBefore(elementNameVariable, elementHTMLReference);
}

/*
    Fonction d'insertion de l'élément HTML créé dans le DOM (avec appendChild)
    elementNameVariable : nom de la variable qui vise l'élément HTML créé
    elementHTMLReference : nom de la variable de l'élément HTML servant de référence pour l'insertion de l'élément HTML créé
    elementHTMLReferenceQS : nom du sélecteur CSS permettant de cibler l'élément HTML de référence
    elementParent : nom de la variable qui cible l'élément contenant/parent de l'élément HTML créé
    elementParentQS : nom du sélecteur CSS permettant de cibler l'élément HTML parent/contenant
*/
function addElementToDOMAC(elementNameVariable, elementParent, elementParentQS) {
    elementParent = document.querySelector(elementParentQS);
    elementParent.appendChild(elementNameVariable);
}

// Fonction de création et d'affichage d'une alerte pour l'utilisateur
function alertDisplay(alertName, className, textAlert, referentElementQS, parentElementQS){
    let textAlertContent;
    let referentElement;
    let parentElement;
    createHTMLElement("p", alertName)
        .then((res => {
            addClassAttribute(className, res);
            addContentText(textAlert, textAlertContent, res);
            addElementToDOMIS(res, referentElement, referentElementQS, parentElement, parentElementQS);
            return alertName;
        }))
        .catch((error) => (console.error("Erreur au niveau de la fonction de création de l'élément d'alerte", error)))
}
