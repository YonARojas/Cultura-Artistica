document.addEventListener('scroll', function() {
        const menu = document.querySelector('.container-menu');
        const scrollPosition = window.scrollY;

        if (scrollPosition > 50) {
            menu.classList.add('scrolled');
        } else {
            menu.classList.remove('scrolled');
        }
    });

    