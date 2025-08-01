// This method returns either "true" or "false" if that given element exists in the given array
// Always returns a boolean
// SYNTAX: array.includes(element)
// SYNTAX 2: array.includes(element, fromIndex)

const food = ['🍎' ,'🥕', '🍐', '🍆', '🍌', '🍓', '🥬', '🥑' ]

const hasPotato = food.includes('🥑');
console.log(hasPotato) // True

const onion = food.includes('🥦')
console.log(onion) // False