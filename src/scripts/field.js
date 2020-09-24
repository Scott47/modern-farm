
// Define a variable in this module whose initial value is an empty array.
// This array will store all of the plants that are growing in the field.
let plants = []

// Define and export a function named addPlant.
// The addPlant function must accept a seed object as input. The function will add the seed to the field.
export const addPlant = (seedObj) => {
    plants.push(seedObj)

}

// Define and export a function named usePlants that returns a copy of the array of plants.
export const usePlants = () => {

// Old way
// const plantingPlants = plants.slice();

// ES6 way
    const plantingPlants = [...plants]
        return plantingPlants
    }

