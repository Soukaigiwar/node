import express from "express";

// importar biblioteca de tipos:
// usar: yarn add @types/express -D

const app = express();

// tipos de metodos
// GET      => Buscar uma informação
// POST     => Inserir (criar) uma informação
// PUT      => Alterar uma informação
// DELETE   => Remover um dado
// PATCH    => Alterar uma informação específica

app.get("/test", (request, response) => {
    // Request => entrando
    // Response => saindo
    return response.send("Olá NLW")
})

app.post("/test-post", (request, response) => {
    return response.send("Olá NLW método post")
})

//inicia o servidor na porta 3000
app.listen(3000, () => console.log("Server is running Véi"));