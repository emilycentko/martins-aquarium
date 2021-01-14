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

import { useQuotes } from './quotes/QuoteDataProvider.js'

const alltheQuotes = useQuotes()

for (const quote of alltheQuotes) {
    console.log(quote)
}

import { QuoteList } from './quotes/QuoteList.js'

QuoteList();

/*
Tips import
*/

import { useTips } from './tips/TipDataProvider.js'

const alltheTips = useTips()

for (const tip of alltheTips) {
    console.log(tip)
}

import { TipList } from './tips/TipList.js'

TipList();