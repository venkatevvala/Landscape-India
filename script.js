// Simple form submission handler
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Message sent by ${name}. We will contact you soon at ${email}.`);

    // Here, form data would be sent to a backend server
    // Reset form after submission
    event.target.reset();
});
