function scrollToSection(containerIndex) {
    const section = document.getElementById(`section${containerIndex}`);
    section.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const dotId = `dot${entry.target.id.replace('section', '') || '4'}`;
            const dot = document.getElementById(dotId);
            if (entry.isIntersecting) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    const dots = document.querySelectorAll(".dot");
    dots.forEach(dot => {
        dot.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: "smooth" });

            dots.forEach(d => d.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

