import { useLocations } from './LocationDataProvider.js'
import { Location } from './Location.js'

export const LocationList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".containerLeft__travelLocations")
    const htmlLocations = useLocations()

    // Generate all of the HTML for all of the fish
    let locationHTMLRepresentations = ""
    for (const location of htmlLocations) {
        /*
            Invoke the Fish component function
            and pass the current fish object as an argument.
            Each time, add the return value to the
            fishHTMLRepresentations variable with `+=`
        */
       locationHTMLRepresentations += Location(location)
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class="containerLeft__travelLocations">
            ${locationHTMLRepresentations}
        </article>
    `
}