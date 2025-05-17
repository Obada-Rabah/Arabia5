document.addEventListener('DOMContentLoaded', function () {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Sticky Header on Scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
        });

        testimonials[index].classList.add('active');
        currentTestimonial = index;
    }

    prevBtn.addEventListener('click', () => {
        currentTestimonial--;
        if (currentTestimonial < 0) {
            currentTestimonial = testimonials.length - 1;
        }
        showTestimonial(currentTestimonial);
    });

    nextBtn.addEventListener('click', () => {
        currentTestimonial++;
        if (currentTestimonial >= testimonials.length) {
            currentTestimonial = 0;
        }
        showTestimonial(currentTestimonial);
    });

    // Auto-rotate testimonials
    let testimonialInterval = setInterval(() => {
        currentTestimonial++;
        if (currentTestimonial >= testimonials.length) {
            currentTestimonial = 0;
        }
        showTestimonial(currentTestimonial);
    }, 5000);

    // Pause auto-rotation on hover
    const testimonialSlider = document.querySelector('.testimonial-slider');
    testimonialSlider.addEventListener('mouseenter', () => {
        clearInterval(testimonialInterval);
    });

    testimonialSlider.addEventListener('mouseleave', () => {
        testimonialInterval = setInterval(() => {
            currentTestimonial++;
            if (currentTestimonial >= testimonials.length) {
                currentTestimonial = 0;
            }
            showTestimonial(currentTestimonial);
        }, 5000);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission
   

    // Service card hover effect enhancement
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.service-icon');
            icon.style.transform = 'scale(1.1)';
            icon.style.backgroundColor = 'rgba(226, 185, 121, 0.2)';
        });

        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.service-icon');
            icon.style.transform = 'scale(1)';
            icon.style.backgroundColor = 'rgba(226, 185, 121, 0.1)';
        });
    });

    // Animation on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.about-section, .services-section, .testimonials');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    // Set initial state for animation
    document.querySelectorAll('.about-section, .services-section, .testimonials').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'all 0.6s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});


// Add to your existing JS
function checkViewportWidth() {
    const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    if (viewportWidth < 576) {
        document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    } else {
        document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1.0');
    }
}

// Run on load and resize
window.addEventListener('load', checkViewportWidth);
window.addEventListener('resize', checkViewportWidth);



const licenseBtns = document.querySelectorAll('.license-btn');
const modal = document.getElementById('licenseModal');
const closeBtn = document.querySelector('.close');

licenseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

