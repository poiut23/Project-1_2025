$(document).ready(function() {
    const form = $('#signup');
    form.on('submit', function (e) {
        alert("SUBMISSION COMPLETE, YOU'RE A HERO AMONG PUPPIES!!!");
    });

    
    $('.navItem').hover(function() {
        $(this).children('.dropDown-Content').slideDown(200);
    }
    , function() {
        $(this).children('.dropDown-Content').slideUp(200);
    });

});
