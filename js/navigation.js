const menux = document.querySelectorAll(".link-header");
const sections = document.querySelectorAll("section");

menux.forEach((e, i, a) => {
    e.addEventListener("click", (e) => {
        e.preventDefault();

        for (let i = 0; i < sections.length; i++) {
            if (e.target.id === sections[i].classList[0]) {
                const y = sections[i].getBoundingClientRect().top + window.scrollY + -100;

                menuMobile.classList.remove("active-menu");
                header.classList.remove("active");
                body.classList.remove("active");

                window.scrollTo({ top: y, behavior: "smooth" });
            }
        }
    });
});
