document.addEventListener('DOMContentLoaded', function () {
    // Example: Simple form validation
    const rsvpForm = document.querySelector('#rsvp-form');
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for your RSVP!');
        });
    }
});
