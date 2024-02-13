function* count(){
    let num = 0;
    while(true){
        yield num++;
    }
}
let counter = count();
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);

//matching
function *fibonacci(){
    let a = 0,b=1;
    while(true){
        yield a;
        [a,b]=[b,a+b];
    }
}
let[first,second,third] = fibonacci();
console.log(first,second,third);

//methods
let object = {
    *generatorMethod(){
        yield 1;
        yield 2;
        yield 3;
    }
};
for(let value of object.generatorMethod()){
    console.log(value);
}