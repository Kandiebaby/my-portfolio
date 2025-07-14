

document.addEventListener("DOMContentLoaded", function() {
    const projectButtons = document.querySelectorAll(".view-project-button");

    projectButtons.forEach(button => {
        button.addEventListener("click", function() {
            const description = this.nextElementSibling;
            if (description.style.display === "none" || description.style.display === "") {
                description.style.display = "block";
                this.textContent = "Hide Project";
            } else {
                description.style.display = "none";
                this.textContent = "View Project";
            }
        });
    });
});