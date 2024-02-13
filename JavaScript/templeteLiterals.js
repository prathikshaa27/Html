//string interpolation 

let name = "prathi";
let age =22
console.log(`Hi Iam ${name} and my age is ${age}`);

/*let name1 = "prathi";
let age1 =22
console.log("Hi iam"+" " +name1+" "+"My age is"+ " " +age1);*/

//custom interpolation
let gender ="Female";
let aadhar_no = 123461718818;

console.log(`${"Hello"} ${"My gender is"} ${gender.toUpperCase()} ${"my aadhar_no is"} ${aadhar_no}`);

//raw string access

console.log(String.raw`Hello\nworld`);