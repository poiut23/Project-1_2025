$(document).ready(function() {
    const form = $('#signup');
    form.on('submit', function (e) {
        alert("SUBMISSION COMPLETE, YOU'RE A HERO AMONG PUPPIES!!!");
    });

    $('#dropDown-Button').on('mouseenter', () => {
        $('.dropDown-Content').show();
    });

    $('#dropDown-Button').on('mouseleave', () => {
        $('.dropDown-Content').hide();
    });


});