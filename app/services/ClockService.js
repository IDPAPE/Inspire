import { AppState } from "../AppState.js"
import { Clock } from "../models/Clock.js"

class ClockService {


    updateTime() {
        AppState.clock = new Clock()
    }
}

export const clockService = new ClockService()