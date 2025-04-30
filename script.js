document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.scrolling-container');
    const track = document.querySelector('.scrolling-track');
    const content = document.querySelectorAll('.scrolling-content');
    
    // Clone the content for seamless looping
    content.forEach(el => {
        const clone = el.cloneNode(true);
        track.appendChild(clone);
    });
    
    let animationId;
    let position = 0;
    const speed = 1; // Adjust speed
    
    function animate() {
        position = (position - speed);
        
        // Reset when scrolled one content width
        if (Math.abs(position) >= content[0].offsetWidth) {
            position = 0;
        }
        
        track.style.transform = `translateX(${position}px)`;
        animationId = requestAnimationFrame(animate);
    }
    
    animate();
});