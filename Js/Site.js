$(document).ready(() => {
    const form = $('#signup');
    form.on('submit', function (e) {
        alert("SUBMISSION COMPLETE, YOU'RE A HERO AMONG PUPPIES!!!");
    });

    $('#Menu').on('click', () => {
        $('#dropDown-Content').show();
    });

    $('.dropDown-Content').on('mouseleave', function () {
        $(this).hide();
    });

});
