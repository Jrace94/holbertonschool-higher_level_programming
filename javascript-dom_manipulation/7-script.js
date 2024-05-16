document.addEventListener("DOMContentLoaded", function () {
    var listMovies = document.getElementById("list_movies");

    fetch('https://swapi-api.hbtn.io/api/films/?format=json')
        .then(response => response.json())
        .then(data => {
            data.results.forEach(movie => {
                var listItem = document.createElement("li");
                listItem.textContent = movie.title;
                listMovies.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching movies:', error);
        });
});