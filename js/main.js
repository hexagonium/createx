$(function () {
    Fancybox.bind();

    var mixer = mixitup('.c-cards');

    $('.c-filter__button').on('click', function name(event) {
        $('.c-filter__button').removeClass('c-filter__button_active')
        $(this).addClass('c-filter__button_active')
    })
})