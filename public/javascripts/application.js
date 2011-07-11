$.fn.activate = function(callback) {
    if ($(this).is(':visible')) {
      return;
    }
    $(".section:visible").fadeOut(1000);
    $(this).fadeIn(2000, callback);
}

$(document).ready(function() {
    $('#bg').load(function() {
        $(this).activate(function() {
            $('#footer, #title').fadeIn(2000, function() {
                $('#date').fadeIn(1000);
            });
        });
    });

    $('a.section-link').click(function(e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
            return;
        }
        var section = $(this).attr('href');
        $('a.section-link.active').removeClass('active');
        $(this).addClass('active');
        $('#' + section).activate();
    });
});
