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
    
