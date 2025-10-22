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

        const paragraphs = document.getElementsByTagName('p');
        const surname = paragraphs[0].childNodes[1].innerText;
        console.log('Фамилия:', surname);

        const name = paragraphs[1].childNodes[1].innerText;
        console.log('Имя:', name);

        const year = paragraphs[2].childNodes[1].innerText;
        console.log('Год рождения:', year);

    })
})

         

    })
    })
