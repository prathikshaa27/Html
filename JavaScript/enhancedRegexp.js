let pattern = /dog/gy;
let string = "dogdogdog";

console.log(pattern.lastIndex);

console.log(pattern.exec(string));
console.log(pattern.lastIndex);

console.log(pattern.exec(string));
console.log(pattern.lastIndex);

console.log(pattern.exec(string));
console.log(pattern.lastIndex);
