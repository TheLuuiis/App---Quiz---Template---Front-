// script.js

document.addEventListener('DOMContentLoaded', function() {
    const toggleCheckbox = document.getElementById('toggle-dark-mode');
    
    toggleCheckbox.addEventListener('change', function() {
        if (this.checked) {
            document.body.setAttribute('data-theme', 'dark');
        } else {
            document.body.removeAttribute('data-theme');
        }
    });
});
