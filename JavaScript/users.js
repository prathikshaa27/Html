//promises
/*const promise = new Promise((resolve,reject)=>{
    const error = false;
    if(!error){
        resolve("Resolved")
    }
    else{
        reject("It is rejected")
    }
})

console.log(promise)

const promise1 = new Promise((resolve,reject)=>{
    setTimeout(function() {
        resolve("It will execute after few seconds")
        
    }),3000

})

promise1
.then(value => {
    console.log(value)
})
promise.then(value => {
    console.log(value);
}) */
//
const users = fetch("https://jsonplaceholder.typicode.com/posts").then(response => ), {
    return: response, json };
