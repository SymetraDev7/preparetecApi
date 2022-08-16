const express = require("express")
const server = express();
const cors = require("cors");
const { application } = require("express");
const port = 3333;

server.use(cors());
server.use(express.json())
server.get("/", (req, res) => {

    res.send(`<h1>rodando!</h1>`)

})
server.get("/admin/professores", (req, res) => {

    res.send(req.body)

})
server.get("/admin/alunos", (req, res) => {

    res.send(req.body)

})
server.get("/admin/professores/:id", (req, res) => {

    res.send(req.body)

})
server.get("/admin/alunos/:id", (req, res) => {

    res.send(req.body)

})
server.post("/admin/professores", (req, res) => {

    let dadosProfessores = req.body;


    res.send({
        nome: dadosProfessores.nome,
        cpf: dadosProfessores.cpf,
        formacao: dadosProfessores.formacao,
        endereco: dadosProfessores.endereco,
        disciplina: dadosProfessores.disciplina,
        email: dadosProfessores.email,
        telefone: dadosProfessores.telefone,



    })


})
server.post("/admin/alunos", (req, res) => {

    let dadosAlunos = req.body;


    res.send({
        nome: dadosAlunos.nome,
        cpf: dadosAlunos.cpf,
        dataNasc: dadosAlunos.dataNasc,
        endereco: dadosAlunos.endereco,
        instituicao: dadosAlunos.instituicao,
        email: dadosAlunos.email,
        telefoneResp: dadosAlunos.telefoneResp,
        poloAula: dadosAlunos.poloAula,


    })


})
server.put("/admin/professores/:id", (req, res) => {

    let dadosProfessores = req.body;


    res.send({
        nome: dadosProfessores.nome,
        cpf: dadosProfessores.cpf,
        formacao: dadosProfessores.formacao,
        endereco: dadosProfessores.endereco,
        disciplina: dadosProfessores.disciplina,
        email: dadosProfessores.email,
        telefone: dadosProfessores.telefone,



    })


})
server.put("/admin/alunos/:id", (req, res) => {

    let dadosAlunos = req.body;


    res.send({
        nome: dadosAlunos.nome,
        cpf: dadosAlunos.cpf,
        dataNasc: dadosAlunos.dataNasc,
        endereco: dadosAlunos.endereco,
        instituicao: dadosAlunos.instituicao,
        email: dadosAlunos.email,
        telefoneResp: dadosAlunos.telefoneResp,
        poloAula: dadosAlunos.poloAula,


    })


})
server.delete("/admin/professores/:id", (req, res) => {




    res.send("Usuario deletado")


})
server.delete("/admin/alunos/:id", (req, res) => {



    res.send("Usuario deletado")
})


server.listen(port, () => {

    console.log("boa amigo!!!")

});
