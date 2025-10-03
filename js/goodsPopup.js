const goodsPopupButtons = document.querySelectorAll(".good-popups-button");
const goodPopups = document.querySelectorAll(".good-popup");

goodsPopupButtons.forEach((popupButton) =>
    popupButton.addEventListener("click", (e) => {
        e.preventDefault();

        goodPopups.forEach((popup) => {
            if (popupButton.getAttribute("popup-data") === popup.getAttribute("popup-data")) {
                const closePopup = popup.querySelector(".good-popup__cross");

                console.log(closePopup);

                popup.classList.add("show");

                closePopup.addEventListener("click", (e) => {
                    popup.classList.remove("show");
                });

                document.addEventListener("click", (e) => {
                    if (e.target === popup) {
                        popup.classList.remove("show");
                    }
                });
            }
        });
    })
);
