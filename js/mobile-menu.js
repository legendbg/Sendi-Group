const menuMobile = document.querySelector(".menu-mobile");
const menuButton = document.querySelector(".header__burger");
const header = document.querySelector(".header");
const body = document.querySelector("body")

const subMenuButton = document.querySelector(".link-sub-menu");
const subMenuContent = document.querySelector(".link-submenu__content");

const menuList = document.querySelector(".menu-mobile__list");
const subMenuButtons = document.querySelectorAll(".open-menu");
const menusContent = document.querySelectorAll(".content-menu");

menuButton.addEventListener("click", (e) => {
    menuMobile.classList.toggle("active-menu");
    header.classList.toggle("active");
    body.classList.toggle("active")
});

subMenuButton.addEventListener("click", (e) => {
    subMenuButton.classList.toggle("active");
    subMenuContent.classList.toggle("active");
});

subMenuButtons.forEach((subMenuButton) =>
    subMenuButton.addEventListener("click", (e) => {
        menuList.classList.add("hide");

        menusContent.forEach((menuContent) => {
            if (subMenuButton.getAttribute("data-sub-menu") === menuContent.getAttribute("data-sub-menu")) {
                const exitButton = menuContent.querySelector(".content-menu__back");

                menuContent.classList.add("active");

                exitButton.addEventListener("click", (e) => {
                    menuList.classList.remove("hide");
                    menusContent.forEach(el => el.classList.remove("active"));
                });
            }
        });
    })
);
