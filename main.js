const apiURL = "https://resource-ghibli-api.onrender.com/films";
const option = document.querySelector("option");
const displayInfo = document.querySelector("#display-info");
const h3 = document.createElement("h3");
const p = document.createElement("p");
// To ensure Cypress tests work as expeded, add any code/functions that you would like to run on page load inside this function

function run(apiURL) {
    
    
    
    
        fetch(`${apiURL}`)
        .then((response) => 
            response.json())
           

        .then((films) => {
            for (let film of films) {

                // const film = response
                const filmID = film.id;
                const filmTitle = film.title
                const releaseYear = film.release_date
                const movieDescription = film.description


                console.log(filmTitle);
                console.log(filmID);
                option.append(filmID);
                option.textContent = films.title;
                displayInfo.append(h3);
                h3.append(filmTitle);
                displayInfo.append(p);
                p.append(releaseYear);
                p.append(movieDescription);
            }
             
                
                
        })
         .catch((err) => 
    
         console.error(err)
            )
    }
 run(apiURL);
// const select = document.querySelector("select");
// select.addEventListener(click)

 // Add code you want to run on page load here
 
// This function will "pause" the functionality expected on load long enough to allow Cypress to fully load
// So that testing can work as expected for now
// A non-hacky solution is being researched

setTimeout(run, 1000);
