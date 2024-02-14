class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`Hello Iam ${this.name} and my age is ${this.age}`);
    }
}
const values = new Person("prathi", 22);
console.log(values.name);

//inheritance

class Employee{
    constructor(Name,id){
        this.Name=Name;
        this.id=id;
    }
    work(){
        console.log(`Hi Iam ${this.Name} and my id is ${this.id} `);
    }
}
class Manager extends Employee{
    constructor(domain){
        super();
        this.domain=domain;
    }
    manage(){
        console.log(`Hi Iam ${this.Name} and my id is ${this.id}. I work for ${this.domain}`);
    }
}
const newobj1 = new Employee("Prathi",123);
const newobject2 = new Manager("John", 111, "Lamp");
newobj1.work();
newobject2.manage();



