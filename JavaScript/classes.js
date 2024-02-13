// classes
class Vehicle{
    constructor(Name, color){
        this.Name=Name;
        this.color = color;
    }
    information(){
        console.log(`The car name is ${this.Name} and the color is ${this.color}`);
    }
}
let car1 = new Vehicle("Swift","White");
let car2 = new Vehicle("Toyato","Red");

car1.information();
car2.information();

//inheritance

/*class Animal{
    constructor(breed,colour){
        this.breed=breed;
        this.colour=colour;
    }
    sound(){
        console.log(`This is ${this.breed} My colour is ${this.colour} `);
    }

}
class Dog extends Animal{
    constructor(breed,colour,eyes){
        super(breed,colour);
        this.eyes=eyes;
    }
    sound(){
        console.log(`This is ${this.breed} My colour is ${this.colour} and My eyes color is ${this.eyes}`);
    }
    
}

let dog1 = new Dog("Dalamation", "Brown and white", "blue");
dog1.sound();*/

//inheritance with expressions

let Animal =class{
    constructor(breed,colour){
        this.breed=breed;
        this.colour=colour;
    }
    mydetails(){
        console.log(`My breed is ${this.breed} and my colour is ${this.colour}`);
    }
};
let Dog = class extends Animal{
    constructor(breed,colour,eyes){
        super(breed,colour);
        super.mydetails();
        this.eyes=eyes;

}
myextradetails(){
    console.log(`My breed is ${this.breed} and my colour is ${this.colour} and my eyes colour is ${this.eyes}`);
}}

let dog1 = new Dog("Beagle", "white","black");
dog1.mydetails();
dog1.myextradetails();

//STATIC MEMBERS
class calculate{
    static square(number){
        return number*number;
    }
}
console.log(calculate.square(5));


