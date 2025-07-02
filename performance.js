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

const arr = [10, 20, 30, 40];
console.log(arr[2]); // Always takes the same time → O(1)
