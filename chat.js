```javascript
class Message {
    constructor(sender, content, timestamp) {
        this.sender = sender;
        this.content = content;
        this.timestamp = timestamp;
    }
}

let messages = [];

function sendMessage(content, sender = 'user') {
    let timestamp = new Date();
    let message = new Message(sender, content, timestamp);
    messages.push(message);
    document.getElementById('chatContainer').innerHTML += `
        <div class="chat-message ${sender}">
            <p>${content}</p>
            <span>${timestamp}</span>
        </div>
    `;
    let event = new CustomEvent('newMessage', { detail: message });
    document.dispatchEvent(event);
}

document.addEventListener('newMessage', function (e) {
    let message = e.detail;
    if (message.sender === 'babyAGI') {
        // Handle incoming message from babyAGI
    }
});
```