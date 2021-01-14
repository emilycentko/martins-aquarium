/*
Fish import
*/

import { useFish } from './fish/FishDataProvider.js'

const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}

import { FishList } from './fish/FishList.js'

FishList();


/*
Locations import
*/

import { useLocations } from './locations/LocationDataProvider.js'

const alltheLocations = useLocations()

for (const location of alltheLocations) {
    console.log(location)
}

import { LocationList } from './locations/LocationList.js'

LocationList();

/*
Quotes import
*/

/*
Tips import
*/