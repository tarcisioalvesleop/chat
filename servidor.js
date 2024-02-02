const http = require('http');
const express = require('express');
const aplicacao = express();

const servidorHttp = http.createServer(aplicacao);
// aplicando dentro do servidor o socket.io
const io = require('socket.io')(servidorHttp);

io.addListener('connection', (socket) => {
    console.log('um usuário conectou');
    // recebendo um socket e executando uma função de emit essa mensagem
    socket.addListener('nova mensagem', (msg) => {
        io.emit('nova mensagem', msg);
    })
}) 

// usando a pasta public como resposta do servidor
aplicacao.use(express.static('public'));

servidorHttp.listen(1000, '192.168.1.72');