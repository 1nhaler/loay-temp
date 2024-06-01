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


// used for the service modal
document.addEventListener('DOMContentLoaded', function () {
    $('#exampleModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); // Button that triggered the modal
        var serviceId = button.data('service'); // Extract info from data-* attributes
        var modal = $(this);

        // Get the data from the JSON object
        var service = serviceData[serviceId];
        if (service) {
            modal.find('#modal-title').text(service.title);
            modal.find('#modal-description').text(service.description);
        }
    });
});

const serviceData = {
    "1": {
        "title": "Service 1",
        "description": "Description for Service 1. Detailed information about what Service 1 offers."
    },
    "2": {
        "title": "Service 2",
        "description": "Description for Service 2. Detailed information about what Service 2 offers."
    },
    "3": {
        "title": "Service 3",
        "description": "Description for Service 3. Detailed information about what Service 3 offers."
    },
    "4": {
        "title": "Service 4",
        "description": "Description for Service 4. Detailed information about what Service 4 offers."
    }
};
