// Get all the star elements
const stars = document.querySelectorAll('.star');

// Get the selected rating element
const selectedRating = document.querySelector('.selected-rating');

// Add event listener to each star
stars.forEach(star => {
  star.addEventListener('click', () => {
    const value = star.dataset.value; // Get the value of the selected star
    selectedRating.textContent = `You rated it ${value} stars.`;
  });
});