export const Quote = (quote) => {
    return `
    <div class="quoteCard">
        <p class="quoteCard__text"><i>${quote.text}</i></p>
        <p class="quoteCard__autohor">${quote.author}</p>
    </div>
    `
}
