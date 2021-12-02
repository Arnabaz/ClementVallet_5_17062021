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
    // Initialisation de la variable "eror" pour le comptage du nombre d'erreur
    let error = 0;
    // Comptage du nombre d'erreurs dans le formulaire de commande
    if (!regexName.test(contact.firstName)) {
        error++;
        document.querySelector(".form-section__input-1").classList.add("red-border");
    } else if (document.querySelector(".form-section__input-1").classList.contains("red-border")) {
        document.querySelector(".form-section__input-1").classList.remove("red-border");
    }
    if (!regexName.test(contact.lastName)) {
        error++;
        document.querySelector(".form-section__input-2").classList.add("red-border");
    } else if (document.querySelector(".form-section__input-2").classList.contains("red-border")) {
        document.querySelector(".form-section__input-2").classList.remove("red-border");
    }
    if (!regexAddress.test(contact.address)) {
        error++;
        document.querySelector(".form-section__input-3").classList.add("red-border");
    } else if (document.querySelector(".form-section__input-3").classList.contains("red-border")) {
        document.querySelector(".form-section__input-3").classList.remove("red-border");
    }
    if (!regexCity.test(contact.city)) {
        error++;
        document.querySelector(".form-section__input-4").classList.add("red-border");
    } else if (document.querySelector(".form-section__input-4").classList.contains("red-border")) {
        document.querySelector(".form-section__input-4").classList.remove("red-border");
    }
    if (!regexEmail.test(contact.email)) {
        error++;
        document.querySelector(".form-section__input-5").classList.add("red-border");
    } else if (document.querySelector(".form-section__input-5").classList.contains("red-border")) {
        document.querySelector(".form-section__input-5").classList.remove("red-border");
    }
    if (!checkBox.checked) {
        error++;
        document.querySelector(".form-section__label-6").classList.add("red-border");
    } else if (document.querySelector(".form-section__label-6").classList.contains("red-border")) {
        document.querySelector(".form-section__label-6").classList.remove("red-border");
    }

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
    } else {
        if (document.querySelector(".form-section__form").contains(document.querySelector(".form-section__alert")) === false) {
            let textAlertContent;
            let referentElement = document.querySelector(".form-section__button");
            let parentElement = document.querySelector(".form-section__form");
            let elementNameVariable = document.createElement("p");
                elementNameVariable.classList.add("form-section__alert");
            textAlertContent = document.createTextNode("Afin de valider votre commande, merci de correctement renseigner l'entièreté du formulaire.");
            elementNameVariable.appendChild(textAlertContent);
            parentElement.insertBefore(elementNameVariable, referentElement);
    } else {
        document.querySelector(".form-section__form").removeChild(document.querySelector(".form-section__alert"));
    }
    }

})