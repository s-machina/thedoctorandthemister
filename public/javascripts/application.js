$(document).ready(function() {
    $('#bg').load(function() {
        $(this).fadeIn(1000, function() {
            $('#content').fadeIn(2000, function() {
                $('#title').fadeIn(3000, function() {
                    $('#date').fadeIn(1000);
                });
            });
        });
    });
});

