/*
Page Produit - Bouton Add tot cart
Fonction qui permet de faire rentrer le produit sélectionné et personnalisé dans l'objet Panier
L'objet Panier sera réutilisé dans la page Cart pour afficher le panier de commande du client
 */

// Utiliser l'id du produit pour communiquer avec l'API les infos utiles (prix surtout)
// Récupérer le prix du produit et le stocker dans l'objet Panier (stocké dans le localStorage)
//
let productData;
function setAddToCart () {
    const addToCartLink = document.querySelector(".product-page__add-to-cart");
    let params = new URLSearchParams(document.location.search);
    let idProduct = params.get("id");
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
            addToCartLink.addEventListener("click", (e) => {
            e.preventDefault();
                // Ajout du produit au panier
                    // Vérification que le vernis a bien été choisi par le client
                const varnishCustomSelect = document.getElementById("varnish-choice");
                if (varnishCustomSelect.value === "") {
                    alert("Sélectionner un vernis s'il vous plait");
                } else {
                    let objectCustomProduct = new CustomProduct (
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

                }

            })
        })
}
setAddToCart();
