//functions
var a=10;
var b=20;
var sum=a+b;
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



