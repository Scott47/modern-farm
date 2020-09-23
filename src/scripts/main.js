import { createPlan } from "./plan.js";
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant, usePlants } from "./field.js"
import { plantSeeds } from './tractor.js'


const yearlyPlan = createPlan()
console.log(yearlyPlan)

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

const cornSeed = createCorn()
console.log(cornSeed)

const potatoSeed = createPotato()
console.log(potatoSeed)

const sunflowerSeed = createSunflower()
console.log(sunflowerSeed)

const wheatSeed = createWheat()
console.log(wheatSeed)

addPlant(asparagusSeed)
addPlant(cornSeed)
addPlant(potatoSeed)
addPlant(sunflowerSeed)
addPlant(wheatSeed)
const plantPlants = usePlants()
console.log(plantPlants)


plantSeeds(yearlyPlan)
const planToPlantSeeds = usePlants()
console.log(planToPlantSeeds)







