$.ajaxSetup({ 
  'beforeSend': function(xhr) {xhr.setRequestHeader("Accept", "text/javascript")}
})

$.fn.activate = function(callback) {
    if ($(this).is(':visible')) {
      return;
    }
    $(".section:visible").fadeOut(1000);
    $(this).fadeIn(2000, callback);
}

$.fn.apply = function() {
  return this;
};


function clearActiveSectionLink() {
    $('a.section-link.active').removeClass('active');
}

function clearActiveSubSectionLink() {
    $('a.subsection-link.active').removeClass('active');
}

function activateFooter() {
  $('#footer, #title').fadeIn(2000, function() {
      $('#date, #links').fadeIn(1000);
  });
}

$(document).ready(function() {
    var hash = document.location.hash;
    if (hash && hash.length > 0 && $(hash + '.section')) {
      $(hash).activate(activateFooter);
    }
    else {
      $('#bg').load(function() {
          $(this).activate(activateFooter);
      });
    }

    $('#title a').click(function(e) {
        e.preventDefault();
        $('#bg').activate(clearActiveSectionLink);
        document.location.hash = '';
    });

    $('a.section-link').click(function(e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
            return;
        }
        var section = $(this).attr('href');
        clearActiveSectionLink();
        $(this).addClass('active');
        var sectionId = '#' + section;
        $(sectionId).activate();
        document.location.hash = sectionId;
    });
    $('#rsvp form').submit(function(e) {
        e.preventDefault();
        if ($('#guest_name input').val() == '') {
          $('#guest_name .form-error').fadeIn();
          return false;
        }
        $.post(this.action, $(this).serialize(), null, "script");
        return false;
    });
});
