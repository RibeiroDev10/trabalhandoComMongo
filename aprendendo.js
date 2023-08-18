const mongoose = require("mongoose")

// Configurando o mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://127.0.0.1:27017/aprendendo", {
        useMongoCliente: true
    })
            .then(() => {
                console.log("Mongo conectado com sucesso!");
            })
            .catch((error) => {
                console.log("Erro: " + error);
            })