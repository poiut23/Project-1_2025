$(document).ready(function() {
    const form = $('#signup');
    form.on('submit', function (e) {
        alert("SUBMISSION COMPLETE, YOU'RE A HERO AMONG PUPPIES!!!");
    });

    const $menuButton = $('#dropDown-Button');
    const $navDropdown = $('.dropdown-content');

    $menuButton.on('mouseenter', function() {
        $navDropdown.show(); // Show the dropdown when the mouse enters the button
    });

    $('.dropdown').on('mouseleave', function() {
        $navDropdown.hide(); // Hide the dropdown when the mouse leaves the dropdown area
    });
});