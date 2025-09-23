// Smooth scrolling functionality
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const navHeight = document.querySelector('.nav-container').offsetHeight;
        const elementPosition = element.offsetTop - navHeight - 20;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

// Navigation scroll effect
function handleNavScroll() {
    const nav = document.querySelector('.nav-container');
    const scrolled = window.pageYOffset;
    
    if (scrolled > 50) {
        nav.style.background = 'rgba(254, 254, 254, 0.98)';
        nav.style.boxShadow = '0 2px 20px rgba(139, 125, 140, 0.1)';
    } else {
        nav.style.background = 'rgba(254, 254, 254, 0.95)';
        nav.style.boxShadow = 'none';
    }
}

// Intersection Observer for animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements that should animate on scroll
    const animatedElements = document.querySelectorAll(
        '.part-card, .tool-card, .feature-card, .contact-card, .sidebar-card'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// Add hover effects to cards
function setupCardHoverEffects() {
    const cards = document.querySelectorAll('.part-card, .tool-card, .feature-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Smooth reveal animation for hero section
function setupHeroAnimation() {
    const heroText = document.querySelector('.hero-text');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroText && heroImage) {
        setTimeout(() => {
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateX(0)';
        }, 300);
        
        setTimeout(() => {
            heroImage.style.opacity = '1';
            heroImage.style.transform = 'translateX(0)';
        }, 600);
    }
}

// Initialize hero animations
function initHeroStyles() {
    const heroText = document.querySelector('.hero-text');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroText) {
        heroText.style.opacity = '0';
        heroText.style.transform = 'translateX(-50px)';
        heroText.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    }
    
    if (heroImage) {
        heroImage.style.opacity = '0';
        heroImage.style.transform = 'translateX(50px)';
        heroImage.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    }
}

// Add typewriter effect to hero subtitle
function setupTypewriterEffect() {
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) {
        const text = subtitle.textContent;
        subtitle.textContent = '';
        subtitle.style.borderRight = '2px solid #8B7D8C';
        
        let i = 0;
        const typeSpeed = 50;
        
        function typeWriter() {
            if (i < text.length) {
                subtitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, typeSpeed);
            } else {
                // Remove cursor after typing is complete
                setTimeout(() => {
                    subtitle.style.borderRight = 'none';
                }, 1000);
            }
        }
        
        // Start typewriter effect after hero text appears
        setTimeout(typeWriter, 1200);
    }
}

// Add floating animation to SVG elements
function setupFloatingAnimations() {
    const svgElements = document.querySelectorAll('.hero-image, .section-image, .part-image');
    
    svgElements.forEach((svg, index) => {
        const delay = index * 0.5;
        svg.style.animation = `float 6s ease-in-out infinite ${delay}s`;
    });
}

// CSS keyframes for floating animation
function addFloatingKeyframes() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            25% { transform: translateY(-10px) rotate(1deg); }
            50% { transform: translateY(-5px) rotate(0deg); }
            75% { transform: translateY(-15px) rotate(-1deg); }
        }
        
        @keyframes pulse {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 1; }
        }
        
        .hero-visual .hero-image:hover {
            animation: pulse 2s ease-in-out infinite;
        }
    `;
    document.head.appendChild(style);
}

// Add parallax effect to background elements
function setupParallaxEffect() {
    const parallaxElements = document.querySelectorAll('.hero::before');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        parallaxElements.forEach(el => {
            el.style.transform = `translateY(${rate}px)`;
        });
    });
}

// Add smooth transitions for all interactive elements
function setupSmoothTransitions() {
    const style = document.createElement('style');
    style.textContent = `
        .nav-link, .btn-primary, .btn-secondary, .card, .tool-card, 
        .feature-card, .contact-card, .sidebar-card {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hero-image {
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Improve loading performance */
        .hero-image, .section-image, .part-image, .tool-image {
            will-change: transform;
        }
    `;
    document.head.appendChild(style);
}

// Mobile menu functionality (if needed in future)
function setupMobileMenu() {
    // Placeholder for mobile menu functionality
    // Can be expanded when mobile hamburger menu is added
}

// Accessibility improvements
function setupAccessibility() {
    // Add keyboard navigation for buttons
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    buttons.forEach(button => {
        button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                button.click();
            }
        });
        
        // Ensure buttons are focusable
        if (!button.hasAttribute('tabindex')) {
            button.setAttribute('tabindex', '0');
        }
    });
    
    // Add ARIA labels for better screen reader support
    const qrLink = document.querySelector('.qr-link');
    if (qrLink) {
        qrLink.setAttribute('aria-label', '扫码联系福利官获取专业咨询');
    }
}

// Performance optimization
function setupPerformanceOptimizations() {
    // Lazy load images when they come into viewport
    const images = document.querySelectorAll('img[src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Debounce scroll events
    let ticking = false;
    
    function updateOnScroll() {
        handleNavScroll();
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Setup all functionality
    initHeroStyles();
    setupHeroAnimation();
    setupTypewriterEffect();
    setupScrollAnimations();
    setupCardHoverEffects();
    setupFloatingAnimations();
    addFloatingKeyframes();
    setupParallaxEffect();
    setupSmoothTransitions();
    setupAccessibility();
    setupPerformanceOptimizations();
    
    // Add loading complete class
    document.body.classList.add('loaded');
});

// Handle window resize
window.addEventListener('resize', function() {
    // Recalculate any size-dependent animations
    // This ensures responsiveness
});

// Add loading states
window.addEventListener('load', function() {
    // Hide loading spinner if one exists
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 300);
    }
    
    // Start animations after everything is loaded
    setTimeout(() => {
        document.body.classList.add('animations-ready');
    }, 100);
});

// Export functions for potential use in other scripts
window.BeautifulAwareness = {
    scrollToSection,
    handleNavScroll,
    setupScrollAnimations,
    setupCardHoverEffects
};