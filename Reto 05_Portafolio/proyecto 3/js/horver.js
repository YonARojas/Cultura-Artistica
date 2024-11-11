const menuCheckbox = document.getElementById('menu');
const navbarList = document.querySelector('.navbar ul');

menuCheckbox.addEventListener('change', () => {
    if (menuCheckbox.checked) {
        navbarList.style.display = 'flex';
    } else {
        navbarList.style.display = 'none';
    }
});