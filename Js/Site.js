$(document).ready(function() {
    const form = $('#signup');
    form.on('submit', function (e) {
        alert("SUBMISSION COMPLETE, YOU'RE A HERO AMONG PUPPIES!!!");
    });

    $(".menu-dropdown").on("click", function () {
        $(".nav-dropdown").toggle();
      })

      $(document).on("click", function (e) {
        if (!$(e.target).closest('.menu-dropdown, .nav-dropdown').length) {
            $(".nav-dropdown").hide();
        }
    });


    });
    