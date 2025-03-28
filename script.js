// Mobile Menu Toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Close mobile menu if open
        document.querySelector('.navbar').classList.remove('active');
    });
});

// Form Submission
document.getElementById('safari-booking').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your booking request! Chammi will contact you shortly to confirm your safari.');
    this.reset();
});

// Simple Gallery Lightbox (can be enhanced)
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        const imgSrc = this.querySelector('img').src;
        const lightbox = document.createElement('div');
        lightbox.style.position = 'fixed';
        lightbox.style.top = '0';
        lightbox.style.left = '0';
        lightbox.style.width = '100%';
        lightbox.style.height = '100%';
        lightbox.style.backgroundColor = 'rgba(0,0,0,0.9)';
        lightbox.style.display = 'flex';
        lightbox.style.alignItems = 'center';
        lightbox.style.justifyContent = 'center';
        lightbox.style.zIndex = '2000';
        
        const img = document.createElement('img');
        img.src = imgSrc;
        img.style.maxHeight = '90%';
        img.style.maxWidth = '90%';
        img.style.objectFit = 'contain';
        
        lightbox.appendChild(img);
        lightbox.addEventListener('click', function() {
            document.body.removeChild(lightbox);
        });
        
        document.body.appendChild(lightbox);
    });
});