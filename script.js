document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const jobPosting = event.target.closest('.job-posting');
        jobPosting.remove();
    });
});

document.querySelectorAll('.more-btn').forEach(button => {
    button.addEventListener('mouseenter', (event) => {
        event.target.style.backgroundColor = '#003f7f';
    });

    button.addEventListener('mouseleave', (event) => {
        event.target.style.backgroundColor = '#007bff';
    });
});
