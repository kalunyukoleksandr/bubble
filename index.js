$(function ($) {
    $("img.lazy").Lazy();
    $(".js-burger").on('click', function () {
        $(".js-navigation").slideToggle();
    });
});