/* --- INDEX.JS --- */
/*

    Création et affichage de la section "products-section" de la page d'accueil = liste des produits

*/

// --- Déclaration des variables ---
let product = [];
let products = []; // Variable pour stocker les données produits de l'API
let productsSectionElement = document.querySelector(".products-section");


// --- HOMEPAGE - Affichage de la section Produits ---
// Interroger l'API pour récupérer les données des produits
fetch("http://localhost:3000/api/furniture/")
    // Résolution de la promesse en récupérant une réponse et la convertir en .json
    .then((res) => res.json())
    // Résolution d'une autre promesse
    .then((res) => {
        // Stocker la résolution de la promesse dans la variable products
        products = res;
        // S'il n'y a pas de produits disponibles, afficher l'élément NoProduct
        if (products.length === 0) {
            productsSectionElement.innerHTML += `
            <p class="no-product">Désolé mais nous sommes actuellement en rupture de stock de tous nos produits. Pour vous tenir informés de l’arrivée de nouveaux stocks et de nouveaux produits, n’hésitez pas à vous abonner !</p>
            `;
            // S'il y a des éléments disponibles, afficher la liste des produits
        } else if (products.length > 0) {
            // Boucle pour récupérer les produits un par un
            for (let i = 0; i < products.length; i++) {
                // Insertion de HTML dans le DOM pour afficher la "carte" d'un produit
                productsSectionElement.innerHTML += `
                <article class="products-section__article products-section__article-${i + 1}">
                    <a class="products-section__link products-section__link-${i + 1}" href="./product.html?id=${products[i]._id}">
                        <figure class="product-card product-card-${i + 1}">
                            <img class="product-card__img" src="${products[i].imageUrl}" alt="${products[i].name}"/>
                            <figcaption class="product-card__info product-card__info-${i + 1}">
                            <h3 class="product-card__name">${products[i].name}</h3>
                            <p class="product-card__price">${formatPrice(products[i].price)}</p>
                            </figcaption>
                        </figure>
                    </a>
                </article>
                `;
            }
        }
    })
    // Rejet de la promesse et renvoi de l'erreur vers la console
    .catch((error) => console.error(error));


