//conditional statements
var number=222
if(number%2==0){
   console.log("It is a even number")
}
else{
   console.log("The number is odd")
}

var score=95
if(score<=50){
   console.log("Needs Improvement");
}
else if(score<50 && score<70){
   console.log("Good");
}
else if(score>70){
   console.log("Excellent");
   
}

//Looping
for(i=1;i<=10;i++){
   console.log("prathi")
}


for(i=1;i<=10;i++){
   console.log(i);
}

for(i=1;i<=10;i=i+2){
   console.log(i);
}

for(i=2;i<=10;i=i+2){
  console.log(i);
}

for(i=1;i>=1;i--){
  console.log(i);
}
//While loop
let count=0;
while(count<10){
  console.log(count);
  count++;
}
//reverse a number
var remainder;
var reverse=0;
var number_used=123;
while(number_used!=0){
  remainder=number_used%10;
  reverse=reverse*10+remainder;
  number_used= Math.floor(number_used/10);
}
console.log(reverse);

//switchcase

let day=3;
let dayname;

switch(day){
   case 0:
      dayname="Monday";
      break;
   case 1:
      dayname="Tuesday";
      break;
   case 2:
      dayname="Wednesday";
      break;
   case 3:
      dayname="Thursday";
      break;
   case 4:
      dayname="Friday";
      break;
   case 5:
      dayname="Saturday";
      break;
   case 6:
      dayname="Sunday";
      break;
   default:
      dayname="Invalid"
}
console.log("The day is"+ dayname);
