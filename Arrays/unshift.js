// This method is used to push new elemets inside an array
// It adds the new element from the start of the array
// It modifies the original array
// SYNTAX: array.unshift(element)
const food = ['🍎' ,'🥕', '🍐', '🍆', '🍌', '🍓', '🥬', '🥑' ]

const broccoli = food.unshift('🥦')
console.log(food)

// getting the length of the array after adding an element using this method
console.log(broccoli)