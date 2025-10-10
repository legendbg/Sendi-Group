const contactsPopupButtons = document.querySelectorAll(".contact-popup-button");
const contactsPopup = document.querySelector(".feedback-popup");
const closeContactsPopup = document.querySelector(".feedback-popup__cross");

contactsPopupButtons.forEach((el) =>
    el.addEventListener("click", (e) => {
        contactsPopup.classList.add("show");
        document.body.classList.add("active")
    })
);

closeContactsPopup.addEventListener("click", (e) => {
    contactsPopup.classList.remove("show");
    document.body.classList.remove("active")
})

document.addEventListener("click", (e) => {
    if (e.target === contactsPopup) {
        contactsPopup.classList.remove("show");
        document.body.classList.remove("active")
    }
})