//EXAMPLE1: arr=[3,6,9,4,7,1,2];

//this mthod works by swapping the element on the right to the left if the
//right element is greater than the element on the left.
// arr=[3,6,9,4,7,1,2]
// arr=[3,6,4,9,7,1,2]
// arr=[3,6,4,7,9,1,2]
// arr=[3,6,4,7,1,9,2]
// arr=[3,6,4,7,1,2,9]
// arr=[3,4,6,7,1,2,9]
// arr=[3,4,6,1,7,2,9]
// arr=[3,4,6,1,2,7,9]
// arr=[3,4,1,6,2,7,9]
// arr=[3,1,4,6,2,7,9]
// arr=[1,3,4,6,2,7,9]
// arr=[1,3,4,2,6,7,9]
// arr=[1,3,2,4,6,7,9]
// arr=[1,2,3,4,6,7,9]


//lets code.
const arr =[3,6,9,4,7,1,2]
function bubbleSort(arr) {
    //calculate the length of the array
    const len=arr.length;
    //write the basic for loop.
    for (let i=0; i<len; i++) {
        for (let j=0; j<len; j++){ //this two loops will make sure that all elements have been sorted in the array.
            if(arr[j]>arr[j+1]){
                //then swap those elemnts.
                //to make sure the elements to be swapped is not lost
                //we create a temporary variable 'temp'.
                const temp = arr[j];
                arr[j] = arr[j+1]; //swap the value of arr[j] to arr[j+1].
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
bubbleSort(arr);
console.log(arr);

//EXAMPLE 2: ARRAY=[9,8,7,6,5,4,3,2,1]
// ARRAY=[8,9,7,6,5,4,3,2,1]
// ARRAY=[8,7,9,6,5,4,3,2,1]
// ARRAY=[7,8,9,6,5,4,3,2,1]
// ARRAY=[7,8,6,9,5,4,3,2,1]
// ARRAY=[7,6,8,9,5,4,3,2,1]
// ARRAY=[6,7,8,9,5,4,3,2,1]
// ARRAY=[6,7,8,5,9,4,3,2,1]
// ARRAY=[6,7,5,8,9,4,3,2,1]
// ARRAY=[6,5,7,8,9,4,3,2,1]
// ARRAY=[5,6,7,8,9,4,3,2,1]
// ARRAY=[5,6,7,8,4,9,3,2,1]
// ARRAY=[5,6,7,4,8,9,3,2,1]
// ARRAY=[5,6,4,7,8,9,3,2,1]
// ARRAY=[5,4,6,7,8,9,3,2,1]
// ARRAY=[4,5,6,7,8,9,3,2,1]
// ARRAY=[4,5,6,7,8,3,9,2,1]
// ARRAY=[4,5,6,7,3,8,9,2,1]
// ARRAY=[4,5,6,3,7,8,9,2,1]
// ARRAY=[4,5,3,6,7,8,9,2,1]
// ARRAY=[4,3,5,6,7,8,9,2,1]
// ARRAY=[3,4,5,6,7,8,9,2,1]
// ARRAY=[3,4,5,6,7,8,2,9,1]
// ARRAY=[3,4,5,6,7,2,8,9,1]
// ARRAY=[3,4,5,6,2,7,8,9,1]
// ARRAY=[3,4,5,2,6,7,8,9,1]
// ARRAY=[3,4,2,5,6,7,8,9,1]
// ARRAY=[3,2,4,5,6,7,8,9,1]
// ARRAY=[2,3,4,5,6,7,8,9,1]
// ARRAY=[2,3,4,5,6,7,8,1,9]
// ARRAY=[2,3,4,5,6,7,1,8,9]
// ARRAY=[2,3,4,5,6,1,7,8,9]
// ARRAY=[2,3,4,5,1,6,7,8,9]
// ARRAY=[2,3,4,1,5,6,7,8,9]
// ARRAY=[2,3,1,4,5,6,7,8,9]
// ARRAY=[2,1,3,4,5,6,7,8,9]
// ARRAY=[1,2,3,4,5,6,7,8,9]

//lets code.
let ARRAY=[9,8,7,6,5,4,3,2,1];
function bubbleSort1(arr1){
    let len1=arr1.length;
    for(let i=0; i<len1; i++){
        for(let k=0; k<len1; k++){
            if(arr1[k]>arr1[k+1]){
                let temp2=arr1[k];
                arr1[k]=arr1[k+1];
                arr1[k+1]=temp2;
            }
        }
    }
    return arr1;
}
console.log("The unsorted array is :" + ARRAY);

//sorted array.
let sortedArray =bubbleSort1(ARRAY);
console.log(sortedArray);