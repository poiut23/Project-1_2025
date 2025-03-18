$(document).ready(() => {
    const form = $('#signup');
    form.on('submit', function (e) {
        alert("SUBMISSION COMPLETE, YOU'RE A HERO AMONG PUPPIES!!!");
    });

    const $menuButton = $('.menu-button');
    const $navDropdown = $('#nav-dropdown');

    $menuButton.on('click', () => {
        $navDropdown.toggle(); // Use toggle to show/hide the dropdown
    });

    $navDropdown.on('mouseleave', () => {
        $navDropdown.hide();
    });

});
