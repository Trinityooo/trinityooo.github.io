const carousellSwiper = new Swiper("#carousellSwiper", {
    // Optional parameters
    loop: true,
    // direction: 'vertical',

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});

const productSwiper = new Swiper("#productSwiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});