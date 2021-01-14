export const Fish = (fish) => {
    return `
    <div class="fishCard">
            <img class="fishCard__img" src="${fish.image}"/>
            <p class="fishCard__name">${fish.name}</p>
            <p class="fishCard__species">${fish.species}</p>
            <p class="fishCard__location">${fish.location}</p>
            <p class="fishCard__length">${fish.size}</p>
            <p class="fishCard__diet">${fish.food}</p>
          </div>
    `
}