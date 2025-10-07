const barAnimation = document.querySelector(".works__content");
const mediaQueryList = window.matchMedia("(max-width: 1020px)");

let isRun = true;

if (mediaQueryList) {
    barAnimation.addEventListener("click", (el) => {
        if (isRun) {
            barAnimation.style.animationPlayState = "paused";
            isRun = false;
        } else {
            barAnimation.style.animationPlayState = "running";
            isRun = true;
        }
    });
} else {
    barAnimation.addEventListener("mouseenter", () => {
        barAnimation.style.animationPlayState = "running";
    });

    barAnimation.addEventListener("mouseleave", () => {
        barAnimation.style.animationPlayState = "paused";
    });
}
