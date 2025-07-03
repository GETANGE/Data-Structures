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
findNemo(large) // O(n) -> It takes Linear time to find Tom Muli.

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