const express = require('express');

const app = express();

app.get('/', (request, response) => {

    return response.json({
        evento:'Semana OmniStack11.0',
        aluno:'Victor Huggo'
    });
});

app.listen(3333);
