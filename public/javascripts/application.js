$(document).ready(function() {
    $('#bg').load(function() {
        $(this).fadeIn(2000, function() {
            $('#content, #title').fadeIn(2000, function() {
                $('#date').fadeIn(1000);
            });
        });
    });
});

