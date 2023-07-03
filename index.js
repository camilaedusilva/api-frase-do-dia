const express = require('express');
const app = express();

let data = new Date();

let mensagemDoDia = require('./mensagem-do-dia');

app.get('/', (req, res) => {
    let dia = data.getDate();
    let mensagemSelecionada = mensagemDoDia.retornarMensagemDoDia(dia);

    res.json({mensagem: mensagemSelecionada});
});

app.listen(8080, () => {
    console.log('Servidor iniciado: ' + data);
})
