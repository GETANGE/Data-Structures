// used to find an element inside an array
// works like array.filter() must be accompanied by a condition
// retuns the first element that satisfies the condition
// will always return 'undefined' if the condition is not satisfied
const food = ['🍎' ,'🥕', '🍐', '🍆', '🍌', '🍓', '🥬', '🥑' ]

const apple = food.find((item) => item === '🍎')
console.log(apple)

const banana = food.find((item) => item === '🍌')
console.log(banana)

// !condition not satisfied === undefined
const watermelon = food.find((item)=> item === '🍉')
console.log(watermelon)