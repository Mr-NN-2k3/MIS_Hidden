document.addEventListener('DOMContentLoaded', () => {
    console.log('Beverage Creation Lab Page Loaded');

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
});
