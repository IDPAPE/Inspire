import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"
import { api } from "./AxiosService.js"

class WeatherService {

    async getWeather() {
        const response = await api.get('api/weather')
        console.log('weather', response.data)
        AppState.weather = new Weather(response.data)
        console.log(AppState.weather)
    }

    rotateWeather() {
        let returnedTemp = ''
        if (AppState.weather.displayedTemp == AppState.weather.tempC) {
            AppState.weather.displayedTemp = AppState.weather.tempF
            returnedTemp = `${AppState.weather.displayedTemp.toFixed(0)}° F`
        }
        else if (AppState.weather.displayedTemp == AppState.weather.tempF) {
            AppState.weather.displayedTemp = AppState.weather.tempK
            returnedTemp = `${AppState.weather.displayedTemp.toFixed(0)}° K`
        }
        else {
            AppState.weather.displayedTemp = AppState.weather.tempC
            returnedTemp = `${AppState.weather.displayedTemp.toFixed(0)}° C`
        }
        AppState.weather.tempString = returnedTemp
        console.log(AppState.weather.tempString)
    }
}

export const weatherService = new WeatherService()