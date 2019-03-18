let request = new XMLHttpRequest();
let url = "https://pokeapi.co/api/v2/pokemon";
let colCounter = 0;

request.open("GET", url, true);

//Callback function executes when request is successfully completed
request.onload = function() {
  // Begin accessing JSON data here. Data stored in request.response
  let data = JSON.parse(this.response);

  let pokeList = document.getElementById('pokelist');
  
  //Create the initial row and append it to the container
  let row = document.createElement('div');
  row.className = "row";
  pokeList.appendChild(row);
  
  //Check to make sure that we successfully received the data 
  if (request.status >= 200 && request.status < 400) {
    data.results.forEach(pokemon => {
        
        //Check if this is the start of a new row; if so, create a row and append it to the container
        if (colCounter == 0) {
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
        colCounter++;
        //If we have reached the max number of columns in a row, reset the counter
        if(colCounter == 4){
          colCounter = 0; 
        } 
        card.appendChild(p);
        row.appendChild(card);
    });
  }

};

request.send();
