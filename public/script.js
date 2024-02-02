const botaoEnviar = document.getElementById('enviar');
const caixaMensagem = document.getElementById('texto');
const chat = document.getElementById('mensagens');

const socket = io();

botaoEnviar.addEventListener('click', () => {
    if (caixaMensagem.value !== ""){
        //emitindo uma mensagem pelo socket
        socket.emit('nova mensagem', caixaMensagem.value);
        caixaMensagem.value = "";
    }
})

socket.addEventListener('nova mensagem', (msg) => {
    const elementoMensagen = document.createElement('li'); //<li></li>
    elementoMensagen.textContent = msg; //<li> texto </li>
    elementoMensagen.classList.add('mensagem'); //<li class = "mensagem"> texto </li>
    chat.appendChild(elementoMensagen); //coloca o elemento dentro da div chat
})