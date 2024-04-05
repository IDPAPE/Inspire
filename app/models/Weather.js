

export class Weather {
    constructor(data) {
        this.name = data.name
        this.tempK = data.main.temp
        this.tempC = this.tempK - 237.15
        this.tempF = this.tempC * (9 / 5) + 32
        this.displayedTemp = this.tempC
        this.tempString = `${this.tempC.toFixed(0)}° C`
        this.weather = data.weather[0].main
    }

    get WeatherButtonTemplate() {
        return `
        <button onclick="app.WeatherController.rotateWeather()" class="btn btn-rounded bg-dark text-light w-75">${this.tempString} | ${this.weather}</button>
        `
    }
}