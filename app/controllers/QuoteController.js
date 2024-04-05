import { quoteService } from "../services/QuoteService.js";
import { Pop } from "../utils/Pop.js";

export class QuoteController {
    constructor() {
        console.log('quote controller loaded');
        this.getQuote()
    }

    async getQuote() {
        try {
            await quoteService.getQuote()
        } catch (error) {
            Pop.toast('could not get quote', 'error')
            console.error(error)
        }
    }
}