// Get the visit count from localStorage, or set it to 0 if not present
let visitCount = localStorage.getItem('visitCount') ? parseInt(localStorage.getItem('visitCount')) : 0;

// Increment the visit count
visitCount++;

// Save the updated count back to localStorage
localStorage.setItem('visitCount', visitCount);

// Display the visit count on the page
document.getElementById('visit-count').textContent = visitCount;

// Function to reset the visit count
function resetCounter() {
    // Reset the visit count to 0
    visitCount = 5;
    localStorage.setItem('visitCount', visitCount);
    // Update the displayed count
    document.getElementById('visit-count').textContent = visitCount;
}

// Add an event listener to the reset button
document.getElementById('reset-button').addEventListener('click', resetCounter);

