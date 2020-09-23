
let plants = []

export const addPlant = (seedObj) => {
    plants.push(seedObj)

}
export const usePlants = () => {
// Old way
// const cloneSheeps = sheeps.slice();

// ES6 way
    const plantingPlants = [...plants]
        return plantingPlants
    }

