/*setTimeout(function(gender){
    console.log('First',genconst data = new Promise((resolve, reject) => {
    setTimeout(() => {
        const ans = "prathi";
        if (ans) {
            resolve(ans);
        } else {
            reject('Failure');
        }
    }, 3000);
});

function getUserDetails(input) {
    return new Promise((resolve, reject) => {
        let UserDetails = [{ name: "prathi", age: 22 }, { name: "sara", age: 19 }];
        const user = UserDetails.find(user => user.name === input);
        if (user) {
            resolve(user);
        } else {
            reject("Userdetails Not found");
        }
    });
}

data
    .then((name) => {
        return getUserDetails(name);
    })
    .then((userDetails) => {
        console.log(userDetails);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Finally block is executed");
    });der)

},4000,'female')*/


setInterval(function(){
    console.log(new Date())

},1000,) 

//clear timeout
const timeoutId = setTimeout(()=>{
    console.log('First')
    clearTimeout(timeoutId)

},2000);

//clearinterval

const IntervalId = setInterval(() => {
    console.log('Hello')

clearInterval(IntervalId);

},9000);





