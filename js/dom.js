document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || '2page.html';
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (currentPage === linkHref) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }

        document.getElementById('lastname').textContent = document.getElementById('lastname').innerText;
        document.getElementById('firstname').textContent = document.getElementById('firstname').innerText;
        const birthDate = document.getElementById('birthdate').innerText;
         // const year = birthDate.split('.')[2];
        // document.getElementById('year').textContent = year;

    })
    })