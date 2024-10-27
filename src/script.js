function displayCocktail(response) {
  new Typewriter("#cocktail-maker", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: "natural",
  });
}

function generateCocktail(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "0be192793f55aa475o5602t2cabd6e24";
  let prompt = `User Instructions: Generate a cocktail with the ingredient ${instructionsInput.value}`;
  let context =
    "You are an experienced mixologist who crafts special cocktails. Your mission is to only generate a cocktail based on the ingredients in basic HTML following the user instructions in a <p> and separate each line with <br />. List the ingredients and then explain the recipe. Finish the recipe with <em>Cheers! 🥂</em>";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let cocktailMakerElement = document.querySelector("#cocktail-maker");
  cocktailMakerElement.classList.remove("hide");
  cocktailMakerElement.innerHTML = `<div class="preparing"> 🍸 Shaking a cocktail for you with <em>${instructionsInput.value}</em></div>`;
  axios.get(apiUrl).then(displayCocktail);
}

let cocktailElement = document.querySelector("#cocktail-shaker");
cocktailElement.addEventListener("submit", generateCocktail);
