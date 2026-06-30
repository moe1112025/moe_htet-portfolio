document.addEventListener("DOMContentLoaded", () => {
    
    // 1. TERMINAL PRELOADER CONTROLLER
    const progressFill = document.getElementById("progressFill");
    const welcomeText = document.getElementById("welcomeText");
    const preloader = document.getElementById("preloader");
    const mainContent = document.getElementById("main-content");
    
    const welcomeString = "WELCOME TO MY PORTFOLIO WEBSITE... ACCESSED SECURELY.";
    let charIndex = 0;
    let progress = 0;

    // Fast loading indicator tracking
    const progressInterval = setInterval(() => {
        progress += 5;
        if (progress <= 100) {
            progressFill.style.width = `${progress}%`;
        }
    }, 40);

    // Dynamic keystroke printer
    function typeTerminal() {
        if (charIndex < welcomeString.length) {
            welcomeText.textContent += welcomeString.charAt(charIndex);
            charIndex++;
            setTimeout(typeTerminal, 50);
        } else {
            setTimeout(shutPreloader, 500);
        }
    }

    // Initialize typewriter simulation
    setTimeout(typeTerminal, 200);

    function shutPreloader() {
        clearInterval(progressInterval);
        progressFill.style.width = "100%";
        
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";
        
        mainContent.classList.remove("hidden");
        mainContent.classList.add("visible");
        
        // Execute initial scroll check right after loading completes
        revealSections();
    }

    // 2. DARK / LIGHT THEME TOGGLE (Preserving original logic)
    const themeToggle = document.getElementById("themeToggle");
    
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const currentTheme = document.body.getAttribute("data-theme");
            if (currentTheme === "light") {
                document.body.removeAttribute("data-theme");
                themeToggle.textContent = "☀️";
            } else {
                document.body.setAttribute("data-theme", "light");
                themeToggle.textContent = "🌙";
            }
        });
    }

    // 3. SMOOTH SCROLL VISUAL REVEAL ANIMATION
    const sections = document.querySelectorAll(".reveal");

    function revealSections() {
        const triggerBottom = window.innerHeight * 0.85;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            
            if (sectionTop < triggerBottom) {
                section.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
});