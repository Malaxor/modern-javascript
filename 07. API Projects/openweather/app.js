
// Global Variables
//=========================================================================
const ui = new UI();
const storage = new Storage();

const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city, weatherLocation.state);
//=========================================================================

// Functions
//============================================================================
function getWeather() {

    weather
    .getWeather()
    .then(results => {

        ui.paint(results);  
    })
    .catch(err => console.log(err));
}
// Event Listeners
//============================================================================
document.addEventListener('DOMContentLoaded', getWeather);

const changeLocation = document.getElementById('w-change-btn');

changeLocation.addEventListener('click', () => {

    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    weather.changeLocation(city, state);
    storage.setLocationData(city, state);
    
    getWeather();
    $("#locModal").modal('hide');
});
