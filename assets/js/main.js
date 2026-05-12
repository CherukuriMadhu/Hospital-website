/* Swathi Hospital Main Interactivity */

document.addEventListener('DOMContentLoaded', () => {
    // Sticky Navbar
    const nav = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    function updateNav() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled', 'py-2', 'bg-white', 'shadow-md');
            nav.classList.remove('py-4', 'bg-transparent');
            
            // Adjust text colors for home page transparent nav
            if (document.body.classList.contains('home-page')) {
                nav.querySelectorAll('.logo-text').forEach(el => el.classList.replace('text-white', 'text-medical-blue'));
                nav.querySelectorAll('.logo-sub').forEach(el => el.classList.replace('text-blue-200', 'text-slate-custom'));
                nav.querySelectorAll('.nav-links a:not(.nav-cta), #mobile-menu-btn').forEach(el => {
                    el.classList.remove('text-white/90');
                    el.classList.add('text-navy-deep');
                });
            }
        } else {
            if (document.body.classList.contains('home-page')) {
                nav.classList.remove('scrolled', 'bg-white', 'shadow-md');
                nav.classList.add('bg-transparent');
                nav.querySelectorAll('.logo-text').forEach(el => el.classList.replace('text-medical-blue', 'text-white'));
                nav.querySelectorAll('.logo-sub').forEach(el => el.classList.replace('text-slate-custom', 'text-blue-200'));
                nav.querySelectorAll('.nav-links a:not(.nav-cta), #mobile-menu-btn').forEach(el => {
                    el.classList.add('text-white/90');
                    el.classList.remove('text-navy-deep');
                });
            }
            nav.classList.remove('py-2');
            nav.classList.add('py-4');
        }
    }

    window.addEventListener('scroll', updateNav);
    updateNav(); // Initial check

    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Mobile Menu Toggle
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 100;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                    
                    // Close mobile menu if open
                    if (mobileMenu) mobileMenu.classList.add('hidden');
                }
            }
        });
    });
});

// Function to handle appointment form (Formspree alternative logic if needed)
function handleAppointmentSubmit(event) {
    // Formspree handles the submission, but we can add success feedback here
    console.log('Appointment form submitted');
}
