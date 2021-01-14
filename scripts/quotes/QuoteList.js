import { useQuotes } from './QuoteDataProvider.js'
import { Quote } from './Quote.js'

export const QuoteList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".containerLeft__travelQuotes")
    const htmlQuotes = useQuotes()

    // Generate all of the HTML for all of the fish
    let quoteHTMLRepresentations = ""
    for (const quote of htmlQuotes) {
        /*
            Invoke the Fish component function
            and pass the current fish object as an argument.
            Each time, add the return value to the
            fishHTMLRepresentations variable with `+=`
        */
       quoteHTMLRepresentations += Quote(quote)
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class="containerLeft__travelQuotes">
            ${quoteHTMLRepresentations}
        </article>
    `
}