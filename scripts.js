document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Prevent default link behavior
            event.preventDefault();
            
            // Get the target element's id from the href attribute
            const targetId = this.getAttribute('href').substring(0, this.getAttribute('href').length - 5);
            const targetElement = document.getElementById(targetId);
            
            // Smooth scroll to the target element
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Form validation for the contact form
    const contactForm = document.querySelector('form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Prevent default form submission
            event.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Simple validation
            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields.');
                return;
            }
            
            // Additional email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // If all checks pass, show a success message (you can replace this with actual form submission logic)
            alert('Thank you for your message!');
            contactForm.reset();
        });
    }
});
