// burger nav
let burgerIcon = document.getElementById("burger");
let burgerNav = document.getElementById("burgerNav");

burgerIcon.addEventListener("click", function(){
    burgerNav.style.display = "flex";
    burgerNav.classList.toggle("appear");
})


// glide.js
new Glide('.glide').mount()

// lightbox2.js
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
})

// AOS.js
AOS.init();

// parsley.js
$('#form').parsley();