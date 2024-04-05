import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class WeatherController {
    constructor() {
        console.log('weather controller loaded');
        this.getWeather()
        AppState.on('weather', this.drawWeather)
    }

    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            Pop.toast('could not get weather', 'error')
            console.error(error)
        }
    }

    drawWeather() {
        const weatherButton = AppState.weather.WeatherButtonTemplate
        console.log(weatherButton)
        setHTML('weather-button', weatherButton)
    }

    rotateWeather() {
        weatherService.rotateWeather()
    }
}