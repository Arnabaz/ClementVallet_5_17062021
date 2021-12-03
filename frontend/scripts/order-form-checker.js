/* --- ORDER-FORM-CHECKER  --- */
/*
    Validation des informations entrées dans le formulaire de commande
 */

// --- Déclaration des variables ---
const orderFormElement = document.querySelector(".form-section__form") // Variable pour viser le formulaire de commande
const orderButtonElement = document.getElementById("order-button");

const regexName = /^[a-zàâäéèêëîïöôüûù ,.'-]+$/i;
const regexAddress = /^(([a-zA-ZÀ-ÿ0-9]+[\s\-]{1}[a-zA-ZÀ-ÿ0-9]+)){1,10}$/;
const regexCity = /([A-Za-z])\w+/;
const regexEmail = /^\S+@\S+\.\S+$/;
const checkBox = document.getElementById("cgv-agreement");

// Validation du formulaire de commande
orderButtonElement.addEventListener("click", (event) => {
    event.preventDefault();

    // Création de l'objet contact qui stockera les données entrées par le client
    let contact = {
        firstName: document.getElementById("first-name").value,
        lastName: document.getElementById("last-name").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        email: document.getElementById("email-order").value,
    };
    // Initialisation de la variable "error" pour le comptage du nombre d'erreur
    let error = 0;
    // Comptage du nombre d'erreurs dans le formulaire de commande
    // Prénom
    if (!regexName.test(contact.firstName)) {
        error++;
        document.querySelector(".form-section__input-1").classList.add("red-border");
        document.querySelector(".form-section__label-1").setAttribute("data-error", "Votre prénom ne doit contenir que des lettres");
        if (document.getElementById("first-name").value === "") {
            document.querySelector(".form-section__label-1").setAttribute("data-error", "Veuillez remplir la case 'Prénom'");
        }
    } else if (document.querySelector(".form-section__input-1").classList.contains("red-border")) {
        document.querySelector(".form-section__input-1").classList.remove("red-border");
        document.querySelector(".form-section__label-1").setAttribute("data-error", "");
    }
    // Nom
    if (!regexName.test(contact.lastName)) {
        error++;
        document.querySelector(".form-section__input-2").classList.add("red-border");
        document.querySelector(".form-section__label-2").setAttribute("data-error", "Votre nom ne doit contenir que des lettres");
        document.querySelector(".form-section__input-2").setAttribute("data-error", "Test");
        if (document.getElementById("last-name").value === "") {
            document.querySelector(".form-section__label-2").setAttribute("data-error", "Veuillez remplir la case 'Nom'");
        }
    } else if (document.querySelector(".form-section__input-2").classList.contains("red-border")) {
        document.querySelector(".form-section__input-2").classList.remove("red-border");
        document.querySelector(".form-section__label-2").setAttribute("data-error", "");
        document.querySelector(".form-section__label-2").setAttribute("data-error", "");
    }
    // Adresse
    if (!regexAddress.test(contact.address)) {
        error++;
        document.querySelector(".form-section__input-3").classList.add("red-border");
        document.querySelector(".form-section__label-3").setAttribute("data-error", "Votre adresse n'est pas valable. Elle ne doit contenir que des lettres, des chiffres et le caractère '-'");
        if (document.getElementById("address").value === "") {
            document.querySelector(".form-section__label-3").setAttribute("data-error", "Veuillez remplir la case 'Adresse'");
        }
    } else if (document.querySelector(".form-section__input-3").classList.contains("red-border")) {
        document.querySelector(".form-section__input-3").classList.remove("red-border");
        document.querySelector(".form-section__label-3").setAttribute("data-error", "");
    }
    // Ville
    if (!regexCity.test(contact.city)) {
        error++;
        document.querySelector(".form-section__input-4").classList.add("red-border");
        document.querySelector(".form-section__label-4").setAttribute("data-error", "Votre ville ne doit contenir que des lettres");
        if (document.getElementById("city").value === "") {
            document.querySelector(".form-section__label-4").setAttribute("data-error", "Veuillez remplir la case 'Ville'");
        }
    } else if (document.querySelector(".form-section__input-4").classList.contains("red-border")) {
        document.querySelector(".form-section__input-4").classList.remove("red-border");
        document.querySelector(".form-section__label-4").setAttribute("data-error", "");
    }
    // Email
    if (!regexEmail.test(contact.email)) {
        error++;
        document.querySelector(".form-section__input-5").classList.add("red-border");
        document.querySelector(".form-section__label-5").setAttribute("data-error", "Votre email n'est pas valide.");
        if (document.getElementById("email-order").value === "") {
            document.querySelector(".form-section__label-5").setAttribute("data-error", "Veuillez remplir la case 'Email'");
        }
    } else if (document.querySelector(".form-section__input-5").classList.contains("red-border")) {
        document.querySelector(".form-section__input-5").classList.remove("red-border");
        document.querySelector(".form-section__label-5").setAttribute("data-error", "");
    }
    // CGV
    if (!checkBox.checked) {
        error++;
        document.querySelector(".form-section").setAttribute("data-error", "Pour pouvoir valider le formulaire de commande, veuillez accepter les conditions générales de vente en cochant la case prévue à cet effet.");
    } else document.querySelector(".form-section").setAttribute("data-error", "");


    // Vérification des données entrées par le client
    if (error === 0) {
        // Si tout est OK, on pousse les id des produits vers l'array products avant envoi à l'API
        let products = [];
        for (let i = 0; i < cart.length; i++) {
            products.push(cart[i].id);
        }

        // Envoi des données à l'API avec post
        fetch("http://localhost:3000/api/furniture/order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({contact, products}),
        })
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem("order", JSON.stringify(data));
                localStorage.setItem("totalPrice", JSON.stringify(totalPriceCart));
                document.location.href = "order.html";
            })
            .catch((error) => console.error("error: ", error))
    }
})