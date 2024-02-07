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

function add(p,q){
    return p+q;
}
console.log(add(12,5));

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

//arrow function with parameters and expressions
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

