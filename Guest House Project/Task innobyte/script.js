// Smooth scrolling to the about section
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = this.getAttribute('href');
        if (target && target.startsWith('#')) {
            e.preventDefault();
            document.querySelector(target).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Highlight active section on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});
