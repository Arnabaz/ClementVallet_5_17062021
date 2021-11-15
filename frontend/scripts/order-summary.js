/* --- Affichage du récapitulatif de commande comprenant le n° de commande envoyé par l'API et le prix total de la commande sur la page order --- */
// --- Déclaration des variables ---
const orderData = JSON.parse(localStorage.getItem("order"));
const totalPriceOrder = JSON.parse(localStorage.getItem("totalPrice"));

// --- Déclaration de fonction ---
// Fonction d'affichage du récapitulatif de la commande
function orderSummary() {
    if (orderData == null) {
        // Ajouter du texte au loading-spinner
        document.querySelector(".loading-spinner").innerHTML += `
        <span class="loading-spinner-text">Redirection vers la page d'accueil</span>
        `;
        // Rediriger l'utilisateur vers la page d'accueil
        document.location.href = "./index.html";
    } else {
        // Afficher les informations de la commande client
        document.querySelector("main").innerHTML += `    
    <section class="order-section">
        <header>
            <h2 class="order-section__title section-title">Récapitulatif de votre commande</h2>
        </header>
        <article class="order-section__text">
            <h3>Orinoako vous remercie de votre commande !</h3>
            <p class="order-section__text-message">
                Nous avons le plaisir de vous informer que votre commande a bien été enregistrée.<br/>
                Vos meubles en chêne arriveront bientôt chez vous.<br/>
                Vous trouverez ci-dessous le récapitulatif de votre commande.<br/>
                Nous espérons vous revoir très vite chez Orinako !<br/>
                <em>L'équipe Orinoako</em>
            </p>
            <div class="order-section__order-summary">
                <h3>Récapitulatif de votre commande</h3>
                <p class="order-section__order-number">Numéro de commande : <strong>${orderData.orderId}</strong></p>
                <p class="order-section__order-price">Montant total de votre commande : <strong>${formatPrice(totalPriceOrder)} €</strong></p>
            </div>
        </article>
        <a class="order-section__return-button" href="./index.html">Retour à l'accueil</a>
    </section>`;
        // Vider le panier et le localStorage
        localStorage.clear();
    }
}
orderSummary();