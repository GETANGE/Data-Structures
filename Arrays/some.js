// This method is used to check if atleast one of your elements in a given array satisfies the condition
// Takes in a callback function and a condition
// Always returns a boolean
const food = ['🍎' ,'🥕', '🍐', '🍆', '🍌', '🍓', '🥬', '🥑' ]

const broccoli = food.some((item) => item === '🥦')
console.log(broccoli) // False if it does not exist.

const carrot = food.some((item) => item === '🥕')
console.log(carrot) // True if it does exist