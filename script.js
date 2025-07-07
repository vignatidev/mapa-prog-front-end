document.addEventListener('DOMContentLoaded', () => {

    // light and Dark mode
    const toggleButton = document.getElementById('toggleTheme');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;

    function updateButtonIcon() {
        if (body.classList.contains('theme-01')) {
            themeIcon.innerHTML = `<path d="M21.752 15.002A9 9 0 0112 3a9 9 0 109.752 12.002z"></path>`;
        } else {
            themeIcon.innerHTML = `<path d="M12 4.354a.5.5 0 0 1 .5-.354h.146a.5.5 0 0 1 .5.354l.4 1.6a.5.5 0 0 1-.354.646l-.146.036a.5.5 0 0 1-.646-.354L12 4.354zm7.071 1.071a.5.5 0 0 1 .707 0l.103.103a.5.5 0 0 1 0 .707l-1.06 1.06a.5.5 0 0 1-.707-.707l1.06-1.06zM18.646 12a.5.5 0 0 1 .354.5v.146a.5.5 0 0 1-.354.5l-1.6.4a.5.5 0 0 1-.646-.354l-.036-.146a.5.5 0 0 1 .354-.646l1.6-.4zm-1.575 5.575a.5.5 0 0 1 .707.707l-1.06 1.06a.5.5 0 0 1-.707-.707l1.06-1.06zM12 19.646a.5.5 0 0 1 .5.354l.4 1.6a.5.5 0 0 1-.354.646l-.146.036a.5.5 0 0 1-.646-.354l-.4-1.6a.5.5 0 0 1 .354-.646l.146-.036a.5.5 0 0 1 .146-.036zm-5.575-1.575a.5.5 0 0 1 .707-.707l1.06 1.06a.5.5 0 0 1-.707.707l-1.06-1.06zM4.354 12a.5.5 0 0 1 .354-.5h.146a.5.5 0 0 1 .5.354l.4 1.6a.5.5 0 0 1-.354.646l-.146.036a.5.5 0 0 1-.646-.354l-.4-1.6a.5.5 0 0 1 .354-.646l.146-.036zM5.575 6.425a.5.5 0 0 1-.707-.707l1.06-1.06a.5.5 0 0 1 .707.707l-1.06 1.06zM12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7z"></path>`;
        }
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('theme-01');
        updateButtonIcon();
        if (body.classList.contains('theme-01')) {
            localStorage.setItem('theme', 'theme-01');
        } else {
            localStorage.setItem('theme', 'default');
        }
    });

    window.addEventListener('load', () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'theme-01') {
            body.classList.add('theme-01');
        }
        updateButtonIcon();
    });

    const hamburger = document.getElementById('hamburger');
    const menuHamburger = document.getElementById('menu_hamburger');

    hamburger.addEventListener('click', () => {
        menuHamburger.classList.toggle('active');
    });

    // Validação do form via JavaScript

    function validateEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const form = document.querySelector('.contact_form');
    const sendBtn = document.getElementById('sendBtn');

    sendBtn.addEventListener('click', function (e) {
        e.preventDefault();

        const name = document.getElementById('inputName').value.trim();
        const email = document.getElementById('inputEmail').value.trim();
        const message = document.getElementById('inputMessage').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill out all fields.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert('Message sent successfully!');
        form.reset();
    });
});