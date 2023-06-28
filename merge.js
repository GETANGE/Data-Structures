function mergeSort2(array) {
  if (array.length <= 1) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  return merge(mergeSort2(left), mergeSort2(right));
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

let array = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log("The array before merge sort: " + array);

let mergedArray = mergeSort2(array);
console.log("The array after merge sort: " + mergedArray);


function mergeSort1(arr){
  if(arr.length<=1){
    return arr;
  }
  const mid= Math.floor(arr.length/2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort1(left),mergeSort1(right));
}

function merge(left, right) {
  let result1 = [];
  let i=0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if(left[i]<=right[j]){
      result1.push(left[i]);
      i++;
    }else{
      result1.push(right[j]);
      j++;
    }
  }

  while(j<right.length){
    result1.push(right[j]);
    j++;
  }
  while(i<left.length){
    result1.push(left[i]);
    i++;
  }

  return result1;
}

let array1=[2,5,9,3,5,7,2]
console.log("The array before sorting is: " + array1)

const sortedArray=mergeSort1(array1);
console.log("The array after sorting is: " + sortedArray);
