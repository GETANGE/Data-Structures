let arr = [3, 9, 2, 6, 1, 7, 8, 5, 4];

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexmin = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexmin]) {
        indexmin = j;
      }
    }

    if (indexmin !== i) {
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
