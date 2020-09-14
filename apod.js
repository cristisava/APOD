var baseUrl = new URL ("https://api.nasa.gov/planetary/apod?api_key=xkVfkeihtGBTCPJSAxiANqtwKcARXTXROq9NX8bN")

function showApod() {
    displayLoader();

    fetch(baseUrl,
        {method: "GET"})
        .then(
            function(response){
                return response.json();
            }
        ).then(
            function(jsonResp){
                displayApod(jsonResp);
            }
        ).finally(
            hideLoader
        );
}

function displayApod(apod){
    var Title = document.getElementById("title");
    var Picture = document.getElementById("apod");
    var Description = document.getElementById("description");
    Title.innerText = apod.title;
    Picture.src = apod.hdurl;
    Description.innerText = apod.explanation;
}

function displayLoader() {
    var loader = document.getElementsByClassName("loader")[0];
    var container = document.getElementsByClassName("container")[0];
    loader.style.display = "block";
    container.style.opacity = 0.5;
}

function hideLoader() {
    var loader = document.getElementsByClassName("loader")[0];
    var container = document.getElementsByClassName("container")[0];
    loader.style.display = "none";
    container.style.opacity = 1;
}
