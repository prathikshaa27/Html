//property shortand
let Name = "Prathi";
let age =22;
let gender ="Female";
let person = {
    Name,
    age,
    gender
};
console.log(person);
console.log(person.Name);
console.log(person.age);
person.Name = "Mike";
console.log(person.Name);
person["age"]=12;
console.log(person.age);

//computed property names

const propertyName ="Pan card number";
let Gender="female";
let Aadhar_number =5356177188282;

let details ={
    Gender,
    Aadhar_number,
   [propertyName]:12435671717

};
console.log(details);

//method properties
let object1 ={
    message(){
        console.log('Hello ');
    }
};
object1.message();




