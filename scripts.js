function getNumberFact() {
    let number = document.getElementById("number-input").value;
    let apiURL = `https://numbersapi.com/${number}`;

    fetch(apiURL)
        .then(response => response.text())
        .then(data => {
            document.getElementById("fact").textContent = data;
        })
        .catch(error => {
            console.error("Error fetching the number fact:", error);
        });
}

function getChuckNorrisJoke() {
    let apiURL = 'https://api.chucknorris.io/jokes/random';

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            document.getElementById("chuckNorrisJoke").textContent = data.value;
        })
        .catch(error => {
            console.error("Error fetching the Chuck Norris joke:", error);
        });
}

function getCatFact() {
    let apiURL = 'https://catfact.ninja/fact';

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            document.getElementById("catFact").textContent = data.fact;
        })
        .catch(error => {
            console.error("Error fetching the cat fact:", error);
        });
}

function getDadJoke() {
    let apiURL = 'https://icanhazdadjoke.com/';

    fetch(apiURL, {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById("dadJoke").textContent = data.joke;
        })
        .catch(error => {
            console.error("Error fetching the dad joke:", error);
        });
}