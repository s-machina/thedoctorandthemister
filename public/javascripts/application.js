$(document).ready(function() {
    $('#bg').load(function() {
        $(this).show();
        $('#content').show();
        $('#title').fadeIn(3000, function() {
            $('#date').fadeIn(1000);
        });
    });
});

