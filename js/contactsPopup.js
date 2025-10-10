const contactsPopupButtons = document.querySelectorAll(".contact-popup-button");
const contactsPopup = document.querySelector(".feedback-popup");
const closeContactsPopup = document.querySelector(".feedback-popup__cross");

contactsPopupButtons.forEach((el) =>
    el.addEventListener("click", (e) => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        console.log(scrollbarWidth);

        document.body.style.paddingRight = `${scrollbarWidth}px`;
        header.style.paddingRight = `${scrollbarWidth}px`;

        contactsPopup.classList.add("show");
        document.body.classList.add("active");
    })
);

closeContactsPopup.addEventListener("click", (e) => {
    document.body.style.paddingRight = `0px`;
    header.style.paddingRight = `0px`;

    contactsPopup.classList.remove("show");
    document.body.classList.remove("active");
});

document.addEventListener("click", (e) => {
    if (e.target === contactsPopup) {
        document.body.style.paddingRight = `0px`;
        header.style.paddingRight = `0px`;

        contactsPopup.classList.remove("show");
        document.body.classList.remove("active");
    }
});
