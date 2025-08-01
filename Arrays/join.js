// This method is used to convert an array to a string
// It does not change the original array
// Does  take  parameters (separators)

const food = ['🍎' ,'🥕', '🍐', '🍆', '🍌', '🍓', '🥬', '🥑' ]

const foodStr_1 = food.join(" ")
console.log(foodStr_1)

const foodStr_2 = food.join(",")
console.log(foodStr_2)

const foodStr_3 = food.join(",,")
console.log(foodStr_3)

const foodStr_4 = food.join("+")
console.log(foodStr_4)

const foodStr_5 = food.join("")
console.log(foodStr_5)