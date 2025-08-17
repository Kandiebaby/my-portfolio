document.addEventListener('DOMContentLoaded', () => {
   // Toggle project descriptions
    const toggleButtons = document.querySelectorAll('.toggle-project-button');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const projectDescription = button.nextElementSibling.nextElementSibling;

            console.log('Project Description:', projectDescription);
            if (projectDescription) {
                const computedStyle = window.getComputedStyle(projectDescription);
                if (computedStyle.display === 'none' || computedStyle.display === '') {
                    projectDescription.style.display = 'block';
                    button.textContent = 'Hide Project Description';
                } else {
                    projectDescription.style.display = 'none';
                    button.textContent = 'View Project Description';
                }
            }     
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    //Contact form submission
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');    
    const messageInput = document.getElementById('message');
    const phoneInput = document.getElementById('phone');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');  
    const messageError = document.getElementById('message-error');
    const phoneError = document.getElementById('phone-error');

    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Reset error messages
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        phoneError.textContent = '';
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';

        // Validate inputs
        let isValid = true;

        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex
        if (emailInput.value.trim() === '' || !emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Valid email is required.';
            isValid = false;
        }
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message is required.';
            isValid = false;
        }
        const phoneRegex = /^\+?[0-9\s\-()]{7,15}$/; // Basic phone number validation regex

        console.log("Phone number entered:", phoneInput.value.trim());
        if (phoneInput.value.trim() !== '' && !phoneRegex.test(phoneInput.value)) {
            phoneError.textContent = 'Please enter a valid phone number.';
            isValid = false;
        }

        // Show success or error message
        if (isValid) {
            successMessage.style.display = 'block';
            contactForm.reset();
        } else {
            errorMessage.style.display = 'block';
        }
    });
});
