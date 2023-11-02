document.getElementById("fetchDogImage").addEventListener("click", function() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById("dogImage").src = data.message;
        });
});

document.getElementById("fetchCatImage").addEventListener("click", function() {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            document.getElementById("catImage").src = data[0].url;
        });
});
document.addEventListener('DOMContentLoaded', (event) => {
    // Get Chuck Norris Joke
    const chuckJokeButton = document.getElementById('chuckNorrisJoke');
    const jokeText = document.getElementById('jokeText');
  
    chuckJokeButton.addEventListener('click', () => {
      fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
          jokeText.textContent = data.value; // Display the joke
        })
        .catch(error => console.error('Error fetching Chuck Norris joke:', error));
    });
  
    // Get Cat Fact
    const catFactButton = document.getElementById('catFact');
    const factText = document.getElementById('factText');
  
    catFactButton.addEventListener('click', () => {
      fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
          factText.textContent = data.fact; // Display the cat fact
        })
        .catch(error => console.error('Error fetching cat fact:', error));
    });
  });
  