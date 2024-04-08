import { AppState } from "../AppState.js"
import { Clock } from "../models/Clock.js"
import { clockService } from "../services/ClockService.js"
import { setHTML } from "../utils/Writer.js"

export class ClockController {
    constructor() {
        console.log('clock constructor loaded')
        this.updateTime()
        setInterval(this.updateTime, 1000);

    }

    updateTime() {
        clockService.updateTime()
        console.log('updating clock')
        setHTML('clock', AppState.clock.UpdatedTimeTemplate)
    }
}
