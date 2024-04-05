import { AppState } from "../AppState.js";
import { quoteService } from "../services/QuoteService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class QuoteController {
    constructor() {
        console.log('quote controller loaded');
        this.getQuote()
        AppState.on('quote', this.drawQuote)
    }

    async getQuote() {
        try {
            await quoteService.getQuote()
        } catch (error) {
            Pop.toast('could not get quote', 'error')
            console.error(error)
        }
    }

    drawQuote() {
        // console.log(AppState.quote.QuoteTemplate)
        setHTML('quote-area', AppState.quote.QuoteTemplate)
    }
}