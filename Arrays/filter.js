let myArray = [22, 9, 60, 12, 4, 56]

const under21 = (value) => value < 21;
const newArray = myArray.filter(under21);

console.log("Elements that fall under 21 are :", newArray)

// find()
// used to find the first element in an array that satisfies the condition
const element = myArray.find(under21)
console.log("The first element to satisfy this condtion is :", element)

//findIndex()
// used to find the index at which that element is stored that satisfies the condition
const index = myArray.findIndex(under21);
console.log("The index at which the element is stores is at index :", index)

// TRANSFORMATION ARRAYS (map & reduce)
let product = (value) => value * 5
const productArray = myArray.map(product)
console.log(`The modified product array is :`, productArray)

// LOPPING THROUGH ARRAYS
let sum = 0;
const loop = (value) => sum += value;
myArray.forEach(loop)
console.log("The total sum is :", sum)
