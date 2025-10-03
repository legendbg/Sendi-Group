const inputPopup = document.querySelector(".popup-phone");
const inputContact = document.querySelector(".contact-phone");

window.intlTelInput(inputPopup, {
    loadUtils: () => import("https://cdn.jsdelivr.net/npm/intl-tel-input@25.11.2/build/js/utils.js"),
    autoPlaceholder: "aggressive",
    initialCountry: "ua",
});

window.intlTelInput(inputContact, {
    loadUtils: () => import("https://cdn.jsdelivr.net/npm/intl-tel-input@25.11.2/build/js/utils.js"),
    autoPlaceholder: "aggressive",
    initialCountry: "ua",
});
