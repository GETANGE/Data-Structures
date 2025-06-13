const closure = function(firstN, lName){
    let first = firstN;
    let last = lName;

    return {
        getFirstName: function(){
            return first
        },

        getLastName: function(){
            return last
        },

        getFullName: function(){
            return first+ " "+ last
        },

        setName: function(firstN, lName){
            first = firstN
            last = lName
        }
    }

}

const me = closure("Emmanuel", "Getange")

console.log("My first name is :" +me.getFirstName());
console.log("My last name is :" +me.getLastName())
console.log("My full name is :" + me.getFullName())