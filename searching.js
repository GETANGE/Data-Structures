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
console.log(index)