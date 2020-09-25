import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createSoybean } from "./seeds/soybean.js"
import { createWheat } from "./seeds/wheat.js"
import { usePlants, addPlant } from "./field.js"

// function that iterates over parent and child plan arrays, invokes factory function to
// create foods to be planted and adds them to the plant array in field.js
export const plantSeeds = (thisYearsPlan) => {

    for (const plan of thisYearsPlan) {
        plan.forEach(item => {
            if (item === "Asparagus") {
                let seedAsparagus = createAsparagus()
                addPlant(seedAsparagus)
            }
            else if (item === "Corn") {
                let seedCorn = createCorn()
                seedCorn.forEach(cornObj => {
                    addPlant(cornObj)
                })
            }
            else if (item === "Potato") {
                let seedPotato = createPotato()
                addPlant(seedPotato)
            }
            else if (item === "Soybean") {
                let seedSoybean = createSoybean()
                addPlant(seedSoybean)
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