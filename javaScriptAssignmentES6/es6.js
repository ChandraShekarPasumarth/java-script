/*const printName = (name) => {
    return “Hi” + name;
}
*/

const printName =(name)=> "Hi"+" "+name;
printName("Chandra")

/*const printBill = (name, bill) => {
    return “Hi “ + name + “, please pay: “ + bill;
}
*/
const printBill =(name,bill) =>`Hi ${name},please pay ${bill}`;
printBill("Chandra",1000);

/*const person = {
    name: “Noam Chomsky”,
    age: 92
}

let name = person.name;
let age = person.age;
console.log(name);
console.log(age);
*/

const person ={
    name :"Noan Chomsky",
    age:92
}
const{name,age} = person;
console.log(name);
console.log(age);
