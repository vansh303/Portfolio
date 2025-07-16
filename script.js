 // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobileMenuButton');
        const mobileMenu = document.getElementById('mobileMenu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('active');
        });
        
        // Dark mode toggle
        const darkModeToggle = document.getElementById('darkModeToggle');
        const mobileDarkModeToggle = document.getElementById('mobileDarkModeToggle');
        
        function toggleDarkMode(isDark) {
            if (isDark) {
                document.documentElement.classList.add('dark');
                document.body.classList.add('bg-slate-900');
                document.body.classList.remove('bg-white');
            } else {
                document.documentElement.classList.remove('dark');
                document.body.classList.remove('bg-slate-900');
                document.body.classList.add('bg-white');
            }
        }
        
        darkModeToggle.addEventListener('change', (e) => {
            toggleDarkMode(e.target.checked);
            mobileDarkModeToggle.checked = e.target.checked;
        });
        
        mobileDarkModeToggle.addEventListener('change', (e) => {
            toggleDarkMode(e.target.checked);
            darkModeToggle.checked = e.target.checked;
        });
        
        // Testimonial slider
        const testimonialSlider = document.querySelector('.testimonial-slider');
        const testimonialPrev = document.getElementById('testimonialPrev');
        const testimonialNext = document.getElementById('testimonialNext');
        const mobileTestimonialPrev = document.getElementById('mobileTestimonialPrev');
        const mobileTestimonialNext = document.getElementById('mobileTestimonialNext');
        
        let currentSlide = 0;
        const slides = document.querySelectorAll('.testimonial-slide');
        
        function updateSlider() {
            testimonialSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
        
        testimonialNext.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSlider();
        });
        
        testimonialPrev.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateSlider();
        });
        
        mobileTestimonialNext.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSlider();
        });
        
        mobileTestimonialPrev.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateSlider();
        });
        
        // Contact form submission
        const contactForm = document.getElementById('contactForm');
        const formSuccess = document.getElementById('formSuccess');
        const formError = document.getElementById('formError');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulate form submission
            formSuccess.classList.add('hidden');
            formError.classList.add('hidden');
            
            setTimeout(() => {
                formSuccess.classList.remove('hidden');
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    formSuccess.classList.add('hidden');
                }, 5000);
            }, 1000);
        });
        
        // Back to top button
        const backToTopButton = document.getElementById('backToTop');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.remove('opacity-0', 'invisible');
                backToTopButton.classList.add('opacity-100', 'visible');
            } else {
                backToTopButton.classList.remove('opacity-100', 'visible');
                backToTopButton.classList.add('opacity-0', 'invisible');
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Animate skill bars on scroll into view
        const skillBars = document.querySelectorAll('.skill-progress');
        
        function animateSkillBars() {
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
        }
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            observer.observe(skillsSection);
        }