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
person.Siblings.elder_brother="Senthil1";
console.log(person.Siblings.elder_brother);
Object.freeze(person);
this.Name="Jack"

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

//factory

/*function createPerson(name,age){
    return{
        name:name,
        age:age,
        Greetings:function(){
            console.log("Hello my name is " + this.name);
        }
    };
}
const person1 = CreatePerson("John", 11);
person1.Greetings();*/

//constructor
function NewPerson(gender,place){
    this.gender=gender;
    this.place=place;
    this.details=function(){
        console.log(`My gender is ${this.gender} and my place is ${this.place}`);
    };
}
const newobj = new NewPerson("Female","Coimbatore");
newobj.details();
