let totalPokemon;
let allPokemon = [];
const container = document.querySelector(".container");
const elementList = document.querySelector(".element-list");
const checkAllButton = document.querySelector(".reset-button");
const uncheckAllButton = document.querySelector(".remove-filters-button");
const searchBar = document.querySelector(".search-bar");
const hamBox = document.querySelector(".box");
const btn = document.querySelector(".btn1");
const menu = document.querySelector(".sticky-div");
const generationList = document.querySelectorAll(".generation-list li");

function fetchAllPokemon(generation) {
  fetch(`https://pokeapi.co/api/v2/${generation}`)
    .then((response) => response.json())
    .then((data) => {
      totalPokemon = data.pokemon_species.length;

      data.pokemon_species.forEach((pokemon) => {
        getPokemonData(pokemon);
      });
    });
}

function getPokemonData(pokemon) {
  allPokemon = [];
  let pokemonCompleted = {};
  fetch(pokemon.url)
    .then((response) => response.json())
    .then((poke) => {
      pokemonCompleted.id = poke.id;
      pokemonCompleted.name = poke.names[4].name.toUpperCase();
      pokemonCompleted.generation = poke.names[2].name;

      fetch(`https://pokeapi.co/api/v2/pokemon/${poke.id}`)
        .then((response) => response.json())
        .then((pokemon) => {
          let abilities = [];
          for (i = 0; i < pokemon.abilities.length; i++) {
            fetch(pokemon.abilities[i].ability.url)
              .then((response) => response.json())
              .then((frenchAbility) => {
                abilities.push(frenchAbility.names[3].name);
              });
          }

          let img = new Image(200, 200);
          img.src = pokemon.sprites.other.dream_world.front_default;
          pokemonCompleted.height = pokemon.height;
          pokemonCompleted.weight = pokemon.weight;
          pokemonCompleted.element = pokemon.types[0].type.name;
          pokemonCompleted.image = img;
          pokemonCompleted.abilities = abilities;

          allPokemon.push(pokemonCompleted);

          if (allPokemon.length === totalPokemon) {
            allPokemon.sort((a, b) => a.id - b.id);
            createPokemonCard(allPokemon);
          }
        });
    });
}

function createPokemonCard(array) {
  for (let i = 0; i < array.length; i++) {
    let cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", `card-container ${array[i].element}`);

    let cardInner = document.createElement("div");
    cardInner.setAttribute("class", `inner-card`);

    let backCard = document.createElement("div");
    backCard.setAttribute("class", `back-card ${array[i].element}`);

    let ul = document.createElement("ul");
    ul.innerText = "Capacités : ";
    backCard.appendChild(ul);

    let otherInfo = document.createElement("p");
    array[i].abilities.forEach((ability) => {
      let li = document.createElement("li");
      li.textContent = `${ability}`;
      ul.appendChild(li);
    });
    otherInfo.innerHTML = `
        <p> ${array[i].name} </p>
        <p> Taille : ${array[i].height / 10}m </p>
        <p> Poids : ${array[i].weight / 10}kg </p>
        `;

    let frontCard = document.createElement("div");
    frontCard.innerHTML = `<p> ${array[i].name} </p>`;
    frontCard.setAttribute("class", `front-card ${array[i].element}`);
    frontCard.appendChild(array[i].image);

    backCard.appendChild(otherInfo);
    cardInner.appendChild(frontCard);
    cardInner.appendChild(backCard);
    cardContainer.appendChild(cardInner);
    container.appendChild(cardContainer);
  }
}

fetchAllPokemon("generation/1");

// Generation

generationList.forEach((li) => {
  li.addEventListener("click", (e) => {
    e = e.target;
    generation = e.getAttribute("id");
    container.innerHTML = "";
    fetchAllPokemon(`${generation}`);
  });
});

// Responsive Menu

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  if (btn.classList.contains("active")) {
    menu.classList.remove("none");
    menu.classList.add("sticky");
  } else {
    menu.classList.add("none");
    menu.classList.remove("sticky");
  }
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (window.pageYOffset >= document.querySelector("header").offsetHeight) {
    hamBox.classList.remove("none");
  } else if (
    window.pageYOffset < document.querySelector("header").offsetHeight
  ) {
    menu.classList.remove("none");
    menu.classList.remove("sticky");
    hamBox.classList.add("none");
    btn.classList.remove("active");
  }
}

window.addEventListener("resize", () => {
  if (window.innerWidth < 1100) {
    hamBox.classList.remove("none");
    menu.classList.add("none");
  } else {
    hamBox.classList.add("none");
    menu.classList.remove("none");
    btn.classList.remove("active");
    menu.classList.remove("sticky");
  }
});

// Checkboxes

elementList.addEventListener("change", (e) => {
  e = e.target;
  attribute = e.getAttribute("id");

  allCards = document.querySelectorAll(".card-container");
  if (!e.checked) {
    allCards.forEach((card) => {
      if (card.classList.contains(`${attribute}`)) {
        card.style.display = "none";
      }
    });
  } else {
    allCards.forEach((card) => {
      if (card.classList.contains(`${attribute}`)) card.style.display = "block";
    });
  }
});

// Reset filters

checkAllButton.addEventListener("click", () => {
  let allInputs = document.querySelectorAll("input");
  allInputs.forEach((input) => {
    if (input.type === "checkbox") {
      input.checked = true;
    }
  });

  document.querySelectorAll(".card-container").forEach((div) => (div.style.display = "block"));
});

// Remove all filters

uncheckAllButton.addEventListener("click", () => {
  let allInputs = document.querySelectorAll("input");
  allInputs.forEach((input) => {
    if (input.type === "checkbox") {
      input.checked = false;
    }
  });
  document.querySelectorAll(".card-container").forEach((div) => (div.style.display = "none"));
});

// Searchbar

searchBar.addEventListener("input", (e) => {
  e = e.target.value;
  let search = e.toUpperCase();
  document.querySelectorAll(".card-container").forEach((card) => {
    if (card.innerHTML.includes(search)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
