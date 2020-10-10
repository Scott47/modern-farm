import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createSoybean } from "./seeds/soybean.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"

// function that iterates over parent and child plan arrays, invokes factory function to
// create foods to be planted and adds them to the plant array in field.js
export const plantSeeds = (thisYearsPlan) => {

    for (const plan of thisYearsPlan) {
        plan.forEach(item => {
            if (item === "Asparagus") {
                const seedAsparagus = createAsparagus()
                addPlant(seedAsparagus)
            }
            else if (item === "Corn") {
                const seedCorn = createCorn()
                seedCorn.forEach(cornObj => {
                    addPlant(cornObj)
                })
            }
            else if (item === "Potato") {
                const seedPotato = createPotato()
                addPlant(seedPotato)
            }
            else if (item === "Soybean") {
                const seedSoybean = createSoybean()
                addPlant(seedSoybean)
            }
            else if (item === "Sunflower") {
                const seedSunflower = createSunflower()
                addPlant(seedSunflower)
            }
            else if (item === "Wheat") {
                const seedWheat = createWheat()
                addPlant(seedWheat)
            }
        })

    }
}