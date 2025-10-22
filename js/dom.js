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

        try {
            const ps = document.getElementsByTagName('p');
            const surname = ps[0].childNodes[1].innerText;
            const name = ps[1].childNodes[1].innerText;
            const year = ps[2].childNodes[1].innerText;

            // Теперь элемент output существует
            document.getElementById('output').innerHTML =
                `Фамилия: <strong>${surname}</strong><br>
       Имя: <strong>${name}</strong><br>
       Год рождения: <strong>${year}</strong>`;

            console.log('Фамилия (через document.getElementsByTagName):', surname);
            console.log('Имя:', name);
            console.log('Год рождения:', year);
        } catch(e) {
            console.error("Ошибка:", e); // Всегда логируйте ошибки!
        }
    })
    })