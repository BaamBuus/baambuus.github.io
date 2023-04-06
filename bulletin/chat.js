const chatMessages = chatTemplate.content.querySelector('#chat-messages');
const chatForm = chatTemplate.content.querySelector('form');
const chatMessage = chatTemplate.content.querySelector('#chat-message');
const chatSubmit = chatTemplate.content.querySelector('#chat-submit');

let currentUser = null;

const socket = new WebSocket('ws://' + window.location.host);

socket.addEventListener('message', event => {
    const message = JSON.parse(event.data);
    const li = document.createElement('li');
    li.innerText = `${message.username}: ${message.content}`;
    chatMessages.appendChild(li);
});

chatForm.addEventListener('submit', event => {
    event.preventDefault();

    const content = chatMessage.value;
    const message = {
        username: currentUser,
        content: content
    };
    socket.send(JSON.stringify(message));
    chatMessage.value = '';
});

function showHome() {
    contentDiv.innerHTML = '';
    contentDiv.appendChild(homeTemplate.content.cloneNode(true));

    loginForm.addEventListener('submit', event => {
        event.preventDefault();
        currentUser = loginForm.querySelector('#login-username').value;
        showChat();
    });
}

function showChat() {
    contentDiv.innerHTML = '';
    contentDiv.appendChild(chatTemplate.content.cloneNode(true));
    const currentUserElement = document.querySelector('#current-user');
    currentUserElement.innerText = currentUser;
}

showHome();