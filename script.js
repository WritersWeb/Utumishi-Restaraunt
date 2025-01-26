// script.js
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');
const icon = document.querySelector('.icon');

menuToggle.addEventListener('click', () => {
    navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
    icon.classList.toggle('open');
    document.body.style.overflow = navList.style.display === 'flex' ? 'hidden' : 'auto';
});

const form = document.getElementById('reservation-form');
        const formMessages = document.getElementById('form-messages');

        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            // Basic client-side validation (you should do more robust validation on the server)
            if (!form.checkValidity()) {
                formMessages.innerHTML = '<div class="error-message">Please fill in all required fields.</div>';
                return;
            }

            const formData = new FormData(form);

            fetch(form.action, {
                method: form.method,
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                if (data === "success") {
                    formMessages.innerHTML = '<div class="success-message">Reservation submitted successfully!</div>';
                    form.reset(); // Clear the form
                } else {
                    formMessages.innerHTML = `<div class="error-message">${data}</div>`; // Display server-side error
                }
            })
            .catch(error => {
                console.error('Error:', error);
                formMessages.innerHTML = '<div class="error-message">An error occurred. Please try again later.</div>';
            });
        });