const menuButtons = document.querySelectorAll(".link-menu");
const menus = document.querySelectorAll(".menu");

menuButtons.forEach((menuButton) => {
    menuButton.addEventListener("click", (e) => {
        e.preventDefault();
    });
});

menuButtons.forEach((menuButton) => {
    menuButton.addEventListener("mouseenter", (e) => {
        e.preventDefault();

        menus.forEach((el) => el.classList.remove("show"));
        menuButtons.forEach((el) => el.classList.remove("active"));

        menus.forEach((menu) => {
            if (menuButton.getAttribute("data-menu") === menu.getAttribute("data-menu")) {
                menu.classList.add("show");
                menuButton.classList.add("active");

                document.addEventListener("click", (e) => {
                    if (e.target === menu) {
                        menu.classList.remove("show");
                        menuButton.classList.remove("active");
                    }
                });

                menu.addEventListener("mouseleave", (e) => {
                    menu.classList.remove("show");
                    menuButton.classList.remove("active");
                });

                menuButton.addEventListener("click", (e) => {
                    menu.classList.remove("show");
                    menuButton.classList.remove("active");
                });
            }
        });
    });

    menuButton.addEventListener("mouseleave", (e) => {
        menus.forEach((el) => el.classList.remove("show"));
        menuButtons.forEach((el) => el.classList.remove("active"));
    });
});
