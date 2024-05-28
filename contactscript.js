// Initialize contact form functionality
    function initContactForm() {
        const contactForm = document.getElementById("contactForm");
        const formMessage = document.getElementById("form-message");

        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const formData = new FormData(contactForm);
            const data = {
                firstname: formData.get("firstname"),
                lastname: formData.get("lastname"),
                subject: formData.get("subject")
            };

            setTimeout(() => {
                formMessage.innerHTML = `<p>Thank you, ${data.firstname} ${data.lastname}. Your message has been received: ${data.subject}</p>`;
                contactForm.reset();
            }, 500);
        });
    }