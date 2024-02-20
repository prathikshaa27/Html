function toFindEven(number){
    return promise=new Promise((resolve,reject)=>{
        if(number%2==0){
            resolve("resolved successfully")
        }
        else{
            reject("Rejected")
        }
    });

}
let num = 3
toFindEven(num)
.then((data)=>{
    console.log(data)
    console.log("True")
})
.catch((err)=>{
    console.log(err);
    console.log("False")
});

function delayedResponse(message,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(message)
        },delay);
    })
}
let message = "Hello world";
let delay = 2000;
delayedResponse(message,delay)
.then((data1)=>{
    console.log(data1)
})
.catch((err)=>{
    console.log(err);
})

function randomNumber(min,max){
    return new Promise((resolve,reject)=>{
        let randomno = Math.floor(Math.random()*(max-min+1))+min;
        if(randomno){
        resolve(randomno);
    }
    else{

       reject("oops failes")
    }
});
}
let min = 1;
let max = 10;
randomNumber(min,max)
.then((examp)=>{
    console.log(examp)
})
.catch((err)=>{
    console.log(err);
})

function reverseString(string){
    return new Promise((resolve,reject)=>{
            const reversedStr = string.split('').reverse().join('');
            resolve(reversedStr);
    })
}
        

let string ="prathi";
reverseString(string)
.then((data1)=>{
    console.log(data1)
})
.catch((err)=>{
    console.log(err)
})
