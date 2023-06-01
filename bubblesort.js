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