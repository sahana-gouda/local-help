// Search functionality
document.getElementById('searchBtn').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const resultsList = document.getElementById('resultsList');

    const services = [
        { name: 'Food Distribution', location: 'Downtown', description: 'Free meals for the homeless.' },
        { name: 'Medical Assistance', location: 'Central', description: 'Health camps for basic checkups.' },
        { name: 'Education Support', location: 'Westside', description: 'Tutoring for underprivileged children.' },
        { name: 'Environmental Cleanup', location: 'Park Area', description: 'Monthly cleaning drives.' },
    ];

    resultsList.innerHTML = '';

    const filtered = services.filter(
        s => s.name.toLowerCase().includes(query) || s.location.toLowerCase().includes(query)
    );

    filtered.forEach(s => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${s.name}</strong><br><em>${s.location}</em><br>${s.description}`;
        resultsList.appendChild(li);
    });

    if (filtered.length === 0) {
        resultsList.innerHTML = '<li>No results found.</li>';
    }
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    e.target.reset();
});
