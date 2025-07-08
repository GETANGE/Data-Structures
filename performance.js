const nemo = ["nemo"];

const everyone = ['Alice Mwangi', 'Brian Kiptoo', 'Caroline Njeri', 'Daniel Otieno', 'Emily Wambui', 'Frankline Mutua', 'Grace Achieng', 'Henry Kiplagat', 'Irene Chebet', 'James Ouma', 'Kevin Njoroge', 'Linda Wanjiku', 'Martin Kamau', 'Nancy Atieno', 'Oscar Baraka', 'Peter Kariuki', 'Queen Nduta', 'Robert Onyango', 'Sarah Wairimu', 'Tom Muli'];

const large = new Array(10000).fill('Tom Muli')

const findNemo = function(array){
    for( let i=0; i < array.length; i++){
        if(array[i] === "Tom Muli"){
            console.log(`Found ${array[i]}`)
        }
    }
}
// findNemo(large) // O(n) -> It takes Linear time to find Tom Muli.

// Constant Time complexity -> O(1)
const arr = [10, 20, 30, 40];
console.log(arr[2]); // Always takes the same time → O(1) constants are ignored because Big O focuses on how the algorithm scales
console.log(arr[0])

// log all pairs of an array (Quadratic time -> )
const boxes = [1, 2, 3, 4, 5];

function logAllPairsOfArrays(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            console.log(arr[i], arr[j])
        }
    }
}
logAllPairsOfArrays(boxes)

// EXAMPLE 2: (ARRAYS OF DIFFERENT LENGTHS)
const array1= ['A','B','C','X'];
const array2= ['Z','Y','X'];

const compareMatchingItem =function (arr, arr2 ){
    for(let i=0; i < arr.length; i++){
        for(let j=0; j < arr2.length; j++){
            if(arr[i] === arr2[j]){
                return true;
            }
        }
    }

    return false;
}
console.log(compareMatchingItem(array1, array2)) // O(n * m)

// Optimize the above algorithm
// Convert the array1 to an Object
// const array_1 = {
//     A: true,
//     B: true,
//     C: true,
//     X: true
// }

const compareMatchingItem2 = function(arr1, arr2){
    // loop through the first array and create an object where properties === items in the arrays.

    const map ={}
    for(let i=0; i<arr1.length; i++){
        if(!map[arr1[i]]){
            const item = arr1[i]
            map[item] = true // a = true
        }
    }
    console.log(map)
    // loop through the second array and check if the item in second array exists on the created object.
    for(let j=0; j<arr2.length; j++){
        if(map[arr2[j]]){
            return true
        }
    }

    return false;
}
console.log(compareMatchingItem2(array1, array2)) // O(a+b)

// looks clean but not faster
const compareMatchingItem3 = function(arr1, arr2){
    return arr1.some(item => arr2.includes(item))
}
console.log(compareMatchingItem3(array1, array2)) // O(m * n)