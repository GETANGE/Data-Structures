function search(s,x){
    //define the length of the array.
    let len =s.length;
    for(let i = 0; i < len; i++){
        if(s[i] == x){
            return i;
        }
    }
    return null;
}

let array=[2,5,6,7,9]
var element=7;
const index=search(array, element)
console.log( element+" "+"is found at index"+" "+index)


//This algorithm is based on a best case
//This algorithm x is found in the array.
function search2(s,x){
    for(let i=0;i<s.length;i++){
        if(s[i]==x){
            return i;
        }
    }
    return -1;
}

var arr = [2,5,7,9,10,11];
const x = 10

console.log( x+" is found at index "+ search2(arr,x) );

//this algorithm is based on the worst case
//This algorithm x1 is not found in the array.
//When x1 is not present, the search3() function compares it with all the elements of arr[] one by one
function search3(s,x){
    for(let i=0;i<s.length;i++){
        if(s[i]==x){
            return i;
        }
    }
    return -1;
}

var arr = [2,5,7,9,10,11];
const x1= 12;

console.log( x1+" is not found in the array and therefore we return"+" "+ search3(arr,x1) );