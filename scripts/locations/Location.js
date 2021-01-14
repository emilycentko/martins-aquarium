export const Location = (location) => {
    return `
    <div class="locationCard">
                <img class ="location__img" src="${location.image}">
                <p class="locationCard__city">${location.city}</p>
                <p class="locationCard__country">${location.country}</p>
                <p class="locationCard__waterBody">${location.waterBody}</p>
                <p class="locationCard__landmark">${location.landmark}</p>
            </div>
    `
}