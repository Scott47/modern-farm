import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"



export const plantSeeds = (thisYearsPlan) => {
    const currentPlan = createPlan()
    for (let plan of currentPlan) {
        if (plan.type === "Aspargus") {
            createAsparagus()
        }
        else if (plan.type === "Corn") {
            createCorn()
        }
        else if (plan.type === "Potato") {
            createPotato()
        }
        else if (plan.type === "Sunflower") {
            createSunflower()
        }
        else if (plan.type === "Wheat") {
            createWheat()
        }
}
    return thisYearsPlan
}