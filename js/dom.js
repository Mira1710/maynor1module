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

<<<<<<< HEAD
        // Получить все элементы <p>
        const paragraphs = document.getElementsByTagName('p');

// Фамилия (первый <p>)
        const surname = paragraphs[0].childNodes[1].innerText;
        console.log('Фамилия:', surname);

// Имя (второй <p>)
        const name = paragraphs[1].childNodes[1].innerText;
        console.log('Имя:', name);

// Год рождения (третий <p>)
        const year = paragraphs[2].childNodes[1].innerText;
        console.log('Год рождения:', year);

    })
})
=======
        document.getElementById('lastname').textContent = document.getElementById('lastname').innerText;
        document.getElementById('firstname').textContent = document.getElementById('firstname').innerText;
        const birthDate = document.getElementById('birthdate').innerText;
         // const year = birthDate.split('.')[2];
        // document.getElementById('year').textContent = year;

    })
    })
>>>>>>> d49e48be034dfe46d0f3855dfe0294c0b9a603d0
