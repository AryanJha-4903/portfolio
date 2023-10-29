const togglebtn = document.querySelector('.toggle');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const dropDownMenu = document.querySelector('.dropdown-menu');
const topbar = document.querySelector('.topbar');

togglebtn.addEventListener('click', function() {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    menuIcon.style.display = isOpen ? 'none' : 'block';
    closeIcon.style.display = isOpen ? 'block' : 'none';
});

window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        topbar.classList.add('scrolled');
    } else {
        topbar.classList.remove('scrolled');
    }
});
