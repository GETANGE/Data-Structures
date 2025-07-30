// array.filter() works like map() and forEach() method 
// it returns a new array without modifying the original array
//  a condition must be passed for it to work(MUST)

let myArray = [22, 9, 60, 12, 4, 56]

const under21 = (value) => value < 21;
const newArray = myArray.filter(under21);

console.log("Elements that fall under 21 are :", newArray)


const food = ['🍎' ,'🥕', '🍐', '🍆', '🍌', '🍓', '🥬', '🥑' ]
console.log(`Original Array : ${food}`)

const apples = food.filter((element) => element === '🍎')
console.log(apples)