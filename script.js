



// document.addEventListener('DOMContentLoaded', () => {
//     const container = document.querySelector('.scrolling-container');
//     const track = document.querySelector('.scrolling-track');
//     const content = document.querySelectorAll('.scrolling-content');
    
//     // Clone the content for seamless looping
//     content.forEach(el => {
//         const clone = el.cloneNode(true);
//         track.appendChild(clone);
//     });
    
//     let animationId;
//     let position = 0;
//     const speed = 1; // Adjust speed
    
//     function animate() {
//         position = (position - speed);
        
//         // Reset when scrolled one content width
//         if (Math.abs(position) >= content[0].offsetWidth) {
//             position = 0;
//         }
        
//         track.style.transform = `translateX(${position}px)`;
//         animationId = requestAnimationFrame(animate);
//     }
    
//     animate();
// });

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.project-scrolling-container');
    const track = document.querySelector('.project-track');
    const content = document.querySelector('.project-content');
    const items = document.querySelectorAll('.inside');
    
    if (!items.length) return;
    
    // Clone items for seamless looping
    const clone = content.cloneNode(true);
    track.appendChild(clone);
    
    let animationId;
    let position = 0;
    const speed = 1; // Adjust speed (higher = faster)
    
    function animate() {
        position -= speed;
        
        // Reset when scrolled one content width
        if (Math.abs(position) >= content.offsetWidth) {
            position = 0;
        }
        
        track.style.transform = `translateX(${position}px)`;
        animationId = requestAnimationFrame(animate);
    }
    
    // Start animation
    animate();
    
    // Pause on hover
    container.addEventListener('mouseenter', () => {
        cancelAnimationFrame(animationId);
    });
    
    container.addEventListener('mouseleave', () => {
        animationId = requestAnimationFrame(animate);
    });
});



document.addEventListener('DOMContentLoaded', function() {
    // Initial load animations
    const hero = document.querySelector('.hero-container');
    setTimeout(() => {
        hero.style.opacity = '1';
    }, 100);

    // Scroll-triggered animations
    const animateOnScroll = () => {
        const sections = document.querySelectorAll('section, .scrolling-container, .project-scrolling-container, .work-container, .get-in');
        const projectItems = document.querySelectorAll('.detailed');
        
        // Set delays for project items
        projectItems.forEach((item, index) => {
            item.style.setProperty('--delay', index);
        });

        const isInViewport = (element) => {
            const rect = element.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
                rect.bottom >= 0
            );
        };

        const handleScroll = () => {
            sections.forEach(section => {
                if (isInViewport(section)) {
                    section.classList.add('visible');
                }
            });

            projectItems.forEach(item => {
                if (isInViewport(item)) {
                    item.classList.add('visible');
                }
            });
        };

        // Initial check
        handleScroll();
        
        // Throttle scroll events for performance
        let isScrolling;
        window.addEventListener('scroll', () => {
            window.clearTimeout(isScrolling);
            isScrolling = setTimeout(handleScroll, 66);
        }, false);
    };

    animateOnScroll();

    // Infinite scrolling for tech stack
    const setupInfiniteScroll = () => {
        const scrollingContent = document.querySelector('.scrolling-content');
        const projectContent = document.querySelector('.project-content');
        
        const duplicateContent = (element) => {
            const content = element.innerHTML;
            element.innerHTML += content;
        };

        duplicateContent(scrollingContent);
        duplicateContent(projectContent);
    };

    setupInfiniteScroll();

    // Add hover effects to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-3px)';
            button.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
            button.style.boxShadow = 'none';
        });
    });
});