// const init = () => {
  
// }

// document.addEventListener('DOMContentLoaded', init);
const init = () => {
    // Get the form and movie details section elements
    const form = document.querySelector('form');
    const movieDetails = document.getElementById('movieDetails');
  
    // Add an event listener to the form
    form.addEventListener('submit', (event) => {
      // Prevent the form from submitting normally
      event.preventDefault();
  
      // Get the ID from the input field
      const id = document.getElementById('searchByID').value;
  
      // Search for a movie with that ID
      const movie = document.querySelector(`li div:contains(${id})`).parentNode;
  
      // If a movie is found, update the movie details section
      if (movie) {
        movieDetails.querySelector('h4').innerText = movie.querySelector('h3').innerText;
        movieDetails.querySelector('p').innerText = `This is a summary for movie with ID: ${id}`;
      } 
      // If no movie is found, update the movie details section to say 'Movie not found'
      else {
        movieDetails.querySelector('h4').innerText = 'Movie not found';
        movieDetails.querySelector('p').innerText = '';
      }
    });
  }
  
  // Add the event listener to the document
  document.addEventListener('DOMContentLoaded', init);
  