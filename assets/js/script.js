// burger nav
let burgerIcon = document.getElementById("burger");
let burgerNav = document.getElementById("burgerNav");

burgerIcon.addEventListener("click", function(){
    burgerNav.style.display = "flex";
    burgerNav.classList.toggle("appear");
})

// nav
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';

        let navMenu = document.querySelectorAll("#menu li a");

        navMenu.forEach(navAnchor => {
            const href = navAnchor.getAttribute('href');
            const normalizedHref = href.replace('./', '');

            if (normalizedHref === currentPage) {
                navAnchor.classList.add('highlight');
            } else {
                navAnchor.classList.remove('highlight');
            }
        });
    }, 0);
});

// popular destination
const glideSelector = '.glide';
let glideInstance = null;

function createGlideInstance() {
    const isMobile = window.innerWidth < 768;

    // Destroy previous instance if it exists
    if (glideInstance) {
      glideInstance.destroy();
      glideInstance = null;
    }

    // Create a new instance with the desired type
    glideInstance = new Glide(glideSelector, {
      type: isMobile ? 'slider' : 'carousel',
      perView: isMobile ? 1 : 3.3,
      focusAt: 0,
      gap: 32,
      animationDuration: 600,
    });

    glideInstance.mount();
}

// Initialize on load
createGlideInstance();

// Debounce resize to avoid too many reinitializations
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      createGlideInstance();
    }, 300);
});


// glide.js
// new Glide('.glide').mount()

// lightbox2.js
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
})

// AOS.js
AOS.init();

// parsley.js
$('#form').parsley();