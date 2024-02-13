//set
let cars = new Set();
cars.add("Toyato");
cars.add("Swift");
cars.add("Ferrari");
cars.add("Toyato");
console.log(cars);

//maps
let details =new Map();
details.set("Prathi",22);
details.set("Mike",13);
details.set("Kony",25);

console.log(details.get("Mike"));

//weakmap
let treasuremap = new WeakMap();
let treasure = {};
treasuremap.set(treasure,"Gold coins");
console.log(treasuremap.get(treasure));
treasure=null;
