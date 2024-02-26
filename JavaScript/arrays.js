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

//splice

let veggies=["carrot","spinach","potato","tomato","cabbage"];
veggies.splice(1,0,"Brinjal","ladiesfinger");
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

//copywithin - copies a sequence array elemenst within array
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

//entries-key value pairs for each index array
let arr8=[10,70,56];
const iterator=arr8.entries();
console.log(iterator.next().value);

//fill 
let array2=[12,33,4,66,34,75];
array2.fill(1,1,4);
console.log(array2);

//every
let num = [2,4,6,8,10,12];
let tocheckeven = num.every(num=>num%2==0);{
   console.log(tocheckeven);
}

const numbers10 = [1,4,5,6,7];
const total = numbers10.reduce((sum,sum1)=>sum+sum1,0);
console.log(total);

let arrr1=[1,2,3,4]
arrr1.copyWithin(2,0,2)
console.log(arrr1)

let array = [12,3,4,5,6,8];
let output = array.reduce((array,array1)=>array+array1)
   console.log(output);

array = ["prathi","Mike","senthil","xxx"];
console.log(array.toString());
console.log(array.at(1));
console.log(array.join())
console.log(array.copyWithin(1,2))

array1=[[1,2],[3,4],[5,6]];
console.log(array1.flat());

array2 =[1,23,5,10,1,4,6,];
arr = array2.find(num=>num%2==0);
arr1 = array2.findIndex(num=>num%2==0)
arr2 = array2.findLast(num=>num%2==0)
arr3 = array2.findLastIndex(num=>num%2==0)
console.log(array2.sort(function (a,b){return a-b}))
console.log(arr);
console.log(arr1);
console.log(arr2);
console.log(arr3);

//copying methods 

let numbers11 = [1,2,3,4,5];
console.log([...numbers11]);











