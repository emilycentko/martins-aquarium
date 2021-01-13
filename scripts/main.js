import { useFish } from './fish/FishDataProvider.js'

const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}

import { FishList } from './fish/FishList.js'

FishList();
