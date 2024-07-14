window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    setTimeout(() => {
        mainContent.style.display = 'block';

        loadingScreen.style.transform = 'translateY(-100%)';

        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500); 
    }, 1000); 
});
