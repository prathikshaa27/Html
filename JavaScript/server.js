
// Create a WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

// Listen for connections
wss.on('connection', function connection(ws) {
  console.log('Client connected');

  // Handle messages from clients
  ws.on('message', function incoming(message) {
    console.log('Received:', message);

    // Echo back the received message to the client
    ws.send(message);
  });
});