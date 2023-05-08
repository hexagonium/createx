$(function () {
    // Видео
    Fancybox.bind()



    // Карточки курсов с фильтром
    var config = {
        animation: {
            duration: 300,
            effects: "fade"
        }
    }
    var mixer = mixitup('.c-cards', config)

    $('.c-filter__button').on('click', function name(event) {
        $('.c-filter__button').removeClass('c-filter__button_active')
        $(this).addClass('c-filter__button_active')
    })



    // Слайдер блока с командой
    $('.t-slider').slick({
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        draggable: false,
        arrows: false,
        waitForAnimate: false
    })

    $('.t-arrow-prev').on('click', function (e) {
        e.preventDefault()

        $('.t-slider').slick('slickPrev')
    })

    $('.t-arrow-next').on('click', function (e) {
        e.preventDefault()

        $('.t-slider').slick('slickNext')
    })



    // Слайдер блока с отзывами
    $('.r-slider').slick({
        slidesToShow: 1,
        draggable: false,
        arrows: false,
        waitForAnimate: false,
        dots: true,
        appendDots: $('.r-dots')
    })

    $('.r-arrow-prev').on('click', function (e) {
        e.preventDefault()

        $('.r-slider').slick('slickPrev')
    })

    $('.r-arrow-next').on('click', function (e) {
        e.preventDefault()

        $('.r-slider').slick('slickNext')
    })
})