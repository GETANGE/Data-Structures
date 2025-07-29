// An Object is data that is stored in key-value pairs in curly braces
const myObj = {
    name: "Emmanuel",
    career: "Software Developer"
}

const anotherObject = {
    alive : true,
    answer: 42,
    hobbies : ['Eat','Sleep','Code'],
    beverage : {
        morning : "Coffee",
        afternoon: "Iced Tea"
    },
    action: function(){ // method name(anonymous function)
        return `My name is Emmanuel and am ${this.answer} years of age`
    }
}
// We can use the (.) notation or brackets to access properties in a given object
console.log(myObj.name)
console.log(anotherObject.hobbies) // we us
console.log(anotherObject.hobbies[0])
console.log(anotherObject["beverage"].afternoon) // Bracket notation
console.log(anotherObject.action())

// 1. Object.create() method  => Object.create(prototype, propertiesObject)
const vehicle = {
    wheels : 4,
    engine : function(){
        return 'Vvvrrroommm'
    }
};

const truck = Object.create(vehicle)
truck.doors = 4
console.log(truck)
console.log(truck.wheels) // Inheritance => inheriting wheels and engine from generic 'vehicle'
console.log(truck.engine())

const car = Object.create(vehicle)
car.doors = 2;
car.engine = function(){
    return `Wwwhhhoooosssshhh`
}
console.log(car.engine())
console.log(car.wheels) // still inherited from the prototype

// 2. Object.keys() => used to access keys 
const band = {
    vocals : "Robert Plant",
    guiter : "Jimmy Page",
    bass : "John Paul Jones",
    drums : "John Bonham"
}

// delete a property from sn object
delete band.drums

console.log(Object.keys(band))
console.log(Object.values(band))

// looping through an Object ( for....in)
for ( let job in band){
    console.log(`On job ${job}, it's ${band[job]}`)
}

// 3. Object.hasOwnProperty() => used to check if the a given property exists (returns boolean)
console.log(band.hasOwnProperty("drums"))

// 4. Destructuring Objects => helps to unpack values from an object
const { guiter, vocals, bass,  } = band
console.log(guiter, vocals, bass)