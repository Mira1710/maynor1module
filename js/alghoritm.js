document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || '4page.html';
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (currentPage === linkHref) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }

    })

    const checkButton = document.getElementById('checkButton');
    const resultDiv = document.getElementById('result');
    const triangleVisualization = document.getElementById('triangleVisualization');

    checkButton.addEventListener('click', function() {
        // Получаем значения сторон
        const x = parseFloat(document.getElementById('sideX').value);
        const y = parseFloat(document.getElementById('sideY').value);
        const z = parseFloat(document.getElementById('sideZ').value);

        // Проверяем, что все поля заполнены и значения положительные
        if (isNaN(x) || isNaN(y) || isNaN(z) || x <= 0 || y <= 0 || z <= 0) {
            resultDiv.textContent = "Пожалуйста, введите положительные числа для всех сторон.";
            resultDiv.className = "result not-exists";
            resultDiv.style.display = "block";
            triangleVisualization.style.display = "none";
            return;
        }

        const exists = checkTriangleExistence(x, y, z);

        if (exists) {
            const isRight = checkRightTriangle(x, y, z);

            if (isRight) {
                resultDiv.innerHTML = `
                            <strong>Треугольник существует и является прямоугольным!</strong><br>
                            Стороны: X = ${x}, Y = ${y}, Z = ${z}<br>
                            Условие прямоугольного треугольника выполняется: квадрат наибольшей стороны равен сумме квадратов двух других сторон.
                        `;
                resultDiv.className = "result right";
            } else {
                resultDiv.innerHTML = `
                            <strong>Треугольник существует, но не является прямоугольным.</strong><br>
                            Стороны: X = ${x}, Y = ${y}, Z = ${z}<br>
                            Условие прямоугольного треугольника не выполняется.
                        `;
                resultDiv.className = "result exists";
            }

            visualizeTriangle(x, y, z, isRight);
            triangleVisualization.style.display = "block";
        } else {
            resultDiv.innerHTML = `
                        <strong>Треугольник с такими сторонами не существует.</strong><br>
                        Стороны: X = ${x}, Y = ${y}, Z = ${z}<br>
                        Не выполняется условие существования треугольника: сумма любых двух сторон должна быть больше третьей.
                    `;
            resultDiv.className = "result not-exists";
            resultDiv.style.display = "block";
            triangleVisualization.style.display = "none";
        }
    });

    function checkTriangleExistence(x, y, z) {
        return (x + y > z) && (x + z > y) && (y + z > x);
    }

    function checkRightTriangle(x, y, z) {
        // Находим наибольшую сторону
        const sides = [x, y, z].sort((a, b) => a - b);
        const a = sides[0];
        const b = sides[1];
        const c = sides[2];

        return Math.abs(c * c - (a * a + b * b)) < 0.0001;
    }

    function visualizeTriangle(x, y, z, isRight) {
        const sides = [
            {value: x, name: 'X', id: 'sideXLine', label: 'labelX'},
            {value: y, name: 'Y', id: 'sideYLine', label: 'labelY'},
            {value: z, name: 'Z', id: 'sideZLine', label: 'labelZ'}
        ].sort((a, b) => b.value - a.value);

        const a = sides[0].value;
        const b = sides[1].value;
        const c = sides[2].value;

        const scale = 150 / a;
        const scaledA = a * scale;
        const scaledB = b * scale;
        const scaledC = c * scale;


        const angleA = Math.acos((b*b + c*c - a*a) / (2*b*c)) * (180/Math.PI);
        const angleB = Math.acos((a*a + c*c - b*b) / (2*a*c)) * (180/Math.PI);
        const angleC = 180 - angleA - angleB;


        const sideALine = document.getElementById(sides[0].id);
        sideALine.style.width = `${scaledA}px`;
        sideALine.style.top = '0px';
        sideALine.style.left = '0px';
        sideALine.style.transform = 'rotate(0deg)';


        const sideBLine = document.getElementById(sides[1].id);
        sideBLine.style.width = `${scaledB}px`;
        sideBLine.style.top = '0px';
        sideBLine.style.left = '0px';
        sideBLine.style.transform = `rotate(${angleC}deg)`;


        const sideCLine = document.getElementById(sides[2].id);
        sideCLine.style.width = `${scaledC}px`;
        sideCLine.style.top = `${scaledB * Math.sin(angleC * Math.PI/180)}px`;
        sideCLine.style.left = `${scaledB * Math.cos(angleC * Math.PI/180)}px`;
        sideCLine.style.transform = `rotate(${-angleB}deg)`;

        document.getElementById(sides[0].label).textContent = `${sides[0].name} = ${sides[0].value}`;
        document.getElementById(sides[0].label).style.top = '-20px';
        document.getElementById(sides[0].label).style.left = `${scaledA/2 - 15}px`;

        document.getElementById(sides[1].label).textContent = `${sides[1].name} = ${sides[1].value}`;
        document.getElementById(sides[1].label).style.top = `${scaledB/2 * Math.sin(angleC * Math.PI/180) - 20}px`;
        document.getElementById(sides[1].label).style.left = `${scaledB/2 * Math.cos(angleC * Math.PI/180)}px`;

        document.getElementById(sides[2].label).textContent = `${sides[2].name} = ${sides[2].value}`;
        document.getElementById(sides[2].label).style.top = `${scaledB * Math.sin(angleC * Math.PI/180) + 10}px`;
        document.getElementById(sides[2].label).style.left = `${scaledB * Math.cos(angleC * Math.PI/180) - scaledC/2}px`;


        if (isRight) {
            const rightAngle = document.getElementById('rightAngle');
            rightAngle.style.display = 'block';
            rightAngle.style.top = '0px';
            rightAngle.style.left = '0px';
        } else {
            document.getElementById('rightAngle').style.display = 'none';
        }
    }














})