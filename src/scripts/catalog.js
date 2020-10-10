

// The Catalog function should accept the harvested food array as input.
// The Catalog function should iterate the array of food objects.
// As you iterate the array, the <main> element should have its inner HTML appended with an
// HTML representation of a food item. It should output the name property of
// the current food object.

export const catalog = (harvestedFood) => {
    const contentElement = document.querySelector(".container")
    for (const food of harvestedFood) {
        contentElement.innerHTML += `<section class="plant">\n${food.type}\n</section>`
    }
    // return contentElement
}

