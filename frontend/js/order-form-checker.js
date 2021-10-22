/* --- Affichage du formulaire de commande et masquage du bouton de validation panier --- */
/*

Contrôle en temps réél des informations entrées dans le formulaire de commande

 */

// --- Déclaration des variables ---
const cartValidatorElement = document.querySelector(".cart-section__button"); // Variable pour viser le bouton de validation du panier
const orderFormElement = document.querySelector(".form-section__form") // Variable pour viser le formulaire de commande


const orderButtonElement = document.getElementById("order-button");
const regexName = /([A-Z])\w+/;
const regexAddress = /^[a-zA-Z0-9\s,'-]*$/;
const regexCity = /([A-Z])\w+/;
const regexEmail = /^\S+@\S+\.\S+$/;
const checkBox = document.getElementById("cgv-agreement");

// --- Déclaration de fonction
// Fonction d'affichage du formulaire de commande et masquage du bouton de validation du panier
function orderFormDisplaying () {
cartValidatorElement.addEventListener("click", (e) => {
    e.preventDefault();
    orderFormElement.classList.remove("d-none");
})}
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
orderFormElement.addEventListener("submit", (submitEvent) => {
    console.log("1", submitEvent);
})

orderButtonElement.addEventListener("click", (event) => {

    let contact = {
        firstName: document.getElementById("first-name").value,
        lastName: document.getElementById("last-name").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        email: document.getElementById("email-order").value,
    };
    if (
        (regexName.test(contact.firstName) === true) &&
        (regexName.test(contact.lastName) === true) &&
        (regexAddress.test(contact.address) === true) &&
        (regexCity.test(contact.city) === true) &&
        (regexEmail.test(contact.email) === true) &&
        (checkBox.checked === true)
    ) {
event.preventDefault();
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
                document.location.href = "order.html";
            })
            .catch((error) => console.log("error : " + error));
    } else {
        alert(
            "Veuillez correctement renseigner l'entièreté du formulaire pour valider votre commande."
        );
    }
})