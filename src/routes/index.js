const express = require("express");
const Routes = express.Router();
const profController = require("../Controllers/prof_controller");
const alunosController = require("../Controllers/alunos_controller");
const adminController = require("../Controllers/admin_controller");
const loginController = require("../Controllers/login_controller");

//rota princi
Routes.get("/", (req, res, next) => {
  res.send(`<h1>rodando!</h1>`);
});

//rotas login
Routes.post("/admin/login", loginController.login);

//rotas prof
Routes.get("/admin/professores", profController.getAllProf);
Routes.get("/admin/professores/:id", profController.getProfById);
Routes.post("/admin/professores", profController.addProf);
Routes.patch("/admin/professores/:id", profController.updateProf);
Routes.delete("/admin/professores/:id", profController.deleteProf);

//rotas alunos
Routes.get("/admin/alunos", alunosController.getAllAlunos);
Routes.get("/admin/alunos/:id", alunosController.getAlunosById);
Routes.post("/admin/alunos", alunosController.addAluno);
Routes.patch("/admin/alunos/:id", alunosController.updateAluno);
Routes.delete("/admin/alunos/:id", alunosController.deleteAluno);

//rotas admin
Routes.get("/admin/admin", adminController.getAllAdmin);
Routes.get("/admin/admin/:id", adminController.getAdminById);
Routes.post("/admin/admin", adminController.addAdmin);
Routes.delete("/admin/admin/:id", adminController.deleteAdmin);

module.exports = Routes;
