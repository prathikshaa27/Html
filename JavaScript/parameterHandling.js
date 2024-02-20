//default parameters
function greet(name = "user"){
    console.log("Hi"+" "+name);

}
greet("prathi");
greet();

//rest parameters
function add(...numbers){
    let result = numbers.reduce((total,numbers) => total+numbers);
    return result;
    
    
}
console.log(add(2,3,12,2,6,7,8));

//spread operator

let fruit1 = ["apple"," mango","grapes"];
let fruit2 =["peach", "guava","pineapple"];
total_no_of_fruits = [...fruit1,...fruit2];
console.log(total_no_of_fruits);
