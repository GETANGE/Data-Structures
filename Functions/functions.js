// Function declarations 
// they can be hoisted
function sum(num1, num2){
    return num1 + num2
}
console.log(sum(3,5))


// Function Expressions ( assigning a function to a varibale)
// cannot be hoisted (cannot be used before definition)
const product = function(num1, num2){ // anonymous function(function without a name)
    return num1 * num2
}
console.log(product(3,5))


// First class functions 
// They enable powerful patterns like callbacks, high-order functions and Functional programming
// 1.functions being treated like a normal value

function greetUser(fn){
    fn()
}
greetUser(function(){
    console.log(`First class function--Passing a function as an argument`)
})

// 2.Return from other function
function multiplier(factor){
    return function(value){
        return value * factor
    }
}
const double = multiplier(2);
console.log(double(5))

// 3. store in objects or arrays
const obj = {
    speak: function(){
        console.log(`I'm speaking`)
    }
}

obj.speak()