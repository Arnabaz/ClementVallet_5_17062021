/*
Affichage du formulaire de commande et masquage du bouton de validation

Contrôle en temps réél des informations entrées dans le formulaire de commande
 */

// Fonction d'affichage du formulaire de commande et masquage du bouton de validation du formulaire de commande
const cartValidatorElement = document.querySelector(".cart-section__button");
const orderFormElement = document.querySelector(".form-section__form")

cartValidatorElement.addEventListener("click", (e) => {
    e.preventDefault();
    orderFormElement.classList.remove("d-none");
})

// Validation du formulaire de commande
const orderButtonElement = document.getElementById("order-button");
const regexFirstName = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+))$/;
const regexLastName = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+))$/;
const regexAddress = /^(([a-zA-ZÀ-ÿ0-9]+[\s\-]{1}[a-zA-ZÀ-ÿ0-9]+)){1,10}$/;
const regexCity = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+)){1,10}$/;
const regexEmail = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+)){1,10}$/;
const checkBox = document.getElementById("cgv-agreement");

orderButtonElement.addEventListener("click", (event) => {
    let customData = {
        firstName: document.getElementById("first-name").value,
        lastName: document.getElementById("last-name").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        email: document.getElementById("email").value,
    };
    if (
        (regexName.test(customData.firstName) == true) &
        (regexName.test(customData.lastName) == true) &
        (regexAddress.test(customData.address) == true) &
        (regexCity.test(customData.city) == true) &
        (checkBox.checked == true)
    ) {
event.preventDefault();
// on stocke l'heure et la date de la commande
        const todayDate = new Date();
        let nowadays = todayDate.getDate();
        let month = todayDate.getMonth() + 1;
        let todayHours = todayDate.getHours();
        let todayMinutes = todayDate.getMinutes();

        if (nowadays < 10) {
            nowadays = "0" + nowadays;
        }

        if (month < 10) {
            month = "0" + month;
        }

        if (todayHours < 10) {
            todayHours = "0" + todayHours;
        }

        if (todayMinutes < 10) {
            todayMinutes = "0" + todayMinutes;
        }

        const date = nowadays + "-" + month + "-" + todayDate.getFullYear();
        const hours = todayHours + ":" + todayMinutes;
        const fullDate = { date, hours };
        const infoOrder = JSON.parse(localStorage.getItem("date")) || [];
        infoOrder.push(fullDate);
        localStorage.setItem("date", JSON.stringify(infoOrder));

        let customCartOrdered = [];
        for (let i = 0; i < cart.length; i++) {
            customCartOrdered.push(cart[i].id);
        }

        // on envoie en POST
        fetch("http://localhost:3000/api/furniture//order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({customData, customCartOrdered}),
        })
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem("order", JSON.stringify(data));
                document.location.href = "order.html";
            })
            .catch((erreur) => console.log("erreur : " + erreur));
    } else {
        alert(
            "Veuillez correctement renseigner l'entièreté du formulaire pour valider votre commande."
        );
    }
})