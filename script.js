// Step 1: Animated Skill Bars (Intersection Observer)
const skillsSection = document.querySelector('#skills');
const progressBars = document.querySelectorAll('.progress');

const showSkills = () => {
    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
    });
};

// Trigger animation when user scrolls to skills section
const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
        showSkills();
    }
});
observer.observe(skillsSection);


// Step 2: Contact Form Handling & LocalStorage
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple Validation
        if(name && email && message) {
            const formData = { name, email, message };
            
            // Store in LocalStorage
            localStorage.setItem('contactData', JSON.stringify(formData));
            
            // Redirect to new page
            window.location.href = 'form-details.html';
        } else {
            alert("Please fill all fields!");
        }
    });
}

// Step 3: Open Projects with JS (No <a> tag)
document.getElementById('project1').addEventListener('click', () => {
    window.location.href = "https://github.com"; 
});
document.getElementById('project2').addEventListener('click', () => {
    window.location.href = "https://google.com"; 
});


// Step 4: Canvas Drawing
const canvas = document.getElementById('myCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    // Draw a blue rectangle
    ctx.fillStyle = '#38bdf8';
    ctx.fillRect(10, 10, 150, 80);
    // Draw text
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.fillText("Hello Canvas", 20, 50);
}


// Step 5: Image Slider
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

document.getElementById('nextBtn').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
});

document.getElementById('prevBtn').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
});


// Step 6: Dark/Light Mode Toggle
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    // Change icon based on mode
    themeBtn.textContent = document.body.classList.contains('light-mode') ? '🌑' : '☀️';
});


// Step 7: Back to Top Button
const topBtn = document.getElementById('back-to-top');

window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});