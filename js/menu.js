document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('header .menu ul');

    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });
});
