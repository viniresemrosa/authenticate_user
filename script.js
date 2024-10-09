const users = [];

function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    const userExists = users.find(user => user.username === username);
    if (userExists) {
        displayMessage('Usuário já existe', 'error');
        return;
    }

    users.push({ username, password });
    displayMessage('Usuário registrado com sucesso', 'success');
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        displayMessage('Login bem-sucedido', 'success');
    } else {
        displayMessage('Usuário ou senha incorretos', 'error');
    }
}

function displayMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.style.color = type === 'error' ? 'red' : 'green';
}
