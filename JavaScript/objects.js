const propertyName = "Company"
let person={
    Name : "Prathi",
    Age : 22,
    Place : "Coimbatore",
    Gender : "Female",
    Contact : 999999999,
    [propertyName]: "Aspire Systems",
    Siblings:{
        elder_brother:"Senthil",
        younger_brother:"Mike"
    }

}
//Dot notation
console.log(person);
console.log(person.Name);
person.age=19;
console.log(person.age);
console.log(person.Siblings);
console.log(person.Siblings.elder_brother);

//bracket notation
console.log(person['Gender']);

//this keyword
const myself={
    first_name:"prathikshaa",
    last_name:"Selvaraj",
    intro:function(){
        console.log("Hello Iam" + this.first_name);
    }

};
myself.intro();

//constructor

function Sample(name){
    this.name=name;
    this.greetings=function(){
        console.log(`Iam ${this.name}`);
    }

}
let sample= new Sample("Prathikshaa");
sample.greetings();