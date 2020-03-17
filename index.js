$(function ($) {
    $("img.lazy").Lazy();
    $(".js-burger").on('click', function () {
        $(".js-navigation").slideToggle();
    });
    $('#game').append(`
    <iframe src="https://storage.googleapis.com/bubble_shooter_web/index.html"
                                          height="600" width="700" resize="both" overflow="auto" data-layertype="html"
                                          data-stylerecorder="true"
                                          style="height: 595px; width: 694px; text-align: inherit; line-height: 22px; letter-spacing: 0px; font-weight: 300; font-size: 20px; border-color: rgb(255, 255, 255); border-style: none; margin: 0px; border-radius: 0px; padding: 0px;">
                                        </iframe>
                                        `);
});