
const Url = "https://api.rawg.io/api/games";

function createGames (respons) {
    return respons.json ();
}

function handleJson (json) {
    const results = json.results;
    console.dir(json);

    const container = document.querySelector(".results");
    let html = "";
    
    results.forEach(function(result) {
        html += `<div class="game">
        <h2>${result.name}</h2>
        <img src="${result.background_image}" alt=${result.name}>
        </div>`;
    
        console.log(result.name);
      });
      resultsContainer.innerHTML = html;
    }
    
    function handleError(error) {
      console.log(error);
    }
    
    fetch(Url)
      .then(createGames)
      .then(handleJson)
      .catch(handleError);

    }
