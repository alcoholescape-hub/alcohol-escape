// --- 1. QUICK ESCAPE FUNCTIONALITY ---
const escapeButton = document.getElementById('quick-escape');
escapeButton.addEventListener('click', function() {
    window.location.replace('https://www.google.com');
});


// --- 2. ACCESSIBILITY TOGGLES ---
const fontToggle = document.getElementById('font-toggle');
const contrastToggle = document.getElementById('contrast-toggle');
const body = document.body;

fontToggle.addEventListener('click', () => {
    body.classList.toggle('font-large');
    localStorage.setItem('fontSize', body.classList.contains('font-large') ? 'large' : '');
});

contrastToggle.addEventListener('click', () => {
    body.classList.toggle('high-contrast');
    localStorage.setItem('contrast', body.classList.contains('high-contrast') ? 'high' : '');
});

function applySavedSettings() {
    if (localStorage.getItem('fontSize') === 'large') body.classList.add('font-large');
    if (localStorage.getItem('contrast') === 'high') body.classList.add('high-contrast');
}


// --- 3. RUN ON PAGE LOAD ---
applySavedSettings();