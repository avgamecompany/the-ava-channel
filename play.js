document.addEventListener("DOMContentLoaded", function() {
    // Contact form submission handling (for demonstration purposes)
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('תודה על הפנייתך! ניצור קשר בהקדם.');
        form.reset();
    });
});
