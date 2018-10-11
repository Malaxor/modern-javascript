
const weather = new Weather('Detroit', 'Michigan');
const ui = new UI();

function getWeather() {

    weather
    .getWeather()
    .then(results => {

        ui.paint(results);     
    })
    .catch(err => console.log(err));
}

document.addEventListener('DOMContentLoaded', getWeather);