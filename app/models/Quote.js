

export class Quote {
    constructor(data) {
        this.body = data.quote.body
        this.author = data.quote.author
        this.tags = data.quote.tags
        this.description = data.description
    }
}