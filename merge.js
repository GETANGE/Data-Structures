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


//example 3
function mergeSort3(array2){
  if(array2.length<=1){
    return array2;
  }

  const mid=Math.floor(array2.length/2);
  const left=array2.slice(0,mid);
  const right=array2.slice(mid);

  return merge(mergeSort3(left),mergeSort3(right));
}

function merge(left,right){
  let merge=[];
  let i=0;
  let j=0;

  while(i<left.length && j<right.length){
    if(left[i] <= right[j]){
      merge.push(left[i]);
      i++;
    }else{
      merge.push(right[j]);
      j++;
    }
  }

  while(i < left.length){
    merge.push(left[i]);
    i++;
  }
  while(j < right.length){
    merge.push(right[j]);
    j++;
  }

  return merge;
}

const array2 =[2,7,4,0,3,5,8,9,1];
console.log("The array before merge sort:"+array2);

const array2Merged=mergeSort3(array2)
console.log("The array after merge sort:"+array2Merged);

//geek for geeks example.
//Did not pass test cases.
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
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

let arr1 = [1, 3, 5, 7];
let arr2 = [0, 2, 6, 8, 9];
let combined = arr2.concat(arr1);

console.log(combined);

let sortedArray2 = mergeSort(combined);
console.log(sortedArray2);


//example 5
function mergeSort5(array5){
  if(array5.length<=1){
    return array5;
  }

  const mid=Math.floor(array5.length/2);
  let left=array5.slice(0, mid);
  let right=array5.slice(mid);

  return merge(mergeSort5(left, right))
}

function merge(left, right) {
  let result2=[]
  let i=0;
  let j=0;

  while (i<left.length && j<right.length) {
    if(left[i]<=right[j]){
      result2.push(left[i]);
      i++;
    }else{
      result2.push(right[j]);
      j++;
    }
  }

  while(i < left.length){
    result2.push(left[i]);
    i++;
  }
  while(j < right.length){
    result2.push(right[j]);
    j++;
  }

  return result2;
}

let array5=[2,5,8,9,1,0]
let sortedArray5=mergeSort5(array5)
console.log(sortedArray5);