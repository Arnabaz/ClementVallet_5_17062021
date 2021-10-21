/* --- Ajout du produit dans le panier du client lorsque celui-ci appuie sur le bouton "Ajouter au panier" de la page produit ---

Fonction qui permet de faire rentrer le produit sélectionné et personnalisé dans l'objet Panier
L'objet Panier sera réutilisé dans la page Cart pour afficher le panier de commande du client

 */

// Utiliser l'id du produit pour communiquer avec l'API les infos utiles (prix surtout)
// Récupérer le prix du produit et le stocker dans l'objet Panier (stocké dans le localStorage)

// --- Déclaration des variables ---
let productSectionElement = document.querySelector(".product-section"); // Variable pour viser product-section
let addToCartButtonElement = document.querySelector(".product-page__add-to-cart"); // variable pour viser le bouton Ajouter au panier
let productData; // Variable pour stocker les données reçues de l'API
let newAlertPElement; // Variable qui sert à viser l'élément d'alerte pour les vernis
let figcaptionProductPage;// Variable pour viser figcaption
let figureElementProductPage; //Variable pour viser figure
let varnishCustomSelect = document.getElementById("varnish-choice"); // Variable pour viser le select du formulaire

// --- Déclaration de fonction ---
// Fonction d'affichage de l'alerte de non-sélection du vernis
function alertVarnish (){
    newAlertPElement = document.createElement("p");
    // Rattachement de classe à l'élément p
    newAlertPElement.classList.add("product-page__alert");
    // Création du contenu de l'élément p
    const newAlertPElementContent = document.createTextNode("Vous devez choisir un vernis avant d'ajouter le produit au panier");
    // Rattachement du contenu et de l'élément p
    newAlertPElement.appendChild(newAlertPElementContent);
    // Insertion de l'élément p dans le DOM
    let FormElementProductPage = document.querySelector(".product-page__form");
    figcaptionProductPage = document.querySelector("figcaption");
    figcaptionProductPage.insertBefore(newAlertPElement, FormElementProductPage);
}


// Fonction de supression du message d'alerte (manque sélection vernis) suite à l'utilisation du bouton Ajouter au panier
function removeAlertElement () {
    figcaptionProductPage = document.querySelector("figcaption");
    newAlertPElement = document.querySelector(".product-page__alert")
    if (figcaptionProductPage.contains(newAlertPElement))
    {
        figcaptionProductPage.removeChild(newAlertPElement);
    }
}

// Fonction de suppression du bouton Ajouter au panier suite à l'ajout d'un produit au panier
function removeAddToCartButton () {
    productSectionElement.removeChild(addToCartButtonElement);
}

// Fonction de création du message qui apparait suite à l'utilisation du bouton Ajouter au panier
function displayAddCartMessage () {
    productSectionElement.innerHTML +=`<div class="product-page__success">
<p class="product-page__success-message">Le produit a bien été ajouté au panier</p>
<a class="product-page__success-link product-link" href="../index.html#products-section">< Continuer mes achats</a>
<a class="product-page__success-link cart-link" href="./cart.html">Voir mon panier ></a>
</div>`;
}

// Fonction d'ajout du produit sélectionné dans le panier du client
function addProductToCart () {
    // Vérification que le vernis a bien été choisi par le client
    figcaptionProductPage = document.querySelector("figcaption");
    newAlertPElement = document.querySelector(".product-page__alert")
    varnishCustomSelect = document.getElementById("varnish-choice");
    // Si l'utilisateur n'a pas sélectionné de vernis et s'il n'y a pas dèjà de message d'alerte alors afficher un message d'alerte
    if (varnishCustomSelect.value === "" && figcaptionProductPage.contains(newAlertPElement) === false) {
        alertVarnish();
    } else if (varnishCustomSelect.value === "" && figcaptionProductPage.contains(newAlertPElement) === true)
    {
    } else {

        // Sinon ajouter le produit au panier dans le localStorageelse {
        // Création de l'objet customProduct pour l'ajouter au panier du localStorage
        let objectCustomProduct = new CustomProduct(
            productData._id,
            productData.name,
            productData.description,
            productData.price,
            varnishCustomSelect.value,
            1,
            productData.imageUrl
        );
        // Vérification de la présence ou non du produit dans le panier
        let isProductAlreadyPresent = false;
        let indexModificator;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].varnish === varnishCustomSelect.value) {
                isProductAlreadyPresent = true;
                indexModificator = i;
            }
        }
        // Si le produit est déjà présent, incrémente seulement la quantité du produit de 1
        if (isProductAlreadyPresent) {
            cart[indexModificator].quantity = +cart[indexModificator].quantity + +objectCustomProduct.quantity;
            localStorage.setItem("customCart", JSON.stringify(cart));
            // Sinon s'il est absent du panier, ajoute-le dans le locaStorage
        } else {
            cart.push(objectCustomProduct);
            localStorage.setItem("customCart", JSON.stringify(cart))
        }
        removeAlertElement();
        removeAddToCartButton ();
        displayAddCartMessage();
    }
}

// Fonction qui déclenche tous les évènements liés au clic du bouton "Ajouter au panier"
function setAddToCart () {
    figureElementProductPage = document.querySelector(".product-page__card");
    addToCartButtonElement = document.querySelector(".product-page__add-to-cart");
    // Récupération de l'id du produit
    let params = new URLSearchParams(document.location.search);
    let idProduct = params.get("id");
    // Récupération des données du produit de l'API
    fetch("http://localhost:3000/api/furniture/" + idProduct)
        // Récupérer le body du fichier.JSON
        .then((response) =>
            response.json()
        )
        .catch((e) =>
            console.log(e)
        )
        // Convertir la réponse en .json et la stocker dans la variable products
        .then((data) => {
            productData = data;
            // Définiiton de l'évènement au clic du bouton "Ajouter au panier"
            addToCartButtonElement.addEventListener("click", () => {
                    figcaptionProductPage = document.querySelector("figcaption");
                    newAlertPElement = document.querySelector(".product-page__alert")
                    varnishCustomSelect = document.getElementById("varnish-choice");
                // Ajout du produit au panier
                    addProductToCart();
                    // Affichage du message de confirmation d'ajout du produit au panier
                }
                )
        })
}
setAddToCart();







