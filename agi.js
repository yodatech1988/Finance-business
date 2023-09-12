```javascript
import { connections } from './connection.js';

// Function to connect to a babyAGI instance
function connectToAgi(instance) {
    const connection = new Connection(instance);
    connections.push(connection);
    connection.connect();
    document.getElementById('connectionStatus').textContent = `Connected to ${instance}`;
}

// Function to disconnect from a babyAGI instance
function disconnectFromAgi(instance) {
    const connection = connections.find(conn => conn.instance === instance);
    if (connection) {
        connection.disconnect();
        const index = connections.indexOf(connection);
        connections.splice(index, 1);
        document.getElementById('connectionStatus').textContent = `Disconnected from ${instance}`;
    }
}

// Exporting the functions
export { connectToAgi, disconnectFromAgi };
```