import { createPlan } from "./plan.js";
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant, usePlants } from "./field.js"
import { plantSeeds } from './tractor.js'
import { harvestPlants } from './harvester.js'
import { catalog } from './catalog.js'

// Store value for what createPlan returns when invoked in a variable named yearlyPlan.
const yearlyPlan = createPlan()
console.log(yearlyPlan)

// invoke functions to test seed creation
const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

const cornSeed = createCorn()
console.log(cornSeed)

const potatoSeed = createPotato()
console.log(potatoSeed)

const soybeanSeed = createSoybean()

const sunflowerSeed = createSunflower()
console.log(sunflowerSeed)

const wheatSeed = createWheat()
console.log(wheatSeed)


// Invoke addPlant() and specify the seed object as the parameter.
// addPlant(asparagusSeed)
// addPlant(cornSeed)
// addPlant(potatoSeed)
// addPlant(sunflowerSeed)
// addPlant(wheatSeed)
// Invoke usePlants() and store its return value in a variable.
// const plantPlants = usePlants()
// console.log(plantPlants)


// invoke the function that plants all of the seeds, and then get the plants array from the fields.js module
plantSeeds(yearlyPlan)
const planToPlantSeeds = usePlants()
console.log(planToPlantSeeds)


// Harvest the array of plants by invoking the appropriate harvestPlants function.
// Make sure you specify the array of plants as an argument to the harvesting function.
const harvest = harvestPlants(planToPlantSeeds)
console.log(harvest)

const sale = catalog(harvest)
// console.log(sale)





