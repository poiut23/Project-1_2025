$(document).ready(() => {
    const form = $('#signup');
    form.on('submit', function (e) {
        alert("SUBMISSION COMPLETE, YOU'RE A HERO AMONG PUPPIES!!!");
    });

    $('.dropDown-menu').mouseover(function () {
        $(this).find('.dropDown-content').css('display', 'block');
    });

});
