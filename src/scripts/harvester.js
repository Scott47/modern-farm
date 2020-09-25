
// The harvestPlants function must accept the plants array as input.
// The function will return an array of seed objects.
// Iterate the array of growing plants. On each plant, get the value of the output property.
// Add that many of the plant objects to the array that the function returns.
// For example, if the current plant is a peanut object with an output of 2...
// Again, the exception is corn. Half of your corn will be sold to cattle ranchers,
// so only half of the output of each corn plant will be added to the array that this function returns.

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