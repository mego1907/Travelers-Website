// Add Active Class
const navItems = document.querySelectorAll('.navbar .nav-item');

for(let i = 0; i <= navItems.length; i++ ) {
    navItems[i].addEventListener("click", () => {
        // remove Class Active
        navItems.forEach((e) => {e.classList.remove("active")});
        // add Class Active
        navItems[i].classList.add("active");
    });
}




// Video Variables
const videoBox = document.querySelector('.video-section .video-box');
const openBtn = document.querySelector('.video-section .video-icon');
const closeBtn = document.querySelector('.video-section .close-btn');

// Open Video Model
openBtn.addEventListener("click", () => {
    videoBox.style.display = "flex";
});

// Close Video Model
closeBtn.addEventListener("click", (e) => {
    videoBox.style.display = "none";
});