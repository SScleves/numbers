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
