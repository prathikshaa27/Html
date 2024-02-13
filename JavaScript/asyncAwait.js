function Userdata(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            const error = Math.random()
                if(error){
                    reject("error occured")
                }
                else{
                    resolve({Name:"Prathi",age:22});
                }
            },5000);
        });
    }

async function Todisplaydata(){
    try{
        console.log("Collecting user data");
        const data = await Userdata();
        console.log("User data has been collected:" ,data);
        console.log(`Naame:${data.Name}, Age:${data.age}`);
    }
    catch(err){
        console.log(err);
    }
}
Todisplaydata();
console.log("Collecting data is in progress")