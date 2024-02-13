//collation

let fruits = ["apple", "mango","grapes"];
console.log(fruits.sort(new Intl.Collator("fr").compare));

//number formatting
let number = 1234567.89;
console.log(new Intl.NumberFormat().format(number));

//currency formatting
let cost = 122.33;
console.log(new Intl.NumberFormat("en-Us",{style:"currency", currency:"USD"}).format(cost));

//date time formatting
let date = new Date();
console.log(new Intl.DateTimeFormat("en-US").format(date));