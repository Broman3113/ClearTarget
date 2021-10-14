import carousel from "./modules/carousel";
import modals from "./modules/modals";
import floatButton from "./modules/floatButton";
import WOW from "./modules/wow.min";
import VanillaTilt from "./modules/vanilla-tilt.min";

window.addEventListener("DOMContentLoaded", () => {
    carousel(".carousel-item",
        ".carousel-actions-button--prev",
        ".carousel-actions-button--next",
        ".carousel-item-reviews-sheet",
        ".carousel-item-over",
        ".img-wrapper",
        ".carousel-item-reviews-review",
        ".carousel-read-more");
    modals();
    floatButton(".hero .btn-filled");
    new WOW().init();
})

