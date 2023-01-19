const apiURL = "https://ghibliapi.herokuapp.com/films" 





// To ensure Cypress tests work as expeded, add any code/functions that you would like to run on page load inside this function

function run() {
    function fetchAPI(apiURL) {
        fetch(apiURL)
        .then((response) => 
            response.json())
        .then((films) => {
            for (let film of films) {
                const title = film.title;
                // const ingredients = recipe.ingredients;
                // const servings = recipe.servings;
                // const instruct = recipe.instructions
                console.log(title)
            };
        // .catch(err => 
        // console.error(err));
        
    
        });
    }
    fetchAPI(apiURL)
}    
 // Add code you want to run on page load here
 
// This function will "pause" the functionality expected on load long enough to allow Cypress to fully load
// So that testing can work as expected for now
// A non-hacky solution is being researched

setTimeout(run, 1000);
