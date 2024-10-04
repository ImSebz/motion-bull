document.addEventListener('DOMContentLoaded', () => {
    const bullImg = document.querySelector('.bull-img');
    const container = document.querySelector('.motion-container');

    const calculateRotation = (x, y, rect) => {
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;

        const rotateX = deltaY * 50; // Adjust the multiplier for more/less tilt
        const rotateY = deltaX * -50; // Adjust the multiplier for more/less tilt

        return `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMove = (x, y) => {
        const rect = container.getBoundingClientRect();
        bullImg.style.transform = calculateRotation(x, y, rect);
    };

    container.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        handleMove(touch.clientX, touch.clientY);
    });

    container.addEventListener('mousemove', (e) => {
        handleMove(e.clientX, e.clientY);
    });

    const resetTransform = () => {
        bullImg.style.transform = 'rotateX(0deg) rotateY(0deg)';
    };

    container.addEventListener('touchend', resetTransform);
    container.addEventListener('mouseleave', resetTransform);
});