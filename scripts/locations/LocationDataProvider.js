const locationCollection = [
    {
        city: "Western Australia",
        country: "Australia",
        waterBody: "Indian Ocean",
        landmark: "Ningaloo Reef",
        image: "https://migrationmedia.com.au/wp-content/uploads/2014/01/Ningaloo-Reef-Scene.jpg",
    },
    {
        city: "San Diego",
        country: "United States",
        waterBody: "Pacific Ocean",
        landmark: "Cortes Bank",
        image: "https://www.nationalgeographic.com/content/dam/environment/2019/02/pacific-ocean-reference/01-pacific-ocean-reference.ngsversion.1549908323135.adapt.1900.1.jpg",
    },
    {
        city: "Tarawa",
        country: "Kiribati",
        waterBody: "Pacific Ocean",
        landmark: "Tarawa Reefs",
        image: "https://seos-project.eu/world-of-images/images/reef.jpg",
    }
]

export const useLocations = () => {
    return locationCollection.slice()
}