const homeSlider = new Swiper('.home-slider', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: ".home-pagination"
    }
})

const whoSlider = new Swiper('.who-slider', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: ".who-pagination"
    }
})