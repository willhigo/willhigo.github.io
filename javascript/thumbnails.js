(function ($) {
    var lightbox = lity();

    $('.thumbnail-container')
        .on('mouseover', function () {
            var player = new Vimeo.Player($(this).find('.player'));

            player.play();
            $(this).find('.thumbnail').addClass('transparent');
        })
    .on('mouseleave', function () {
        var player = new Vimeo.Player($(this).find('.player'));

        $(this).find('.thumbnail').removeClass('transparent');
        player.pause();
    })
    .on('click', function () {
        var player = new Vimeo.Player($(this).find('.player'));

        player.pause();
        lightbox('//vimeo.com/' + $(this).find('.player').data('vimeo-id'));
    });
}(jQuery));
