let arr = [3, 9, 2, 6, 1, 7, 8, 5, 4];

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) { // this loop is iterates over the current minimum element at the given indexes.
    let indexmin = i;//stores the index of the minimum element.The assumed minimum element

    for (let j = i + 1; j < arr.length; j++) { //this loop iterates througth the remaining indices.
      if (arr[j] < arr[indexmin]) { //compares the elements ata indes j with the current minimum index at 'indexmin'.
        indexmin = j;
      }
    }
      if (indexmin !== i){ //compares if the index of the minimum element  is different from the current index 'i'.
      // swap
      const temp = arr[indexmin];
      arr[indexmin] = arr[i];
      arr[i] = temp;
    }
  }

  return arr;
}

console.log("Array before selection sort :"+" "+arr)

const sortedArray = selectionSort(arr);
console.log("The array after selection sort :"+" "+sortedArray);


//example 2
let arr1 = [2, 5, 8, 1, 0, 7];

function selectionSort2(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let minIndex = i; // Assumption.

    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j; // Then j contains the minimal element index.
      }
    }

    if (minIndex !== i) {
      const temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

console.log("The array before selection sort is: " + arr1);

const sortedArray2 = selectionSort2(arr1);
console.log("The array after selection sort is: " + sortedArray2);

//example 3
let arr2 =[9,3,6,2,8,1,0];
function selectionSort3(arr){
  let len=arr.length;

  for(let i=0; i<len; i++){
    let minindex=i;

    for(let j=i+1; j<len; j++){
      if(arr[j]<arr[minindex]){
        minindex=j;
      }
    }

    if(minindex != i){
      const temp=arr[minindex];
      arr[minindex]=arr[i];
      arr[i]=temp;
    }
  }
  return arr;
}

console.log("Array before selection sort"+" : "+arr2);
let sort=selectionSort3(arr2);
console.log("Array after selection sort"+" : "+sort);