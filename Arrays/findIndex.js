// almost identical to array.find(), except it returns an index instead of the element
// a condition must be satisfiend at the end
// if the condion is not satisfied it will return -1 index
const food = ['🍎' ,'🥕', '🍐', '🍆', '🍌', '🍓', '🥬', '🥑' ]

const peas = food.findIndex((item) => item === '🍐')
console.log("The peas is found at index: "+peas)

const watermelon = food.findIndex((item) => item === '🍉')
console.log(watermelon)