import { AppState } from "../AppState.js";
import { Quote } from "../models/Quote.js";
import { api } from "./AxiosService.js";

class QuoteService {

    async getQuote() {
        const response = await api.get('api/quotes')
        console.log('quote response', response.data)
        AppState.quote = new Quote(response.data)
        console.log(AppState.quote)
    }
}

export const quoteService = new QuoteService()