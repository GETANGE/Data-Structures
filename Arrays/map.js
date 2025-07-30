// array.map() method works the same as forEach method but here it returns a new array
// Does not change the original array but instead returns a new array
const food = ['🍎' ,'🥕', '🍐', '🍆', '🍌', '🍓', '🥬', '🥑' ]
console.log(`Original Array : ${food}`)

// create a new array (NOT modifying the original array)
const banana = food.map((element)=>{
    return '🍌'
})
console.log(banana) // return bananas(New array)

const duplicatedFood = food.map((any) => any + any)
console.log(duplicatedFood)