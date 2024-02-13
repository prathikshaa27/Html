// Function to handle messages sent from the main script
self.onmessage = function(event) {
  // Retrieve data from the message
  const data = event.data;
  
  // Process the data (in this example, simply uppercase the string)
  const result = data.toUpperCase();
  
  // Send the result back to the main script
  self.postMessage(result);
};