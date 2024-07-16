let scrollTimeout;

function setAnimationSpeed(fast) {
    const scrollLeftTrack = document.querySelector('.autoScrollLeft .slide-track');
    const scrollRightTrack = document.querySelector('.autoScrollRight .slide-track');
    
    if (fast) {
        scrollLeftTrack.style.animation = 'scrollRightFast 5s linear infinite';
        scrollRightTrack.style.animation = 'scrollLeftFast 5s linear infinite';
    } else {
        scrollLeftTrack.style.animation = 'scrollRight 50s linear infinite';
        scrollRightTrack.style.animation = 'scrollLeft 50s linear infinite';
    }
}

window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    setAnimationSpeed(true);
    
    scrollTimeout = setTimeout(() => {
        setAnimationSpeed(false);
    }, 10);
});