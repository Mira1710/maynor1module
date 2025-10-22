
document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const largeImageContainer = document.getElementById('largeImageContainer');
    const largeImage = document.getElementById('largeImage');
    const closeBtn = document.querySelector('.close-btn');

    if (thumbnails && largeImageContainer && largeImage && closeBtn) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                const largeSrc = this.src.replace('/100x80/', '/600x400/');
                largeImage.src = largeSrc;
                largeImageContainer.style.display = 'flex';
            });
        });

        closeBtn.addEventListener('click', function() {
            largeImageContainer.style.display = 'none';
        });

        largeImageContainer.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });
    }

    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (currentPage === linkHref) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });


});



