//array destructuring
let array = [12, 13, 14];
console.log(array);

let[num1,num2,num3] = array;
console.log(num1);
console.log(num2);
console.log(num3);

//array matching

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);
let[item1, item2] = fruits;
console.log(item1);
console.log(item2);

//object matching shorthand notation

let person=
{Name:"prathi",
age :22
};
let{Name,age}=person;
console.log(Name);
console.log(age);

//object matching deep matching
let details =
{
    Gender:"Female",
     Company:"Aspire Systems", 
     Address:
     {city:"Chennai"}
    };
let{Gender,Address:{city}} =details;
console.log(city);
console.log(Gender);

//object and array matching default values
let Numbers =[44,12,66];
let[number1, number2, number3, number4=5]=Numbers;
console.log(number4);

//parameter context matching
function message({Name1,Age1}){
    console.log(`Hello iam ${Name1} and my age is ${Age1}`);
}
let obj = {Name1:"Prathi", Age1:22};
message(obj);

//Fall soft destructuring
/*let{user,town}=null;
console.log(user);
console.log(town);*/


