//module A
//exporting the variable

/*export let Name= "prathi";

//Module B
//importing the variable from module A
import {Name} from './moduleA';
comsole.log(Name);*/

export default function greet(name){
    console.log(`Hello ${name}`);
}
import greet from './moduleA';
greet(prthi)