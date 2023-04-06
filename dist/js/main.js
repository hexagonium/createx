$(function () {
    Fancybox.bind();

    var config = {
        animation: {
            duration: 300,
            effects: "fade"
        }
    }
    var mixer = mixitup('.c-cards', config);

    $('.c-filter__button').on('click', function name(event) {
        $('.c-filter__button').removeClass('c-filter__button_active')
        $(this).addClass('c-filter__button_active')
    })
})