let array=[2,4,3,6,5,7,1,8,9]

let SquaredArray=[]

for (let i=0; i<array.length; i++){
    let number=array[i]
    let compute=number*number
    SquaredArray.push(compute)
}

console.log("Unsorted square :"+" "+SquaredArray)

function sort(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[j]>arr[j+1]){
                var temp=arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}
let sortedArray=sort(SquaredArray)
console.log("Sorted square :"+" "+sortedArray);