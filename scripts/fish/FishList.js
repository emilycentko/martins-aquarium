import { mostHolyFish, soldierFish, nonHolyFish } from './FishDataProvider.js'
import { Fish } from "./Fish.js"

const buildFishListHTML = (arrayOfFish, header) => {
    let fishHTMLRepresentations = `<h3>${header}</h3>`
    for (const fishObj of arrayOfFish) {
       fishHTMLRepresentations += Fish(fishObj)
    }
    return fishHTMLRepresentations
}

export const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".containerLeft__fishList")
    /*const fishArray = useFish()*/
    const holyFishArray = mostHolyFish()
    const holyFishHTMLRepresentations = buildFishListHTML(holyFishArray, "Holy Fish")

    const soldierFishArray = soldierFish()
    const soldierFishHTMLRepresentations = buildFishListHTML(soldierFishArray, "Soldier Fish")

    const regularFishArray = nonHolyFish()
    const regularFishHTMLRepresentations = buildFishListHTML(regularFishArray, "Regular Fish")

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class="fishList">
            ${holyFishHTMLRepresentations}
            ${soldierFishHTMLRepresentations}
            ${regularFishHTMLRepresentations}
        </article>
    `
}