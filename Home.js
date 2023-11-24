/*function updateValue(a){
    a++;
}
//pass by value
let x = 10;
console.log(x);
updateValue(x);

console.log(x);*/

function updateValue(a){
    a.age=33;
}

obj = {
    name: "charles",
    age: 26
}
console.log(obj);
updateValue(obj);

console.log(obj);