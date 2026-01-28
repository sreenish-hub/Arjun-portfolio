/* ===================================
   ARJUN NAIR PORTFOLIO - JavaScript
   Premium Portfolio with GSAP Animations
   =================================== */

// ===================================
// GSAP CONFIGURATION
// ===================================

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// ===================================
// NAVIGATION
// ===================================

/**
 * Mobile Navigation Toggle
 * Handles hamburger menu click and menu item navigation
 */
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

/**
 * Smooth Scroll Navigation
 * Handles smooth scrolling to sections and active state
 */
function initSmoothScroll() {
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal links
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetSection.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

/**
 * Active Navigation Link on Scroll
 * Updates active state based on scroll position
 */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const scrollPosition = window.scrollY + navbarHeight + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

/**
 * Navbar Scroll Effect
 * Adds 'scrolled' class when user scrolls down
 */
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// ===================================
// HERO ANIMATIONS
// ===================================

/**
 * Hero Section Entrance Animation
 * Animates hero content on page load
 */
function initHeroAnimations() {
    const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    heroTimeline
        .from('.hero-label', {
            opacity: 0,
            y: 30,
            duration: 0.6
        })
        .from('.hero-title', {
            opacity: 0,
            y: 50,
            duration: 0.8
        }, '-=0.3')
        .from('.hero-subtitle', {
            opacity: 0,
            y: 30,
            duration: 0.6
        }, '-=0.4')
        .from('.hero-cta .btn', {
            opacity: 0,
            y: 30,
            stagger: 0.2,
            duration: 0.6
        }, '-=0.3')
        .from('.hero-image-container', {
            opacity: 0,
            x: 50,
            duration: 1,
            ease: 'power2.out'
        }, '-=0.6')
        .from('.scroll-indicator', {
            opacity: 0,
            y: -20,
            duration: 0.6
        }, '-=0.4');
}

// ===================================
// SCROLL ANIMATIONS
// ===================================

/**
 * Fade In Animation
 * Generic fade-in effect for sections
 */
function initFadeInAnimations() {
    const fadeElements = [
        '.section-header',
        '.project-card',
        '.skill-category',
        '.about-content',
        '.about-visual',
        '.contact-card'
    ];
    
    fadeElements.forEach(selector => {
        gsap.utils.toArray(selector).forEach(element => {
            gsap.from(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                autoAlpha: 0,
                y: 50,
                duration: 0.8,
                ease: 'power3.out'
            });
        });
    });
}

/**
 * Slide In Animations (Left and Right)
 * Alternating slide-in effects for content blocks
 */
function initSlideAnimations() {
    // Slide in from left
    const slideLeftElements = gsap.utils.toArray('.project-card:not(.reverse)');
    slideLeftElements.forEach(element => {
        const content = element.querySelector('.project-content');
        const image = element.querySelector('.project-image');
        
        gsap.from(content, {
            scrollTrigger: {
                trigger: element,
                start: 'top 75%',
                toggleActions: 'play none none none'
            },
            x: -100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
        
        gsap.from(image, {
            scrollTrigger: {
                trigger: element,
                start: 'top 75%',
                toggleActions: 'play none none none'
            },
            x: 100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });
    
    // Slide in from right (reversed projects)
    const slideRightElements = gsap.utils.toArray('.project-card.reverse');
    slideRightElements.forEach(element => {
        const content = element.querySelector('.project-content');
        const image = element.querySelector('.project-image');
        
        gsap.from(content, {
            scrollTrigger: {
                trigger: element,
                start: 'top 75%',
                toggleActions: 'play none none none'
            },
            x: 100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
        
        gsap.from(image, {
            scrollTrigger: {
                trigger: element,
                start: 'top 75%',
                toggleActions: 'play none none none'
            },
            x: -100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });
}

/**
 * Parallax Effect
 * Creates depth with background parallax scrolling
 */
function initParallaxEffects() {
    // Hero background parallax
    gsap.to('.hero-background', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: 200,
        ease: 'none'
    });
    
    // Hero image subtle parallax
    gsap.to('.hero-image-container', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: -50,
        ease: 'none'
    });
}

/**
 * Stagger Animations for Service Cards
 * Service cards appear with stagger effect
 */
function initServiceCardAnimations() {
    const cards = document.querySelectorAll('.service-card');
    
    // Set initial state
    gsap.set(cards, { autoAlpha: 0, y: 60 });
    
    // Animate in
    gsap.to(cards, {
        scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 85%',
            toggleActions: 'play none none none'
        },
        autoAlpha: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out'
    });
}

// ===================================
// SKILLS PROGRESS BARS
// ===================================

/**
 * Animated Progress Bars
 * Skills bars animate when scrolled into view
 */
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress-fill');
    
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        
        gsap.to(bar, {
            scrollTrigger: {
                trigger: bar,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            width: `${progress}%`,
            duration: 1.5,
            ease: 'power2.out'
        });
    });
}

// ===================================
// COUNTER ANIMATIONS
// ===================================

/**
 * Animated Number Counters
 * About section stats count up when visible
 */
function initCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        
        ScrollTrigger.create({
            trigger: counter,
            start: 'top 80%',
            onEnter: () => {
                gsap.to(counter, {
                    innerText: target,
                    duration: 2,
                    ease: 'power1.out',
                    snap: { innerText: 1 },
                    onUpdate: function() {
                        counter.innerText = Math.ceil(counter.innerText);
                    }
                });
            },
            once: true
        });
    });
}

// ===================================
// CARD TILT EFFECT
// ===================================

/**
 * 3D Tilt Effect for Cards
 * Service cards tilt on mouse move for premium feel
 */
function initCardTilt() {
    const cards = document.querySelectorAll('[data-tilt]');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            gsap.to(card, {
                rotationX: rotateX,
                rotationY: rotateY,
                transformPerspective: 1000,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotationX: 0,
                rotationY: 0,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
    });
}

// ===================================
// HOVER MICRO-INTERACTIONS
// ===================================

/**
 * Button Hover Effects
 * Enhanced button interactions with GSAP
 */
function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================

/**
 * Throttle Function
 * Limits function execution for performance
 */
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Intersection Observer for Performance
 * Lazy initialization of animations for better performance
 */
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// ===================================
// SCROLL EVENT LISTENERS
// ===================================

// Throttled scroll handler for performance
const handleScroll = throttle(() => {
    handleNavbarScroll();
    updateActiveNavLink();
}, 100);

window.addEventListener('scroll', handleScroll);

// ===================================
// INITIALIZATION
// ===================================

/**
 * Initialize All Animations and Interactions
 * Called when DOM is fully loaded
 */
function init() {
    // Navigation
    initSmoothScroll();
    updateActiveNavLink();
    handleNavbarScroll();
    
    // Hero animations
    initHeroAnimations();
    
    // Scroll-based animations
    initFadeInAnimations();
    initSlideAnimations();
    initParallaxEffects();
    initServiceCardAnimations();
    initSkillBars();
    initCounterAnimations();
    
    // Interactive effects
    initCardTilt();
    initButtonEffects();
    
    // Performance optimizations
    initIntersectionObserver();
}

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ===================================
// REDUCED MOTION SUPPORT
// ===================================

/**
 * Respect User's Motion Preferences
 * Disable animations if user prefers reduced motion
 */
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Disable GSAP animations
    gsap.globalTimeline.clear();
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
}

// ===================================
// PERFORMANCE MONITORING
// ===================================

/**
 * Performance Metrics
 * Tracks page load time for optimization
 */
window.addEventListener('load', () => {
    if (window.performance && window.performance.timing) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        // Performance data available for analytics if needed
        // Uncomment for development: console.log(`Page load: ${pageLoadTime}ms`);
    }
});
