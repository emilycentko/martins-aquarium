import { useTips } from './TipDataProvider.js'
import { Tip } from './Tip.js'

export const TipList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".containerRight")
    const htmlTips = useTips()

    // Generate all of the HTML for all of the fish
    let tipsHTMLRepresentations = ""
    for (const tip of htmlTips) {
        /*
            Invoke the Fish component function
            and pass the current fish object as an argument.
            Each time, add the return value to the
            fishHTMLRepresentations variable with `+=`
        */
       tipsHTMLRepresentations += Tip(tip)
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <aside class="containerRight">
            ${tipsHTMLRepresentations}
        </aside>
    `
}