let toggleBtn = document.getElementById('toggle-btn');
let navEl = document.querySelector('header .nav-tab');
let aboutEl = document.querySelector('header #about-btn');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('fa-close');
    navEl.classList.toggle('active');
    // aboutEl.classList.toggle('active');
})

const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
    autoplay: {
        delay: 500,
    },
    // loop: true,
    a11y: {
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
    },

    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },

    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        1240: {
            slidesPerView: 6,
            spaceBetween: 20,
        }
    },
    // breakpointsBase: 'container',
    direction: 'horizontal',

    roundLengths: true,
});
