// Function to unfold/fold the menu navigation bar
const menuBarsElement = document.querySelector(".bars-button");
const menuElement = document.querySelector(".menu-navbar");
menuBarsElement.addEventListener("click", () => {
    if (menuElement.classList.contains("folded")) {
        menuElement.classList.replace("folded", "unfolded");
    } else {
        menuElement.classList.replace("unfolded","folded");
    }
    })

