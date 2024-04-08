
export class Clock {
    constructor() {
        this.currentTime = new Date()
    }

    get UpdatedTimeTemplate() {
        return `
        <h1>${this.currentTime.toLocaleTimeString()}</h1>
        `
    }
}