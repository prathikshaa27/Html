class Counter {
   #count = 0; 

   increment() {
       this.#count++; 
   }

   decrement() {
       if (this.#count > 0) {
           this.#count--; 
       }
   }

   getCount() {
       return this.#count; 
   }
}


const counter = new Counter();
console.log("Initial count:", counter.getCount()); 
counter.increment();
counter.increment();
counter.increment();
console.log("Count after incrementing:", counter.getCount()); 
counter.decrement();
console.log("Count after decrementing:", counter.getCount()); 
//console.log(counter.#count); 