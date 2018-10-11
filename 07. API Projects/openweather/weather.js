
class Weather {

    constructor(city, state) {
        
        this.apiKey = "166a433c57516f51dfab1f7edaed8413";
        this.city = city
        this.state = state;
    }
    async getWeather() {

        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=imperial&appid=${this.apiKey}`);
        const weather = await response.json();
        return weather;
    }
    changeLocation(city, state) {
        
        this.city = city;
        this.state = state;
    }    
}