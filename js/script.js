
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

    const monumentsData = [
            {
                title: "Тадж-Махал",
                location: "Агра, Индия",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1200px-Taj_Mahal_%28Edited%29.jpeg",
                description: "Беломраморный мавзолей, построенный императором Великих Моголов Шах-Джаханом в память о жене Мумтаз-Махал.",
                era: "XVII век",
                category: "architecture"
            },
            {
                title: "Статуя Давида",
                location: "Флоренция, Италия",
                image: "https://img.visituffizi.org/wp-content/uploads/2015/07/david.jpg",
                description: "Мраморная статуя работы Микеланджело, изображающая библейского героя Давида перед боем с Голиафом.",
                era: "XVI век",
                category: "sculpture"
            },
            {
                title: "Мона Лиза",
                location: "Париж, Франция",
                image: "https://cdnn21.img.ria.ru/images/07e6/08/05/1807519360_0:0:1000:564_1920x1080_80_0_0_7dc708abe1964bee4275e526cc3bc32b.jpg",
                description: "Портрет Лизы дель Джокондо, написанный Леонардо да Винчи, одна из самых известных картин в мире.",
                era: "XVI век",
                category: "painting"
            },
            {
                title: "Парфенон",
                location: "Афины, Греция",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm2w_A52FHAl1RKAazdlyINxGwZwGF-AI6Sw&s",
                description: "Древнегреческий храм, посвященный богине Афине, вершина древнегреческой архитектуры.",
                era: "V век до н.э.",
                category: "ancient"
            },
            {
                title: "Сфинкс",
                location: "Гиза, Египет",
                image: "https://files.mediiia.ru/postimages/8528/192cf22e086d42269f91904c5043bbab/7921a8054a0f4d4f976bb1cf2371ad58900x706.jpg",
                description: "Гигантская статуя сфинкса, высеченная из известняка, охраняющая пирамиды в Гизе.",
                era: "XXVI век до н.э.",
                category: "ancient"
            },
            {
                title: "Сикстинская капелла",
                location: "Ватикан",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Sistina-interno.jpg/330px-Sistina-interno.jpg",
                description: "Знаменитая часовня с фресками Микеланджело, включая знаменитую 'Сотворение Адама'.",
                era: "XV век",
                category: "painting"
            },
            {
                title: "Колизей",
                location: "Рим, Италия",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/330px-Colosseo_2020.jpg",
                description: "Амфитеатр Флавиев, крупнейший амфитеатр в мире, символ величия Древнего Рима.",
                era: "I век",
                category: "ancient"
            },
            {
                title: "Моай",
                location: "Остров Пасхи, Чили",
                image: "https://s0.rbk.ru/v6_top_pics/media/img/3/26/756775875405263.webp",
                description: "Гигантские каменные статуи, созданные народом Рапа-Нуи между 1250 и 1500 годами.",
                era: "XIII-XVI века",
                category: "sculpture"
            }
        ];

        function generateMonuments() {
            const container = document.getElementById('monumentsContainer');
            container.innerHTML = '';
            const totalMonuments = Math.floor(Math.random() * 7) + 6;
            const shuffledData = [...monumentsData].sort(() => 0.5 - Math.random());
            
            for (let i = 0; i < totalMonuments; i++) {
                const monument = shuffledData[i % shuffledData.length];
                const col = document.createElement('div');
                col.className = 'col-md-6 col-lg-4 mb-4';
                col.setAttribute('data-category', monument.category);
                
                
                col.innerHTML = `
                    <div class="card monument-card">
                        <div class="card-img-container position-relative">
                            <img src="${monument.image}" class="card-img-top" alt="${monument.title}">
                            <span class="badge-era">${monument.era}</span>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${monument.title}</h5>
                            <p class="location"><i class="bi bi-geo-alt me-1"></i>${monument.location}</p>
                            <p class="card-text">${monument.description}</p>
                            <div class="mt-auto">
                                <button class="btn btn-explore">Узнать больше</button>
                            </div>
                        </div>
                    </div>
                `;
                
                container.appendChild(col);
            }
        }

    
        function setupFilters() {
            const filterButtons = document.querySelectorAll('.btn-filter');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    
                    const filter = this.getAttribute('data-filter');
                    const cards = document.querySelectorAll('.col-md-6');
                    
                    cards.forEach(card => {
                        if (filter === 'all' || card.getAttribute('data-category') === filter) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });
        }

        window.addEventListener('DOMContentLoaded', function() {
            generateMonuments();
            setupFilters();
        });

});



