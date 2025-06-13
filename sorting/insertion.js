function insertionSort(arr) {
    const len = arr.length;
  
    for (let i = 1; i < len; i++) {
      let current = arr[i];
      let j = i - 1;
  
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      arr[j + 1] = current;
    }
  
    return arr;
  }
  
  // Example usage:
  const unsortedArray = [9, 4, 7, 2, 1, 5, 6, 8, 3];
  console.log("Array before insertion sort is :"+unsortedArray);
  
  const sortedArray = insertionSort(unsortedArray);
  console.log("Array after insertion sort is :"+sortedArray);
  

  //example 2
  const arr=[2,4,9,14,23,7]

  function insertion1(arr) {
    for (let i=1; i<arr.length; i++) {  // i=1 because we are going to move backwards.
      let key=arr[i] //stores the current element
      let j = i-1;//element index behind the key value.

      while(j >= 0 && arr[j] > key){
        arr[j + 1]= arr[j];
        j--;
      }

      arr[j +1]= key;
    }
    return arr;
  }

  console.log(insertion1(arr));

  //example 3

  let array=[9,6,7,8,3,4,5,1,2]

  function insertion2(arr){
    let len=arr.length

    for(let i=1; i<len; i++){
      let key=arr[i] //current element in array
      var j=i-1//index of the element before the current index.

      while(j >= 0 && arr[j] > key){ //this loop continues untill arr[j]< key.
        arr[j+1]=arr[j]
        j--
      }
      arr[j+1]=key;
    }
    return array;
  }

  console.log("Array before insertion sort :"+ array)
  let arrayafter=insertion1(array)
  console.log("Array after insertion sort :"+ arrayafter);

//sort the following array.
  let trial1=[2,8,3,5,7,2,1]
  
  function insertion3(trial){
    let len=trial.length;

    for(let i=1; i<len; i++){ // we'll loop backwards
      let key=trial[i]; // stores the current element in the array.
      let  j=i-1  //stores the element before the current element.

      while(j >= 0 && trial[j]> key){
        trial[j+1]=trial[j];
        j--; 
      }
      trial[j+1]= key; 
    }
    return trial;
  }
  
  let sorting = insertion3(trial1);
  console.log(sorting);