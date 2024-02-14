//functions
var a=10;
var b=20;
var sum=a+b;DOMException
function add(){
    console.log(sum)
}
add()

var flanguage="html"
var fplace="siruseri"
var fdomain="lamp"
function favourite(){
    console.log("favourite language:"+"HTML");
    console.log(fplace);
    console.log(fdomain);
}
favourite()

//basic function
function subs(x,y){
   console.log(x-y);

}
subs(12,5)


//parameters
function area(length,breadth){
    console.log("Area is:"+length*breadth)
}
area(12,17)

function add(a,b){
    return sum
}
var sum=a+b
 add(10,20)
 console.log(sum)

 //Arrow functions
 //basic function
 const introduce=()=>{
   console.log("Hi this is prathikshaa");
 };
 introduce();

//arrow function with parameters
 const multiply=(a,b)=>{
   return a*b;

 }
console.log(multiply(10,30));

//arrow function with return
const division=(value1,value2)=>(value1/value2);
   console.log(division(100,20));

   //arrow function with single parametrs
const squares= number6=>number6*number6;{
   console.log(squares(9));
   }
   
//arrow function in array methods
   const units=[1,3,5,7,9];
   const squaring=units.map(units=>units*units);
   console.log(squaring);
   
//filter
   const numeric=[1,4,7,8,10,16,12];
   console.log(numeric.sort());
   const modulus=numeric.filter(numeric=>numeric%2==0);
   console.log(modulus);
   
   


 //conditional statements
 var number=222
 if(number%2==0){
    console.log("It is a even number")
 }
 else{
    console.log("The number is odd")
 }

 var score=95
 if(score<=50){
    console.log("Needs Improvement");
 }
 else if(score<50 && score<70){
    console.log("Good");
 }
 else if(score>70){
    console.log("Excellent");
    
 }

 //Looping
 for(i=1;i<=10;i++){
    console.log("prathi")
 }

 
 for(i=1;i<=10;i++){
    console.log(i);
 }

 for(i=1;i<=10;i=i+2){
    console.log(i);
 }

for(i=2;i<=10;i=i+2){
   console.log(i);
}

for(i=1;i>=1;i--){
   console.log(i);
}
//While loop
let count=0;
while(count<10){
   console.log(count);
   count++;
}
//reverse a number
var remainder;
var reverse=0;
var number_used=123;
while(number_used!=0){
   remainder=number_used%10;
   reverse=reverse*10+remainder;
   number_used= Math.floor(number_used/10);
}
console.log(reverse);


//strings
const string="Prathi";
console.log(string);

//template strings
const name="prathi";
const introduction=`Hello, ${name}`;
console.log(introduction)

var number1=50;
var number2=30;
console.log(`The sum of 2 numbers is ${number1+number2}`);

const name1="prathi";
const age=22;
console.log(name1+" "+age);

const language="HTML is a markup language\nCSS is used for styling";
console.log(language);

const sting="2427";
const number5=Number(string);
console.log(typeof number5);

//string methods
const Name="prathikshaa";
console.log(Name.length);
console.log(Name[5]);
 
const NAME="javascript";
if(NAME.includes("cri")){
   console.log("Substring found");
}
else{
   console.log("Not found")
}

const example="HTML is a markup language";
console.log(example.indexOf("is"));

const example1="calendar";
console.log(example1.slice(1,3));

const cases="Apple Is A Fruit";
console.log(cases.toLowerCase());
console.log(cases.toUpperCase());

const method="Eating";
console.log(method.replace("Eat","Talk"));

//Arrays

let colors=["White", "Pink", "Blue", "Black", "Green"];
console.log(colors);
console.log(colors[1]);
colors[5]="Brown";
console.log(colors);
//length
let fruits=["apple", "mango","grapes"];
console.log(fruits.length);
//push
fruits.push("mango");
console.log(fruits);
//pop
fruits.pop("mango");
console.log(fruits);
//shift
fruits.shift();
console.log(fruits);
//unshift
fruits.unshift("Peach");
console.log(fruits);
//slicing
fruits.slice(1,2);
console.log(fruits);

//combining two arrays
let fruits1=["apple", "mango","grapes"];
let fruits2=["Orange","Pineapple","strawberry"];
console.log(fruits1.concat(fruits2));

//splice

let veggies=["carrot","spinach","potato","tomato","cabbage"];
veggies.splice(1,2,"Brinjal","ladiesfinger");
console.log(veggies);

let languages=["html", "css", "javascript","python","css"];
console.log(languages.indexOf("python"));
console.log(languages.lastIndexOf("css"));
console.log(languages.includes("html"));
console.log(languages.reverse());
console.log(languages.join(','));

const spoken_languages=["Tamil", "Malayalam", "Telgu","Kannada","Tulu"];
spoken_languages.forEach(function(spoken_languages){
   console.log(spoken_languages);
});

const numbers=[1,2,3,4,5,6,7,8,9,10];
numbers.forEach(function(numbers){
   const squares=numbers*numbers;
   console.log(squares);
});

//copywithin
arr=[1,2,4,5,6];
arr.copyWithin(2,0);
console.log(arr);
console.log(arr.reverse());

arr1=[2,1,8,10, ,5];
console.log(arr1.sort());

//static methods
//creating a new array
const value="prathi";
const newArray= Array.from(value);
console.log(newArray);

//to check whether it is a array or not
arr3=["apple","mango","grapes"];
arr4="Computer";
console.log(Array.isArray(arr3));
console.log(Array.isArray(arr4));

//new array with variable number of arguments
const arr5= Array.of(5,'html',[2,3]);
console.log(arr5);

//instance properties
const arr6=[3,5,7];
console.log(arr6.constructor);

const arr7=[1,5,7];
console.log(arr7.length);
arr7.length=5;
console.log(arr7);

//filer
const students=[
   {name:"Sara", age:20},
   {name:"Tina", age:18},
   {name:"Yamu", age:17}
];
const filterage=students.filter(students=>students.age>19);
console.log(filterage);


