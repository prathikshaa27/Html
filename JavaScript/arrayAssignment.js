let students=[

    {
    
    "name": "raj",
    
    "marks": [50,20,30,52,90],
    
    "medium": "english",
    
    "parents_details": {
    
    "parents_qualification": "educated",
    
    "father_name": "ramu"
    
    }
    
    },
    
    {
    
    "name": "regho",
    
    "marks": [70,35,50,60,90],
    
    "medium": "english",
    
    "parents_details": {
    
    "parents_qualification": "non-educated",
    
    "father_name": "ranjith"
    
    }
    
    },
    
    {
    
    "name": "ragu",
    
    "marks": [50,50,35,50,100],
    
    "medium": "tamil",
    
    "parents_details": {
    
    "parents_qualification": "non-educated",
    
    "father_name": "rajeev"
    
    }
    
    },
    
    {
    
    "name": "kumar",
    
    "marks": [50,30,30,52,100],
    
    "medium": "english",
    
    "parents_details": {
    
    "parents_qualification": "educated",
    
    "father_name": "rajesh"
    
    }
    
    },
    
    {
    
    "name": "sathesh",
    
    "marks": [49,19,30,40,12],
    
    "medium": "tamil",
    
    "parents_details": {
    
    "parents_qualification": "non-educated",
    
    "father_name": "ramu"
    
    }
    
    },
    
    {
    
    "name": "sundar",
    
    "marks": [70,70,40,40,80],
    
    "medium": "tamil",
    
    "parents_details": {
    
    "parents_qualification": "non-educated",
    
    "father_name": "remo"
    
    }
    
    }
    
    ]


    function passedStudents(students, totalMark) {
        let Count = 0;
        students.forEach(student => {
          const marks = student.marks;
          const passed = marks.some(mark => mark >= totalMark);
          if (passed) {
            Count++;
          }
        });
        return Count;
      }
      
      const totalMark = 30;
      const totalpassedStudents = passedStudents(students, totalMark);
      console.log(" Total number of students passed:", totalpassedStudents);

      //problem solving
//To check whether the array is true or not
let arr1 = ['w3resource'];
let arr2 = [1,2,4,0];
console.log(Array.isArray(arr1));
console.log(Array.isArray(arr2));

//Clone an array
let copy1 = [1,2,4,0];
let copy2 = [1,3,[4,0]];
let copiedArray1 = [...copy1];
let copiedArray2 = [...copy2]
console.log(copiedArray1);
console.log(copiedArray2);

//
let arr3 = [7,9,0,-2];
console.log(arr3.shift());
console.log(arr3);

//array to a string
let myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join());

//sorting
var arr4= [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
console.log(arr4.sort());

/*const promise = new Promise((resolve,reject)=>{
    if(Name){
        resolve("It is resolved")
    }
    else{
        reject("Not resolved")
    }

});
promise.then((data){
    console.log("Success")
}
.catch(err){
    console.log("error")
}*/

//sample promise problems
/*const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const name =false;
        if(name){
            resolve('Success');
        }
        else{
            reject('Failure');
        }
    },2000);
});
promise
.then((samp)=>{
    console.log("Success promise resolved")
})
.catch((err) =>{
    console.log("Error")
})*/

/*let array = [12,1,3,4,5];
console.log(array[0]);*/

//Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array
function Value(arr,n=1){
    if(n>=0){
        return arr.slice(0,n)
    }
    else{
        return arr.slice(0,1)
    }
}
console.log(Value([7,9,0,-2]));
console.log(Value([],3));
console.log(Value([7,9,0,-2],3));
console.log(Value([7,9,0,-2],6));
console.log(Value([7,9,0,-2],-3));

//Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number.
function Dashes(number){
    const strNumber = number.toString();
    let output = "";
    let i;
    for(i=0;i<strNumber.length;i++){
    const numeric = parseInt(strNumber[i]);
    if(numeric%2==0 &&i!==strNumber.length-1){
        output = `${numeric}${output}-`;
    }
    else{
        output=`${output}${numeric}`;
    }

}
return output;
}
const number1=2458943;
console.log(Dashes(number1));

function mostFrequent(arr) {
    let count = {};
    let maxCount = 0;
    let mostFrequentItem;

    arr.forEach(item => {
        count[item] = (count[item] || 0) + 1;
        if (count[item] > maxCount) {
            maxCount = count[item];
            mostFrequentItem = item;
        }
    });

    return mostFrequentItem;
}

const arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log("Most frequent item:", mostFrequent(arr));




function swapCase(inputString) {
    let swappedString = '';

    for (let i = 0; i < inputString.length; i++) {
        const char = inputString.charAt(i);
        if (char === char.toUpperCase()) {
            swappedString += char.toLowerCase();
        } else {
            swappedString += char.toUpperCase();
        }
    }

    return swappedString;
}

const input = 'The Quick Brown Fox';
console.log("Swapped case:", swapCase(input)); 

function passedStudents(students, totalMark) {
    return students.filter(student => student.marks.some(mark => mark >= totalMark)).length;
  }
  
  const totalMark1 = 30;
  const totalpassedStudents1 = passedStudents(students, totalMark);
  console.log("Total number of students passed:", totalpassedStudents);