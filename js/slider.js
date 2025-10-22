const homeSlider = new Swiper(".home-slider", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    navigation: {
        prevEl: ".prev-home",
        nextEl: ".next-home",
    },
    pagination: {
        el: ".home-pagination",
    },
    on: {
        slideChangeTransitionEnd: function () {
            const nextButton = document.querySelector(".next-home");

            nextButton.classList.add("active");
        },
        slideChangeTransitionStart: function () {
            const nextButton = document.querySelector(".next-home");

            nextButton.classList.remove("active");
        },
    },
});

const swiper = new Swiper(".works-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".next-work",
        prevEl: ".prev-work",
    },
        breakpoints: {
        1250: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 3
        },
        528: {
            slidesPerView: 2,
        },
    },
});

homeSlider.on("slideTransitionEnd", function () {
    console.log("okay");
});

const whoSlider = new Swiper(".who-slider", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: ".who-pagination",
    },
});

const popupSlider = new Swiper(".popup-slider", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: ".pagination-popup",
    },
    navigation: {
        prevEl: ".prev",
        nextEl: ".next",
    },
});

const goodSlider = new Swiper(".goods__slider", {
    slidesPerView: 0.6,
    spaceBetween: 10,
    loop: false,
    navigation: {
        prevEl: ".prev-good",
        nextEl: ".next-good",
    },
    on: {
        init: function () {
            if (this.slides.length <= this.params.slidesPerView) {
                this.navigation.prevEl.classList.add("swiper-button-disabled");
            }
        },
    },
    breakpoints: {
        1530: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 0.8,
            spaceBetween: 30,
        },
    },
});

const productSlider = new Swiper(".products__slider", {
    slidesPerView: 0.6,
    spaceBetween: 10,
    loop: false,
    navigation: {
        prevEl: ".prev-products",
        nextEl: ".next-products",
    },
    on: {
        init: function () {
            if (this.slides.length <= this.params.slidesPerView) {
                this.navigation.prevEl.classList.add("swiper-button-disabled");
            }
        },
    },
    breakpoints: {
        1530: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 0.8,
            spaceBetween: 30,
        },
    },
});
