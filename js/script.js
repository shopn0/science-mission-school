document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.stellarnav'); // Using stellarnav as the main menu class

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active'); // Toggle class for hamburger animation
        });

        // Close menu when a link is clicked (for single-page navigation or on mobile)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) { // Only close on mobile
                    navLinks.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            });
        });
    }

    // Sticky Header/Menu (if needed, the CSS sticky position handles most of it)
    // You might add JS here if you need more complex behavior, like adding a class on scroll.
    const header = document.getElementById('myHeader'); // Assuming menu-section has this ID
    if (header) {
        let sticky = header.offsetTop;
        window.onscroll = function() {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky-menu"); // Add a class for sticky styles if needed
            } else {
                header.classList.remove("sticky-menu");
            }
        };
    }


    // Basic Slider (Manual Slide Logic)
    let slideIndex = 0; // Start at 0 for array indexing
    const slides = document.querySelectorAll('.slider-active .slider_wrpp');
    if (slides.length > 0) {
        function showSlides() {
            slides.forEach((slide, index) => {
                slide.style.display = 'none'; // Hide all
            });
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1; }
            slides[slideIndex - 1].style.display = 'block'; // Show current

            setTimeout(showSlides, 4000); // Change image every 4 seconds
        }
        showSlides();
    }
});

// For dropdowns in the .stellarnav (basic click toggle for sub-menus on mobile)
document.querySelectorAll('.stellarnav ul li.has-sub > a').forEach(item => {
    item.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) { // Only enable on mobile
            e.preventDefault(); // Prevent default link behavior
            const subMenu = this.nextElementSibling;
            if (subMenu && subMenu.classList.contains('sub-menu')) {
                subMenu.style.display = subMenu.style.display === 'flex' ? 'none' : 'flex';
                this.parentElement.classList.toggle('open'); // Add a class to indicate open
            }
        }
    });
});