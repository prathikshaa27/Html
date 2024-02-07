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
