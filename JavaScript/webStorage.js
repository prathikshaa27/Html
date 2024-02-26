//local storage
 localStorage.setItem("username","prathi");

const output = localStorage.getItem('username');
console.log(output);

localStorage.setItem("username","Mike");
console.log(localStorage.getItem("username"));

//sessionstorage
 sessionStorage.setItem("age",22);

const gender = sessionStorage.getItem("age");
console.log(gender);

sessionStorage.setItem("age",25);
console.log(sessionStorage.getItem("age"));

