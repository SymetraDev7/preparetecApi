const express = require("express");
const server = express();
const cors = require("cors");
const { application } = require("express");
const port = 3333;
const conn = require("./src/config/bancoDeDados");

server.use(cors());
server.use(express.json());
server.get("/", (req, res, next) => {
  res.send(`<h1>rodando!</h1>`);
});

server.get("/admin/professores", (req, res, next) => {
  conn.query("SELECT * FROM professores", (error, results) => {
    if (error) {
      res.send(
        "Parece Que ocorreu um erro, tente recarregar a pagina se o erro persistir entre em contato com o suporte técnico através do email: symetraStack@gmail.com"
      );
    } else {
      res.send(results);
    }
  });
  next;
});
server.get("/admin/alunos", (req, res, next) => {
  conn.query("SELECT * FROM alunos", (error, results) => {
    if (error) {
      res.send(
        "Parece Que ocorreu um erro, tente recarregar a pagina se o erro persistir entre em contato com o suporte técnico através do email: symetraStack@gmail.com"
      );
    } else {
      res.send(results);
    }
  });
  next;
});
server.get("/admin/professores/:id", (req, res, next) => {
  let id = req.params.id;
  conn.query(
    `SELECT * FROM professores WHERE idProfessor = ${id}`,
    (error, results) => {
      if (error) {
        res.send(
          error,
          "Parece Que ocorreu um erro, tente recarregar a pagina se o erro persistir entre em contato com o suporte técnico através do email: symetraStack@gmail.com"
        );
      } else {
        res.send(results);
      }
    }
  );
  next;
});
server.get("/admin/alunos/:id", (req, res, next) => {
  let id = req.params.id;
  conn.query(
    `SELECT * FROM alunos WHERE idAluno = ${id}`,
    [req.params.id],
    (error, results) => {
      if (error) {
        res.send(
          "Parece Que ocorreu um erro, tente recarregar a pagina se o erro persistir entre em contato com o suporte técnico através do email: symetraStack@gmail.com"
        );
      } else {
        res.send(results);
      }
    }
  );
  next;
});
server.post("/admin/professores", (req, res, next) => {
  let dadosProfessores = req.body;
  try {
    conn.query(
      "INSERT INTO professores ( nmProfessor, cpfProfessor, emailProfessor, telProfessor, formacaoProfessor, endProfessor, discProfessor) VALUES (?,?, ?, ?, ?, ?, ?)",
      [
        dadosProfessores.nome,
        dadosProfessores.cpf,
        dadosProfessores.email,
        dadosProfessores.tel,
        dadosProfessores.formacao,
        dadosProfessores.end,
        dadosProfessores.disc,
      ],
      (error, results) => {
        if (error) {
          res.send(
            "Parece Que ocorreu um erro, tente recarregar a pagina se o erro persistir entre em contato com o suporte técnico através do email: symetraStack@gmail.com"
          );
        } else {
          res.send(`Professor ${dadosProfessores.nome} Cadastrado Com Sucesso`);
        }
      }
    );
  } catch (err) {
    res.send(
      "Parece Que ocorreu um erro, tente recarregar a pagina se o erro persistir entre em contato com o suporte técnico através do email: symetraStack@gmail.com"
    );
  }
  next;
});

server.post("/admin/alunos", (req, res, next) => {
  let dadosAlunos = req.body;
  try {
    conn.query(
      "INSERT INTO alunos (nmAluno, cpfAluno, dtNascAluno, endAluno, escAluno, emailAluno, telRespAluno, poloAluno) VALUES (?,?, ?, ?, ?, ?, ?, ?)",
      [
        dadosAlunos.nome,
        dadosAlunos.cpf,
        dadosAlunos.dataNasc,
        dadosAlunos.end,
        dadosAlunos.escola,
        dadosAlunos.email,
        dadosAlunos.telResp,
        dadosAlunos.poloAluno,
      ],
      (error, results) => {
        if (error) {
          res.send(
            "Parece Que ocorreu um erro, tente recarregar a pagina se o erro persistir entre em contato com o suporte técnico através do email: symetraStack@gmail.com"
          );
        } else {
          res.send(results);
        }
      }
    );
  } catch (err) {
    res.send(
      "Parece Que ocorreu um erro, tente recarregar a pagina se o erro persistir entre em contato com o suporte técnico através do email: symetraStack@gmail.com"
    );
  }
  next;
});

server.patch("/admin/professores/:id", (req, res, next) => {
  let dadosProfessores = req.body;
  let id = req.params.id;

  conn.query(
    `UPDATE professores SET nmProfessor = ?, cpfProfessor = ?, emailProfessor = ?, telProfessor = ?, formacaoProfessor = ?, endProfessor = ?, discProfessor = ? WHERE idProfessor = ${id}`,
    [
      dadosProfessores.nome,
      dadosProfessores.cpf,
      dadosProfessores.email,
      dadosProfessores.tel,
      dadosProfessores.formacao,
      dadosProfessores.end,
      dadosProfessores.disc,
    ],
    (err, results) => {
      if (err) {
        res.send(
          "Parece Que ocorreu um erro, tente recarregar a pagina se o erro persistir entre em contato com o suporte técnico através do email: symetraStack@gmail.com"
        );
      } else {
        res.send(
          `Dados do Professor(a) ${dadosProfessores.nome} Alterados Com Sucesso`
        );
      }
    }
  );
  next;
});
server.patch("/admin/alunos/:id", (req, res, next) => {
  let dadosAlunos = req.body;
  let id = req.params.id;

  conn.query(
    `UPDATE alunos SET nmAluno = ?, cpfAluno = ?, dtNascAluno = ?, endAluno = ?, escAluno = ?, emailAluno = ?, telRespAluno = ? poloAluno = ? WHERE idProfessor = ${id}`,
    [
      dadosAlunos.nome,
      dadosAlunos.cpf,
      dadosAlunos.dataNasc,
      dadosAlunos.end,
      dadosAlunos.escola,
      dadosAlunos.email,
      dadosAlunos.telResp,
      dadosAlunos.poloAluno,
    ],
    (err, results) => {
      if (err) {
        res.send(
          "Parece Que ocorreu um erro, tente recarregar a pagina se o erro persistir entre em contato com o suporte técnico através do email: symetraStack@gmail.com"
        );
      } else {
        res.send(`Dados do Aluno(a) ${dadosAlunos.nome} Alterados Com Sucesso`);
      }
    }
  );
  next;
});

server.delete("/admin/professores/:id", (req, res, next) => {
  let id = req.params.id;
  conn.query(
    `DELETE FROM professores WHERE idProfessor = ${id}`,
    (err, results) => {
      if (err) {
        res.send(
          "Parece Que ocorreu um erro, tente recarregar a pagina se o erro persistir entre em contato com o suporte técnico através do email: symetraStack@gmail.com"
        );
      } else {
        res.send("Professor Deletado Com Sucesso");
      }
    }
  );
  next;
});
server.delete("/admin/alunos/:id", (req, res, next) => {
  let id = req.params.id;
  conn.query(`DELETE FROM alunos WHERE idProfessor = ${id}`, (err, results) => {
    if (err) {
      res.send(
        "Parece Que ocorreu um erro, tente recarregar a pagina se o erro persistir entre em contato com o suporte técnico através do email: symetraStack@gmail.com"
      );
    } else {
      res.send(results);
    }
  });
  next;
});

server.listen(process.env.PORT || 3333, () => {
  console.log(`Servidor Rodando na porta ${port}`);
});
