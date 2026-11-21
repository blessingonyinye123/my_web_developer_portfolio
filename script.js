// 1. Find the form and a place to show messages on the page
const enquiryForm = document.querySelector("form");
const formMessage = document.getElementById("form-message");

// 2. Only run the form listener if the page actually has a form
if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (event) {
        // Stop the browser from refreshing the page on submit
        event.preventDefault();

        // Grab user inputs and trim extra spaces
        const nameInput = document.getElementById("full-name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        const nameValue = nameInput ? nameInput.value.trim() : "";
        const emailValue = emailInput ? emailInput.value.trim() : "";
        const messageValue = messageInput ? messageInput.value.trim() : "";

        // Basic check so empty submissions get helpful feedback
        if (!nameValue || !emailValue || !messageValue) {
            if (formMessage) {
                formMessage.textContent = "Please fill in your name, email, and message before submitting.";
                formMessage.style.color = "firebrick";
            }
            return;
        }

        // Clear any previous warning text on the page
        if (formMessage) {
            formMessage.textContent = "";
        }

        // Reset the form fields
        enquiryForm.reset();

        // Show the confirmation in a pop-up box
        alert("Thank you, " + nameValue + ". Your enquiry has been sent. You will get a response shortly.");
    });
}

// 3. Highlight the navigation link that matches the current page
const navLinks = document.querySelectorAll("nav a");
const currentFile = window.location.pathname.split("/").pop() || "index.html";

navLinks.forEach(function (link) {
    const linkTarget = link.getAttribute("href");

    if (linkTarget === currentFile) {
        link.classList.add("active-link");
    }
});

// Filter projects by category on projects.html
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // 1. Remove "active-filter" from every filter button
            filterButtons.forEach(function (btn) {
                btn.classList.remove("active-filter");
            });

            // 2. Mark the clicked button as active
            button.classList.add("active-filter");

            // 3. Show/hide project cards based on data-filter
            const selectedCategory = button.getAttribute("data-filter");

            projectCards.forEach(function (card) {
                const cardCategory = card.getAttribute("data-category");

                if (selectedCategory === "all" || cardCategory === selectedCategory) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
}