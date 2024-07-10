document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('overlay');
    const body = document.body;
    const navbar = document.querySelector('nav.navbar');

    document.querySelectorAll('.timeline-image').forEach(image => {
        image.addEventListener('click', function() {
            overlay.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
            overlay.style.display = 'flex';
            body.classList.add('blurred');
            navbar.classList.add('blurred');
        });
    });

    overlay.addEventListener('click', function() {
        overlay.style.display = 'none';
        body.classList.remove('blurred');
        navbar.classList.remove('blurred');
    });

    const seeMoreButton = document.getElementById('seeMoreButton');
    const timelineEvents = document.querySelectorAll('.timeline-event');
    let currentVisibleIndex = 3;

    seeMoreButton.addEventListener('click', function() {
        for (let i = currentVisibleIndex; i < currentVisibleIndex + 3; i++) {
            if (timelineEvents[i]) {
                timelineEvents[i].style.display = 'block';
            }
        }
        currentVisibleIndex += 3;

        if (currentVisibleIndex >= timelineEvents.length) {
            seeMoreButton.style.display = 'none';
        }
    });

    timelineEvents.forEach((event, index) => {
        if (index >= 3) {
            event.style.display = 'none';
        }
    });
});
