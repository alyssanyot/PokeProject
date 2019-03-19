let request = new XMLHttpRequest();
let url = "https://pokeapi.co/api/v2/pokemon";
let pokemonCounter = 0;

request.open("GET", url, true);

request.onload = function() {
  // Begin accessing JSON data here. Data stored in request.response
  let data = JSON.parse(this.response);

  let pokeList = document.getElementById('pokelist');
  
  //Create the initial row
  let row = null;

  //Check to make sure that we successfully received the data 
  if (request.status >= 200 && request.status < 400) {
    data.results.forEach(pokemon => {
        
        //Check if this is the start of a new row; if so, create a row and append it to the container
        if (pokemonCounter % 4 == 0) {
          row = document.createElement('div');
          row.className = "row";
          pokeList.appendChild(row);
        }
        
        //Create a new div of col size 3 (we will fit 4 to a row)
        let card = document.createElement('div');
        card.className = "col-3 pokemon";
        
        //Pokemon Name
        let p = document.createElement('p');
        p.textContent = pokemon.name;
    
        //Update counter for number of columns currently in row
        pokemonCounter++;
       
        card.appendChild(p);
        row.appendChild(card);
    });
  }
};

request.send();
