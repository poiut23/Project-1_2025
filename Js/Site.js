$(document).ready(function() {
   


    const form = $('#signup'); 
    form.on('submit', function (e) {
        alert("SUBMISSION COMPLETE, YOU'RE A HERO AMONG PUPPIES!!!");
    });


// Dropdown menu
    $(".menu-dropdown").on("click", function () {
        $(".nav-dropdown").toggle();
      })
// Close the dropdown menu if the user clicks outside of it
      $(document).on("click", function (e) {
        if (!$(e.target).closest('.menu-dropdown, .nav-dropdown').length) {
            $(".nav-dropdown").hide();
        }
    });


    });
    