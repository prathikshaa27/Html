onmessage = function(event) {
  console.log('Message received in worker:', event.data);
  postMessage('Hello from worker script!');
};