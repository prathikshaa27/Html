// Create a new Worker
const worker = new Worker('worker.js');

// Send a message to the worker
worker.postMessage('Hello, Worker!');

// Listen for messages from the worker
worker.onmessage = function(event) {
  console.log('Message from worker:', event.data);
};

