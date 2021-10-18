/*
Page Produit - Bouton Add tot cart
Fonction qui permet de faire rentrer le produit sélectionné et personnalisé dans l'objet Panier
L'objet Panier sera réutilisé dans la page Cart pour afficher le panier de commande du client
 */

// Utiliser l'id du produit pour communiquer avec l'API les infos utiles (prix surtout)
// Récupérer le prix du produit et le stocker dans l'objet Panier (stocké dans le localStorage)
//
let productData;
let productWish;
class CustomCart {
    constructor(id, name, price, quantity, color) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.color = color;
    }
}
let customCart;

setAddToCart = function () {
    let params = new URLSearchParams(document.location.search);
    let idProduct = params.get("id");
    const addToCartLink = document.querySelector(".product-page__add-to-cart");


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
            addToCartLink.addEventListener("click", () => {
                customCart = new CustomCart (productData._id, productData.name, productData.price, 1, "tan");
                localStorage.customCart = JSON.stringify(customCart);
            })
        })


}
setAddToCart();