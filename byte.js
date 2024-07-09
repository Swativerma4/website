document.addEventListener('DOMContentLoaded', function() {
    const timeline = document.getElementById('timeline');
    const seeMoreBtn = document.getElementById('seeMoreBtn');
    const overlay = document.getElementById('overlay');
    const body = document.body;
    const visibleCount = 3;
    let visibleEvents = 0;

    // Sample data
    const events = [
        {
            date: '1-Jul-2024',
            title: 'Hiring The Right Way - Divulging into The World of Diversity Hiring',
            description: 'Behavioural',
            imageSrc: 'https://img-cdn.pixlr.com/image-generator/history/65ba5701b4f4f4419f746bc3/806ecb58-167c-4d20-b658-a6a6b2f221e9/medium.webp'
        },
       
        {
            date: '5-Jul-2024',
            title: 'More Event Title',
            description: 'Details about the event',
            imageSrc: '/mnt/data/Screenshot 2024-07-10 001819.png'
        },
        {
            date: '6-Jul-2024',
            title: 'More Event Title',
            description: 'Details about the event',
            imageSrc: '/mnt/data/Screenshot 2024-07-10 001819.png'
        }
    ];

    // Function to create event element
    function createEventElement(event) {
        const eventElement = document.createElement('div');
        eventElement.classList.add('timeline-event', 'hidden');

        eventElement.innerHTML = `
            <div class="timeline-dot"></div>
            <span class="timeline-date">${event.date}</span>
            <div class="timeline-content">
                <h2>${event.title}</h2>
                <p>${event.description}</p>
                <div class="image-container">
                    <img src="${event.imageSrc}" alt="${event.title}" class="timeline-image">
                </div>
            </div>
        `;

        return eventElement;
    }

    // Function to show events
    function showEvents(count) {
        const hiddenEvents = document.querySelectorAll('.timeline-event.hidden');
        for (let i = 0; i < count && hiddenEvents[i]; i++) {
            hiddenEvents[i].classList.remove('hidden');
            hiddenEvents[i].classList.add('visible');
        }
        if (document.querySelectorAll('.timeline-event.hidden').length === 0) {
            seeMoreBtn.style.display = 'none';
        }
    }

    // Load initial events
    events.forEach(event => {
        const eventElement = createEventElement(event);
        timeline.appendChild(eventElement);
    });

    // Show initial set of events
    showEvents(visibleCount);

    // Handle See More button click
    seeMoreBtn.addEventListener('click', function() {
        showEvents(visibleCount);
    });

    // Handle image click
    timeline.addEventListener('click', function(event) {
        const target = event.target;
        if (target.classList.contains('timeline-image')) {
            overlay.innerHTML = `<img src="${target.src}" alt="${target.alt}">`;
            overlay.style.display = 'flex';
            navbar.classList.add('blurred-grey');
            body.classList.add('blurred-grey');
        }
    });

    // Handle overlay click
    overlay.addEventListener('click', function() {
        overlay.style.display = 'none';
        body.classList.remove('blurred-grey');
        navbar.classList.remove('blurred-grey');
    });
});
