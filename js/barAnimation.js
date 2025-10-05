const barAnimation = document.querySelector(".works__content");

barAnimation.addEventListener("mouseenter", () => {
    barAnimation.style.animationPlayState = "running";
});

barAnimation.addEventListener("mouseleave", () => {
    barAnimation.style.animationPlayState = "paused";
});
