const data = new Promise((resolve, reject) => {
    setTimeout(() => {
        const ans = "prathi";
        if (ans) {
            resolve(ans);
        } else {
            reject('Failure');
        }
    }, 3000);
});

function getUserDetails(input) {
    return new Promise((resolve, reject) => {
        let UserDetails = [{ name: "prathi", age: 22 }];
        const user = UserDetails.find(user => user.name === input);
        if (user) {
            resolve(user);
        } else {
            reject("Userdetails Not found");
        }
    });
}

data
    .then((name) => {
        return getUserDetails(name);
    })
    .then((userDetails) => {
        console.log(userDetails);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Finally block is executed");
    });