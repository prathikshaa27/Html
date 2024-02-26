string1 = "Hello"
string2 = "This is prathi"
const op = `${string1} ${string2}`
console.log(op);

let string3 = "hello"
let string4 = "This is prathi"
console.log(string3+" "+string4);

let string = "123";
let ToConvert = Number(string);
console.log(typeof(ToConvert))

let number = 123;
let ToConvertString = String(number);
console.log(typeof(ToConvertString))

let string7 = "    prathii    ";
console.log(string7.trim());

let string8 = "8";
console.log(string8.padStart(4,"1"))

var votingAge = 22;
if(votingAge>=18){
    console.log("You are eligible")
}
else{
    console.log("You are not eligible to vote")
}

var passingMarks = 60;
if(passingMarks>=60){
    console.log("Pass")
}
else{
    console.log("Fail")
}

var compareNumbers1 = 20;
var compareNumbers2 = 20;
if(compareNumbers1==compareNumbers2){
    console.log("Equal")
}
else{
    console.log("Not equal")
}

var year = 2024;
if(year%4==0){
    console.log("Leap year")
}
else if(year%100!==0){
    console.log("Not a leap year")
}
else if(year%400==0){
    console.log("Leap year")
}
else{
    console.log("Invalid data")
}
//switch case
let day = "sunday";
let dayname;
switch(day){
case 0:
    dayname="sunday";
    break;
case 1:
    dayname = "modnay"
    break;
case 2 :
    dayname = "Tuesday"
    break;
default:
    dayname=""
}
console.log(`${dayname}`)

for(i=1;i<=10;i=i+2){
    console.log(i)
}

function add(a,b){
    console.log(a+b)

}
add(2,3)

const addition = (c,d)=>{
    return c+d;
}
console.log(addition(2,7))
 
const subdraction = (e,f)=>{
    console.log(e-f)
}
subdraction(7,5)

//callback
function greet(name,callback){
    console.log("Hello"+ " "+name)
    callback();
}
function Bye(){
    console.log("Bye")
}
greet("prathi",Bye);

const details = {
    Nmae: "Prathikshaa",
    Age:22,
    Education:{
        School:"VVMHSS",
        CollegeL:"KCT"
    }
}
console.log(details)
details["Age"]=19;
console.log(details)
console.log(Object.keys(details))

class person{
    constructor(name,age){
        this.name=name;
        this.age = age;
    }
    greetings(){
        console.log(`My name is ${this.name} and my age is ${this.age}`)
    }
}
class person1 extends person{
    constructor(gender){
        super();
        this.gender = gender;
    }
    greetings1(){
        console.log(`My name is ${this.name} and my age is ${this.age} and my gender is ${this.gender}`)
    }

}
const obj1 = new person("alice",22);
const obj2 = new person1("alice",22,"Female");
obj1.greetings();
obj2.greetings();

function message(age,callback){
    console.log("My age is"+" "+age)
    callback();
}
function goodBye(){
    console.log("Okay iam leaving")
}
message(22,goodBye)

const promise = new Promise((resolve,reject)=>{
    let number = 5;
    if(number==5){
        resolve("Success");
    }
    else{
        reject("Failure");
    }
});
promise
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
});

async function message(){
    return "Hello this is prathi";
}
async function printMessage(){
    
    try{
        const data = await message();
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
}
printMessage();

const object = {
    Name : "prathi",
    age:22,
    Address:{
        City:"Coimbatore",
        Town:"Mtp"
    }
};
let{Name,age,Address:{city,Town}}=object;
console.log(Name);

//document.cookie = "username=prathi; expires=Thu, 18 Dec 2023 12:00:00 UTC "

let array = ["apple","mango","grapes"];
for(let keys of array){
    console.log(keys)
}

let array1 = [11,12,13,14,15];
const output = array1.map(array1=>array1*array1);
console.log(output)




