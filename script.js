

// document.addEventListener("DOMContentLoaded", function() {
    // Add your code here if needed
// });
    // const projectButtons = document.querySelectorAll(".view-project-button");

    // projectButtons.forEach(button => {
        // button.addEventListener("click", function() {
            // const description = this.nextElementSibling;
            // if (description.style.display === "none" || description.style.display === "") {
                // description.style.display = "block";
                // this.textContent = "Hide Project";
            // } else {
                // description.style.display = "none";
                // this.textContent = "View Project";
            // }
        // });
    // });
// });


document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const message = document.getElementById("message");
    const email = document.getElementById("email");
    const name = document.getElementById("name");
    const phonenumber = document.getElementById("phonenumber");
    const submitButton = document.getElementById("submit-button");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");
    const phonenumberError = document.getElementById("phonenumber-error");
        const successMessage = document.getElementById("success-message");
        const errorMessage = document.getElementById("error-message");
        

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let valid = true;
        
        // Clear previous error messages
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        phonenumberError.textContent = "";
        successMessage.style.display = "none";

        // Validate name
        if (name.value.trim() === "") {
            nameError.textContent = "Name is required.";
            valid = false;
        } else if (name.value.length < 3) {
            nameError.textContent = "Name must be at least 3 characters.";
            valid = false;
        }
        
        // Validate email
        if (email.value.trim() === "") {
            emailError.textContent = "Email is required.";
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email.value)) {
            emailError.textContent = "Please enter a valid email address.";
            valid = false;
        }
        // Validate phone number
        if (phonenumber.value.trim() === "") {
            phonenumberError.textContent = "Phone number is required.";
            valid = false;
        }
        else if (!/^\d{10}$/.test(phonenumber.value)) {
            phonenumberError.textContent = "Phone number must be 10 digits.";
            valid = false;
        }

        // Validate message
        if (message.value.trim() === "") {
            messageError.textContent = "Message is required.";
            valid = false;
        }

        // If all validations pass, show success message
        if (valid) {    
            successMessage.style.display = "block";
            errorMessage.style.display = "none";
            form.reset(); // Reset the form
        }
        if (!valid) {
            errorMessage.style.display = "block";
            successMessage.style.display = "none";
        }


    });
        });
