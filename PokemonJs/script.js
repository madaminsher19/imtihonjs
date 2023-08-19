const elContainer = document.querySelector(".container");

function findElement(element, parent) {
    return document.querySelector(element);
}

const elCards = findElement(".cards");
const elSearchBtn = findElement(".search-btn");
const elSearchInput = findElement(".search-input");

function renderPokemons(array, parent) {
    parent.innerHTML = "";

    array.forEach((element) => {
        const newCard = document.createElement("div");
        newCard.className = "card";
        newCard.style.width = "18rem";

        newCard.innerHTML = `
              <img class="card-img-top w-75 d-flex m-0 m-auto w-18rem gap-100" src="${element.img}" alt="${element.name}" />
          <div class="card-body">
              <h5 class="card-title">${element.name}</h5>
              <p class="card-text">${element.type}</p>

               <div class="d-flex gap-5">
              <p class="card-text">${element.weight}</p>
              <p class="card-text">${element.height}</p>
                </div>
  
      
                <button  data-id="${element.id}" id="delete-btn" class="btn btn-primary">Delete</button>
          </div>
          `;
        newCard.dataset.id = element.id;
        parent.appendChild(newCard);
    });
}

elCards.addEventListener("click", function (evt) {
    if (evt.target.id === "delete-btn") {
        const id = Number(evt.target.dataset.id);
        console.log(id);
        pokemons = pokemons.filter((element) => element.id !== id);

        renderPokemons(pokemons, elCards);
    }
});

renderPokemons(pokemons, elCards);

elSearchBtn.addEventListener("click", (evt) => {
    const newArray = [];
    pokemons.forEach((pokemons) => {
        if (
            pokemons.name
                .toLowerCase()
                .includes(elSearchInput.value.toLowerCase())
        ) {
            newArray.push(pokemons);
        }
    });

    renderPokemons(newArray, elCards);
});
