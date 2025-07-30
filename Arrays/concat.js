// Concatinating arrays technically means joining more than 2 arrays to form one array.
// it does not change the original array
// always creates a new array
const fruits = ['🍎' ,'🥕', '🍐', '🍆']
const vegetables = ['🍌', '🍓', '🥬', '🥑' ]

const food = fruits.concat(vegetables)
console.log(food)