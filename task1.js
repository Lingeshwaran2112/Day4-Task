//1.	How to compare two JSON have the same properties without order?
//a.	var obj1 = { name: "Person 1", age:5 };
//b.	var obj2 = { age:5, name: "Person 1" };
//solution;
const isEqual = function(obj1, obj2) {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    if(obj1Keys.length !== obj2Keys.length) {
        return false;
    }
    for (let objKey of obj1Keys) {
        if (obj1[objKey] !== obj2[objKey]) {
            if(typeof obj1[objKey] == "object" && typeof obj2[objKey] == "object") {
                if(!isEqual(obj1[objKey], obj2[objKey])) {
                    return false;
                }
            } 
            else {
                return false;
            }
        }
    }
    return true;
};
console.log(isEqual({ name: "Person 1", age:5 },{ age:5, name: "Person 1" }))
