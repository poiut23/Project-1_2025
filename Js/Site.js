$(document).ready(function() {
    const form = $('#signup');
    form.on('submit', function (e) {
        alert("SUBMISSION COMPLETE, YOU'RE A HERO AMONG PUPPIES!!!");
    });

    const $menuButton = $('#dropDown-Button');
    const $navDropdown = $('.dropdown-content');

    $menuButton.on('click', function() {
        $navDropdown.toggle(); // Use toggle to show/hide the dropdown
    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest('.dropdown').length) {
            $navDropdown.hide(); // Hide the dropdown if clicked outside
        }
    });
});