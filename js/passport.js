document.addEventListener('DOMContentLoaded', function() {
    let currentLang = 'ru';
    const translations = {
        'ru': {
            'lastname': 'Мусина',
            'firstname': 'Эльмира',
            'middlename': 'Юнусовна',
            'birthplace': 'г. Москва',
            'residence': 'г. Москва, ул. Ленина, д. 15, кв. 34',
            'issued_by': 'ОУФМС России по г. Москве',
            'passport_header': 'ПАСПОРТ РОССИЙСКОЙ ФЕДЕРАЦИИ',
            'photo': 'ФОТОГРАФИЯ'
        },
        'en': {
            'lastname': 'Musina',
            'firstname': 'Elmira',
            'middlename': 'Yunusovna',
            'birthplace': 'Moscow',
            'residence': 'Moscow, Lenina St., 15, apt. 34',
            'issued_by': 'UFMS of Russia for Moscow',
            'passport_header': 'PASSPORT OF THE RUSSIAN FEDERATION',
            'photo': 'PHOTO'
        }
    };

    const toggleButton = document.getElementById('languageToggle');

    toggleButton.addEventListener('click', function() {
        currentLang = currentLang === 'ru' ? 'en' : 'ru';
        toggleButton.textContent = currentLang === 'ru' ? 'EN' : 'RU';

        applyTranslation(currentLang);
    });

    function applyTranslation(lang) {
        const t = translations[lang];

        document.getElementById('lastname').textContent = t.lastname;
        document.getElementById('firstname').textContent = t.firstname;
        document.getElementById('middlename').textContent = t.middlename;

        const rows = document.querySelectorAll('.data-row');
        rows.forEach(row => {
            const label = row.querySelector('.data-label');
            if (label) {
                if (label.textContent.includes('Место рождения') || label.textContent.includes('Place of birth')) {
                    row.querySelector('span:last-child').textContent = t.birthplace;
                }
                if (label.textContent.includes('Орган, выдавший') || label.textContent.includes('Issuing authority')) {
                    row.querySelector('span:last-child').textContent = t.issued_by;
                }
                if (label.textContent.includes('Место жительства') || label.textContent.includes('Place of residence')) {
                    row.querySelector('span:last-child').textContent = t.residence;
                }
            }
        });

        document.querySelector('.passport-header').textContent = t.passport_header;
        document.querySelector('.passport-photo').textContent = t.photo;
    }

    applyTranslation('ru');

});
