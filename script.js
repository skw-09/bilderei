let currentLang = 'de';

function toggleLanguage() {
    currentLang = (currentLang === 'de') ? 'en' : 'de';
    document.querySelectorAll('[lang]').forEach(el => {
        el.style.display = (el.getAttribute('lang') === currentLang) ? '' : 'none';
    });
    document.querySelectorAll('.nav-link').forEach(el => {
        el.style.display = (el.dataset.lang === currentLang) ? '' : 'none';
    });
}