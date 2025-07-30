// this method lets you search for an element in a more complex manner
// does not take a callback as a parameter

// SYNTAX:
// array.indexOf(element)
// array.indexOf(element, startIndex)
const food = ['🍎' ,'🥕', '🍐', '🍆', '🍌', '🍓', '🥬', '🥑' ]

const carrot = food.lastIndexOf('🥕')
console.log(carrot)

const straw_berry = food.lastIndexOf('🍓', 4)
console.log(straw_berry)