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
        lightbox($(this).find('.player').attr('src'));
    });
}(jQuery));
