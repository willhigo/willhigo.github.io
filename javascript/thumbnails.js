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
        var playerElement = $(this).find('.player'),
            player = new Vimeo.Player(playerElement);

        player.pause();
        if (playerElement.data('vimeo-url')) {
            lightbox(playerElement.data('vimeo-url'))
        } else {
            lightbox('//vimeo.com/' + $(this).find('.player').data('vimeo-id'));
        }
    });
}(jQuery));
