function sort(arr){
    return arr.sort(function(a,b){
        return a-b;
    })
}

let array=[3,5,7,1,0,6,9,8,10,4,2]
let sorted=sort(array)
console.log("The sorted array is :"+sorted)