/* --- PRODUCT.JS --- */

/*
1) Création de la fiche produit de la page produit :
    - Récupération de l'id du produit sélectionné par l'utilisateur
    - Appel à l'API avec l'id du produit sélectionné par l'utilisateur
    - Récupération des informations du produit et affichage dans la fiche produit
2) Ajout du produit dans le panier du client lorsque celui-ci appuie sur le bouton "Ajouter au panier" de la page produit
    - Gestionnaire d'évènement (au clic) sur le bouton "Ajouter au panier"
    - Logique liée à l'ajout d'un produit au panier :
        Si le vernis du produit n'est pas choisi par l'utilisateur, l'informer en faisant apparaitre un message d'alerte.
        Si le produit est déjà présent dans le panier, on incrémente la quantité de 1;
        Si le produit n'est pas présent dans le panier, ajouter le produit au localStorage
 */


// --- Déclaration des variables ---
let params; // Variable pour stocker le paramètre de l'URL
let idProduct; // Variable pour stocker l'id produit issu du paramètre de l'url
let product = []; // Variable pour stocker les données d'un produit de l'API
let productSectionElement = document.querySelector(".product-section"); // Variable pour viser product-section
let newAlertPElement; // Variable qui sert à viser l'élément d'alerte pour les vernis
let figcaptionProductPage;// Variable pour viser figcaption
let varnishCustomSelect = document.getElementById("varnish-choice"); // Variable pour viser le select du formulaire


// Fonction d'ajout du produit sélectionné dans le panier du client
function addProductToCart(objectProduct) {
    // Vérification de la présence ou non du produit dans le panier
    let isProductAlreadyPresent = false;
    let indexModificator;
    for (let i = 0; i < cart.length;
         i++
    ) {
        if (cart[i].varnish === varnishCustomSelect.value) {
            isProductAlreadyPresent = true;
            indexModificator = i;
        }
    }
    // Si le produit est déjà présent, incrémente seulement la quantité du produit de 1
    if (isProductAlreadyPresent) {
        cart[indexModificator].quantity = +cart[indexModificator].quantity + +objectProduct.quantity;
        localStorage.setItem("customCart", JSON.stringify(cart));
        // Sinon s'il est absent du panier, ajoute-le dans le locaStorage
    } else {
        // Sinon ajouter le produit au panier
        cart.push(objectProduct);
        localStorage.setItem("customCart", JSON.stringify(cart))
    }
}


// --- PAGE PRODUIT - Affichage de la fiche du produit sélectionné
// 1. Vérification de l'id produit récupéré :
// Récupérer l'id produit dans l'URL
params = new URLSearchParams(document.location.search);
idProduct = params.get("id");
// 2. Interroger l'API pour récupérer les données du produit sélectionné
fetch("http://localhost:3000/api/furniture/" + idProduct)
    .then((res) => {
        if (res.status === 404) {
            console.error("ID non valable");
            document.location.href = "./index.html";
        } else return res
    })
    .then((response) => response.json())
    .then((data) => {
            // Si l'ID du produit n'est pas présent dans la BDD :
            product = data;
            // 3. Afficher la fiche du produit
            productSectionElement.innerHTML += `
           <h2 class="product-section__product-title">Présentation du produit</h2>
           <figure class="product-section__card">
            <img class="product-page__img" src="${product.imageUrl}" alt="${product.name}"/>
            <figcaption class="product-page__info">
                <h3 class="product-page__name">${product.name}</h3>
                <span class="product-page__price">${formatPrice(product.price)} €</span>
                <p class="product-page__text">${product.description}</p>
                <form class="product-page__form" name="product-form">
                    <label for="varnish-choice">Vernis :</label>
                    <select id="varnish-choice" class="product-page__select" name="product-form">
                        <option value="">Choisissez un vernis</option>
                    </select>
                </form>
            </figcaption>
           </figure>
           <a class="product-page__add-to-cart">Ajouter au panier</a>
           `;
            for (let i = 0; i < product.varnish.length; i++) {
                document.querySelector(".product-page__select").innerHTML += `
               <option value="${product.varnish[i]}">${product.varnish[i]}</option>
               `
            }
            // 4. Ajouter un gestionnaire d'évènements (au clic) sur le bouton "Ajouter au panier"
            let addToCartButtonElement = document.querySelector(".product-page__add-to-cart"); // variable pour viser le bouton Ajouter au panier
            addToCartButtonElement.addEventListener("click", () => {
                // Déclaration des variables :
                figcaptionProductPage = document.querySelector("figcaption");
                newAlertPElement = document.querySelector(".product-page__alert")
                varnishCustomSelect = document.getElementById("varnish-choice");

                // 4.1 Ajout du produit au panier
                figcaptionProductPage = document.querySelector("figcaption");
                newAlertPElement = document.querySelector(".product-page__alert")
                varnishCustomSelect = document.getElementById("varnish-choice");
                // Vérification que le vernis a bien été choisi par le client :
                if (varnishCustomSelect.value === "") {
                    if (figcaptionProductPage.contains(newAlertPElement) === false) {
                        // Si l'utilisateur n'a pas sélectionné de vernis et s'il n'y a pas dèjà de message d'alerte alors afficher un message d'alerte
                        console.error("Le produit n'a pas été ajouté au panier client car l'utilisateur n'a pas choisi de vernis");
                        alertDisplay("#varnish-choice", "product-page__alert", "Vous devez choisir un vernis avant d'ajouter le produit au panier");
                    }
                } else {
                    // Création d'un objet customProduct
                    let customProduct = {
                        id: product._id,
                        varnish: varnishCustomSelect.value,
                        quantity: 1
                    };
                    // Ajout de l'objet customProduct dans le panier
                    addProductToCart(customProduct);
                    // 4.2 Evènements suite à l'ajout du produit au panier :
                    let addToCartButtonElement = document.querySelector(".product-page__add-to-cart");
                    // 4.2.1 Suppression du bouton Ajouter au panier suite à l'ajout d'un produit au panier
                    productSectionElement.removeChild(addToCartButtonElement);
                    // 4.2.2 Supression du message d'alerte (s'il existe)
                    if (document.querySelector(".product-page__form").contains(newAlertPElement)) {
                        document.querySelector(".product-page__form").removeChild(newAlertPElement)
                    }
                    // 4.2.3 Création du message qui apparait suite à l'utilisation du bouton Ajouter au panier
                    productSectionElement.innerHTML += `
            <div class="product-page__success">
            <p class="product-page__success-message">Le produit a bien été ajouté au panier</p>
            <a class="product-page__success-link product-link" href="./index.html#products-section">< Continuer mes achats</a>
            <a class="product-page__success-link cart-link" href="./cart.html">Voir mon panier ></a>
            </div>`;
                }
            });
    })
    .catch((error) => console.error("L'erreur provient de l'appel à l'API", error))
