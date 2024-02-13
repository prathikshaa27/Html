//Reflect
class person{
    constructor(Name,age){
        this.Name =Name;
        this.age =age;
    }
}
let Person = new person("prathi",22);
console.log(Reflect.get(Person,"Name"));
console.log(Reflect.get(Person,"age"));