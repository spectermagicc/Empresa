$(document).ready(function () {
    var inicio = $('#inicio').offset().top,
        servicios = $('#servicios').offset().top,
        nosotros = $('#nosotros').offset().top,
        contacto = $('#contacto').offset().top;

    $('#btn-inicio').on('click', function () {
        $('html, body').animate({
            'scrollTop': inicio
        }, 1500);
    });

    $('#btn-servicios').on('click', function () {
        $('html, body').animate({
            'scrollTop': servicios
        }, 1500);
    });

    $('#btn-nosotros').on('click', function () {
        $('html, body').animate({
            'scrollTop': nosotros
        }, 1500);
    });

    $('#btn-contacto').on('click', function () {
        $('html, body').animate({
            'scrollTop': contacto
        }, 1500);
    });

});