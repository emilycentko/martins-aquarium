const fishCollection = [
    {
        name: "Nemo",
        species: "Amphiprioninae",
        location: "Great Barrier Reef, Australia",
        size: 5,
        food: "planktan",
        image: "https://www.aquariumofpacific.org/images/made_new/images-uploads-clownfish_600_q85.jpg"
    },
    {
        name: "Marlin",
        species: "Amphiprioninae",
        location: "Great Barrier Reef, Australia",
        size: 6,
        food: "planktan",
        image: "https://img.etimg.com/thumb/msid-72258617,width-1200,height-900,imgsize-797254,overlay-etpanache/photo.jpg",
    },
    {
        name: "Dory",
        species: "Paracanthurus hepatu",
        location: "Indo-Pacific coral reefs",
        size: 9,
        food: "planktan and algae",
        image: "https://cdn.mos.cms.futurecdn.net/BgZFhT7piMqXpyzfWrdKyP.jpg",
    },
    {
        name: "Rocky",
        species: "Betta splendens",
        location: "Asia",
        size: 2,
        food: "crustaceans",
        image: "https://www.aquariadise.com/wp-content/uploads/2019/07/Betta-fish-in-the-wild-1.jpg",
    },
    {
        name: "Aziraphale",
        species: "Pterophyllum",
        location: "Western Pacific Ocean",
        size: 2,
        food: "crustaceans",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTo_I7mVoztQ88xtYqx05n30Oun30mUqH3-Q&usqp=CAU",
    },
    {
        name: "Kunu",
        species: "Coryphaena hippurus",
        location: "Pacific Ocean",
        size: 3,
        food: "flying fish",
        image: "https://i.pinimg.com/originals/c5/d0/c3/c5d0c3af6f56157f1044de1bd3e02fe6.jpg"
    },

]

export const useFish = () => {
    return fishCollection.slice()
}

/* Order Holy Fish */

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []
    
    for (const fishObj of fishCollection) {
        if (fishObj.size % 3 === 0) {
            /* % = modular of 3 has no remainder */
            console.log(fishObj)
            holyFish.push(fishObj)
        }
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []

    for (const fishObj of fishCollection) {
        if (fishObj.size % 5 === 0) {
            console.log(fishObj)
            soldiers.push(fishObj)
            }
        }

    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []

    for (const fishObj of fishCollection) {
        if (fishObj.size % 3 !== 0 && fishObj.size % 5 !== 0) { 
            console.log(fishObj)
            regularFish.push(fishObj)
        }
    }
    return regularFish
}