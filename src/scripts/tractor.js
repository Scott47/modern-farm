import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"


// function that iterates over parent and child plan arrays, invokes factory function to
// create foods to be planted and adds them to the plant array in field.js
export const plantSeeds = (thisYearsPlan) => {

    for (const plan of thisYearsPlan) {
        plan.map(item => {
            if (item === "Aspargus") {
                let seedAsparagus = createAsparagus()
                addPlant(seedAsparagus)
            }
            else if (item === "Corn") {
                let seedCorn = createCorn()
                addPlant(seedCorn)
            }
            else if (item === "Potato") {
                let seedPotato = createPotato()
                addPlant(seedPotato)
            }
            else if (item === "Sunflower") {
                let seedSunflower = createSunflower()
                addPlant(seedSunflower)
            }
            else if (item === "Wheat") {
                let seedWheat = createWheat()
                addPlant(seedWheat)
            }
        })
    }
}