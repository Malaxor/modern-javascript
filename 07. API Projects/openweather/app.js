
const weather = new Weather('Detroit', 'Michigan');

function getWeather() {
    weather
    .getWeather()
    .then(data => {
        console.log(data);
    });
}

document.addEventListener('DOMContentLoaded', getWeather);