const prototypeObj = {
    greet(){
        console.log("Hello!");
    }
}

const newObj = {};
Object.setPrototypeOf(newObj,prototypeObj);
newObj.greet();

//using constructor function

function person(){
    this.name = "prathii";
    this.age = 22;

    this.introduce=function(){
        console.log(`Hello Iam ${this.name} and iam ${this.age} years old`);
    };
}
const newValue = new person();
console.log(newValue.name);
console.log(newValue.age);
newValue.introduce();



