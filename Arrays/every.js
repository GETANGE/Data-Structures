// This method is used to check if all of your elements in a given array satisfies the condition
// Takes in a callback function and a condition
// Always returns a boolean
const food = ['🍎' ,'🥕', '🍐', '🍆', '🍌', '🍓', '🥬', '🥑' ]

const allBananas = food.every((item) => item === '🍌')
console.log(allBananas) // returns "False" if all the array elements do not constitute of bananas.