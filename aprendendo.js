const mongoose = require("mongoose")

// Configurando o mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://127.0.0.1:27017/aprendendo")
            .then(() => {
                console.log("Mongo conectado com sucesso!");
            })
            .catch((error) => {
                console.log("Erro: " + error);
            })

// Model - Usuários
    const UsuarioSchema = mongoose.Schema({
         // Definindo todo o meu MODEL
            nome: {
                type: String,
                require: true
            },
            sobrenome: {
                type: String,
                require: true
            },
            email: {
                type: String,
                require: true
            },
            idade: {
                type: Number,
                require: true
            },
            pais: {
                type: String
            }
    });

// Definindo a collection
    mongoose.model('usuarios', UsuarioSchema);

const Rafael = mongoose.model('usuarios');

// Inserindo dados no Model
    new Rafael({
        nome: "Rafael",
        sobrenome: "Ribeiro",
        email: "email@email.com",
        idade: 20,
        pais: "Brasil"
    }).save()
      .then(() => {
        console.log("Usuário cadastrado com sucesso!");
      })  
      .catch((error) => {
        console.log("Houve um erro ao registrar um usuário: " + error);
      });