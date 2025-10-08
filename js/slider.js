const homeSlider = new Swiper(".home-slider", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: ".home-pagination",
    },
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
