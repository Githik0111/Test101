// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger?.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '60px';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.backgroundColor = 'white';
    navLinks.style.padding = '20px';
    navLinks.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.style.display = 'none';
    });
});

// Form Submission Handler
const appointmentForm = document.getElementById('appointmentForm');

appointmentForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: appointmentForm.elements[0].value,
        email: appointmentForm.elements[1].value,
        phone: appointmentForm.elements[2].value,
        date: appointmentForm.elements[3].value,
        message: appointmentForm.elements[4].value
    };
    
    // Show success message
    alert(`Thank you, ${formData.name}! Your appointment request has been submitted. We'll contact you shortly at ${formData.phone}`);
    
    // Reset form
    appointmentForm.reset();
    
    // In a real application, you would send this data to a server
    console.log('Appointment Data:', formData);
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-in forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe service cards, testimonials, etc.
document.querySelectorAll('.service-card, .testimonial-card, .member').forEach(el => {
    observer.observe(el);
});

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);