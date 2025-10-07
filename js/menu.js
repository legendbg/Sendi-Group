const menuButtons = document.querySelectorAll(".link-menu");
const menus = document.querySelectorAll(".menu");

menuButtons.forEach((menuButton) => {
    menuButton.addEventListener("click", (e) => {
        e.preventDefault();

        if (e.target.classList.contains("active")) {
            e.target.classList.remove("active");
            menus.forEach((el) => el.classList.remove("show"));

            return;
        }

        menus.forEach((el) => el.classList.remove("show"));
        menuButtons.forEach((el) => el.classList.remove("active"));

        menus.forEach((menu) => {
            if (menuButton.getAttribute("data-menu") === menu.getAttribute("data-menu")) {
                menu.classList.add("show");
                menuButton.classList.add("active");

                document.addEventListener("click", (e) => {
                    if (e.target === menu) {
                        menu.classList.remove("show");
                        menuButton.classList.remove("active")
                    }
                });
            }
        });
    });
});

