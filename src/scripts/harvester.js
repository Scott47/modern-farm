// import { usePlants } from './field.js'

// let plantsArray = usePlants()

export const harvestPlants = (plantsArray) => {
    const harvestArray = []
    for (const plantHarvest of plantsArray) {
        if (plantHarvest.type !== "Corn") {
            for (let i = 0; i < plantHarvest.output; i++) {
            harvestArray.push(plantHarvest)
            }
        }
        else {
            for (let i = 0; i < plantHarvest.output / 2; i++)
            harvestArray.push(plantHarvest)
        }
    }
    return harvestArray
}