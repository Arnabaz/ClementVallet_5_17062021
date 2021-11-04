/* --- Affichage du formulaire de commande et masquage du bouton de validation panier --- */
/*

Contrôle en temps réél des informations entrées dans le formulaire de commande

 */

// --- Déclaration des variables ---
const cartValidatorElement = document.querySelector(".cart-section__button"); // Variable pour viser le bouton de validation du panier
const orderFormElement = document.querySelector(".form-section__form") // Variable pour viser le formulaire de commande


const orderButtonElement = document.getElementById("order-button");
const regexName = /^[a-zàâäéèêëîïöôüûù ,.'-]+$/i;
const regexAddress = /^[a-zA-Z0-9\s,'-]*$/;
const regexCity = /([A-Za-z])\w+/;
const regexEmail = /^\S+@\S+\.\S+$/;
const checkBox = document.getElementById("cgv-agreement");
let alertOrder;

// --- Déclaration de fonction
// Fonction d'affichage du formulaire de commande et masquage du bouton de validation du panier
function orderFormDisplaying() {
    cartValidatorElement.addEventListener("click", (e) => {
        e.preventDefault();
        orderFormElement.classList.remove("d-none");
        cartValidatorElement.classList.replace("cart-section__button", "cart-section__inactivated-button")
    })
}
orderFormDisplaying();

/* En cours de construction
// Fonction d'affichage d'une erreur de complétion du champ du formulaire de commande
function errorMessageDisplaying (tag, message, valid) {
    const
}

// Fonction de contrôle du prénom
const firstNameChecker = (value) => {
    if (!value.match(/^[a-zA-Z_.-]*$/)) {
        errorMessageDisplaying("Le prénom doit uniquement contenir des lettres");
    }
};

// Fonction de contrôle du nom
const lastNameChecker = (value) => {
    console.log(value);
};

// Fonction de contrôle de l'adresse
const addressChecker = (value) => {
    console.log(value);
};

// Fonction de contrôle de la ville
const cityChecker = (value) => {
    console.log(value);
}

// Fonction de contrôle de l'email
const emailChecker = (value) => {
    console.log(value);
};

// Fonction de contrôle de la checkbox
const cgvChecker = (value) => {
    console.log(value);
};


// Contrôle du formulaire de commande en temps réel :
const inputsOrderForm = document.querySelectorAll(".form-section__input");
inputsOrderForm.forEach((inputOrderForm) => {
    inputOrderForm.addEventListener("input", (events) => {
        switch (events.target.id) {
            case "first-name":
                firstNameChecker(events.target.value);
                break;
            case "last-name":
                lastNameChecker(events.target.value);
                break;
            case "address":
                addressChecker(events.target.value);
                break;
            case "city":
                cityChecker(events.target.value);
                break;
            case "email-order":
                emailChecker(events.target.value);
                break;
            case "cgv-agreement":
                cgvChecker(events.target.checked);
                break;
            default:
                null;
        }
    })
})

*/


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
    console.log("1", regexName.test(contact.firstName));
    console.log("2", regexName.test(contact.lastName));
    console.log("3", regexAddress.test(contact.address));
    console.log("4", regexCity.test(contact.city));
    console.log("5", regexEmail.test(contact.email));
    console.log("6", checkBox.checked);
    // Vérification des données entrées par le client
    if (
        (regexName.test(contact.firstName) === true) &&
        (regexName.test(contact.lastName) === true) &&
        (regexAddress.test(contact.address) === true) &&
        (regexCity.test(contact.city) === true) &&
        (regexEmail.test(contact.email) === true) &&
        (checkBox.checked === true)
    ) {
        // Si tout est OK, on pousse les id des produits vers l'array products avant envoi à l'API
        let products = [];
        for (let i = 0; i < cart.length; i++) {
            products.push(cart[i].id);
        }

        // Envoi des données à l'API avec post
        fetch("http://localhost:3000/api/furniture//order", {
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
            .catch((error) => console.log("error : " + error));
    } else {
        if (document.querySelector(".form-section__form").contains(document.querySelector(".form-section__alert")) === false) {
            alertDisplay(alertOrder, "form-section__alert", "Afin de valider votre commande, merci de correctement renseigner l'entièreté du formulaire.", ".form-section__button", ".form-section__form");
        } else {
            document.querySelector(".form-section__form").removeChild(document.querySelector(".form-section__alert"));
        }
    }
})