$(document).ready(function() {
    $('#lightSlider').lightSlider({
        gallery: true,
        item: 1,
        loop: true,
        slideMargin: 0,
        thumbItem: 9
    });

    // Abrir el modal al hacer clic en una imagen
    $('#lightSlider li').on('click', function() {
        var imgSrc = $(this).find('img').attr('src');
        $('#modalImg').attr('src', imgSrc);
        $('#myModal').css('display', 'block');
    });

    // Cerrar el modal al hacer clic en el botón de cierre
    $('.close').on('click', function() {
        $('#myModal').css('display', 'none');
    });
});