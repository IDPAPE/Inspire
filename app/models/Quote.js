

export class Quote {
    constructor(data) {
        this.body = data.content
        this.author = data.author
        this.tags = data.tags
    }

    get QuoteTemplate() {
        return `
        <h5>"${this.body}"</h5>
        <p>-${this.author}</p>
        
        
        `
    }
}