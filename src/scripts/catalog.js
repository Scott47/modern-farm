
export const catalog = (harvestedFood) => {
    const contentElement = document.querySelector(".container")
    for (const food of harvestedFood) {
        contentElement.innerHTML += `<section class="plant">${food.type}</section>`
    }
    return contentElement
}

