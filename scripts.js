function getNumberFact() {
    let number = document.getElementById("number-input").value;

    // Using the Numbers API for this example.
    let apiURL = `http://numbersapi.com/${number}`;

    fetch(apiURL)
        .then(response => response.text())
        .then(data => {
            document.getElementById("fact").textContent = data;
        })
        .catch(error => {
            console.error("Error fetching the number fact:", error);
        });
}
