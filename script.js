// script.js
document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackContainer = document.getElementById('feedbackContainer');

    // Mock data for existing feedback
    let feedbackData = [
        { name: 'John Doe', email: 'john@example.com', feedback: 'Great service!' },
        { name: 'Jane Smith', email: 'jane@example.com', feedback: 'Very satisfied with the product.' },
    ];

    const displayFeedback = () => {
        feedbackContainer.innerHTML = '';
        feedbackData.forEach((item, index) => {
            const { name, email, feedback } = item;
            const card = document.createElement('div');
            card.className = 'feedback-card';
            card.style.setProperty('--delay', `${index * 0.1}s`);
            card.innerHTML = `<h3>${name}</h3><p>${email}</p><p>${feedback}</p>`;
            feedbackContainer.appendChild(card);
        });
    };

    feedbackForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const feedback = event.target.feedback.value;
        
        // Add new feedback to the data array
        feedbackData.push({ name, email, feedback });
        
        // Clear the form
        event.target.reset();
        
        // Display the updated feedback
        displayFeedback();
    });

    // Initial display of feedback data
    displayFeedback();
});
