function displayCocktail(response) {
  new Typewriter("#cocktail-maker", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
  });
}

function generateCocktail(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "0be192793f55aa475o5602t2cabd6e24";
  let prompt = `User Instructions: Generate a cocktail with the ingredient ${instructionsInput.value}`;
  let context =
    "You are an experienced mixologist who crafts special cocktials. Your mission is to only generate a cocktail based on one ingredient in basic HTML following the user instructions in a <p> and separate each line with <br />.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayCocktail);
}

let cocktailElement = document.querySelector("#cocktail-shaker");
cocktailElement.addEventListener("submit", generateCocktail);
