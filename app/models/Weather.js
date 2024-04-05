

export class Weather {
    constructor(data) {
        this.name = data.name
        this.tempK = data.main.temp
        this.tempC = this.tempK - 237.15
        this.tempF = this.tempC * (9 / 5) + 32
        this.weather = data.weather.main
    }
}