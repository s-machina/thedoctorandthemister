$.fn.activate = function(callback) {
    if ($(this).is(':visible')) {
      return;
    }
    $(".section:visible").fadeOut(1000);
    $(this).fadeIn(2000, callback);
}

function clearActiveSectionLink() {
    $('a.section-link.active').removeClass('active');
}

function clearActiveSubSectionLink() {
    $('a.subsection-link.active').removeClass('active');
}

$(document).ready(function() {
    $('#bg').load(function() {
        $(this).activate(function() {
            $('#footer, #title').fadeIn(2000, function() {
                $('#date, #links').fadeIn(1000);
            });
        });
    });

    $('#title a').click(function(e) {
        e.preventDefault();
        $('#bg').activate(clearActiveSectionLink);
    });

    $('a.section-link').click(function(e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
            return;
        }
        var section = $(this).attr('href');
        clearActiveSectionLink();
        $(this).addClass('active');
        $('#' + section).activate();
    });
});
