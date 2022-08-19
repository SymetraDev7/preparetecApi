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

server.post("/login", (req, res, next) => {
  conn.query(
    `SELECT nmAdmin FROM admin WHERE nmAdmin = ?`,
    [req.body.login],
    (error, results) => {
      if (results.length > 0) {
        conn.query(
          "SELECT senhaAdmin FROM admin WHERE nmAdmin = ?",
          [req.body.login],
          (error, results) => {
            if (req.body.senha == results[0].senhaAdmin) {
              res.send("seja Bem Vindo");
            } else {
              res.send("Senha Incorreta");
            }
          }
        );
      } else {
        res.send("Usuario Não Encontrado!");
      }
    }
  );
});

server.get("/admin/professores", (req, res, next) => {
  conn.query(
    "SELECT idProfessor, nmProfessor, emailProfessor, telProfessor, formacaoProfessor, endProfessor, discProfessor FROM professores ORDER BY nmProfessor",
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

server.get("/admin/alunos", (req, res, next) => {
  conn.query(
    "SELECT idAluno, nmAluno, dtNascAluno, endAluno, escAluno, emailAluno, telRespAluno, poloAluno, raAluno FROM alunos ORDER BY nmAluno",
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

server.get("/admin/admin", (req, res, next) => {
  conn.query(
    "SELECT idAdmin, nmAdmin, emailAdmin, telAdmin  FROM admin ORDER BY nmAdmin",
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

server.get("/admin/admin/:id", (req, res, next) => {
  let id = req.params.id;
  conn.query(
    `SELECT * FROM admin WHERE idAluno = ${id}`,
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
      "INSERT INTO professores ( nmProfessor, cpfProfessor, emailProfessor, telProfessor, formacaoProfessor, endProfessor, discProfessor, senhaProfessor ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        dadosProfessores.nome,
        dadosProfessores.cpf,
        dadosProfessores.email,
        dadosProfessores.tel,
        dadosProfessores.formacao,
        dadosProfessores.end,
        dadosProfessores.disc,
        dadosProfessores.senha,
      ],
      (error, results) => {
        if (error) {
          res.send(
            "Parece Que ocorreu um erro, tente recarregar a pagina se o erro persistir entre em contato com o suporte técnico através do email: symetraStack@gmail.com"
          );
        } else {
          res.send(
            `Professor(a) ${dadosProfessores.nome} Cadastrado Com Sucesso`
          );
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
      "INSERT INTO alunos (nmAluno, cpfAluno, dtNascAluno, endAluno, escAluno, emailAluno, telRespAluno, poloAluno, raAluno, senhaAluno) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        dadosAlunos.nome,
        dadosAlunos.cpf,
        dadosAlunos.dataNasc,
        dadosAlunos.end,
        dadosAlunos.escola,
        dadosAlunos.email,
        dadosAlunos.telResp,
        dadosAlunos.polo,
        dadosAlunos.ra,
        dadosAlunos.senha,
      ],
      (error, results) => {
        if (error) {
          res.send(
            "Parece Que ocorreu um erro, tente recarregar a pagina se o erro persistir entre em contato com o suporte técnico através do email: symetraStack@gmail.com"
          );
        } else {
          res.send(`Aluno(a) ${dadosAlunos.nome} Cadastrada Com Sucesso`);
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

server.post("/admin/admin", (req, res, next) => {
  let dadosAdmin = req.body;
  try {
    conn.query(
      "INSERT INTO admin ( nmAdmin, emailAdmin, senhaAdmin, telAdmin) VALUES (?, ?, ?, ?)",
      [dadosAdmin.nome, dadosAdmin.email, dadosAdmin.senha, dadosAdmin.tel],
      (error, results) => {
        if (error) {
          res.send(
            "Parece Que ocorreu um erro, tente recarregar a pagina se o erro persistir entre em contato com o suporte técnico através do email: symetraStack@gmail.com"
          );
        } else {
          res.send(`Admnistrador(a) ${dadosAdmin.nome} Cadastrado Com Sucesso`);
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
    `UPDATE alunos SET nmAluno = ?, cpfAluno = ?, dtNascAluno = ?, endAluno = ?, escAluno = ?, emailAluno = ?, telRespAluno = ? ,poloAluno = ?, raAluno = ?,senhaAluno = ? WHERE idAluno = ${id}`,
    [
      dadosAlunos.nome,
      dadosAlunos.cpf,
      dadosAlunos.dataNasc,
      dadosAlunos.end,
      dadosAlunos.escola,
      dadosAlunos.email,
      dadosAlunos.telResp,
      dadosAlunos.polo,
      dadosAlunos.ra,
      dadosAlunos.senha,
    ],
    (err, results) => {
      if (err) {
        res.send(
          err,
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
        res.send(err);
      } else {
        res.send("Professor(a Deletado Com Sucesso");
      }
    }
  );
  next;
});
server.delete("/admin/alunos/:id", (req, res, next) => {
  let id = req.params.id;
  conn.query(`DELETE FROM alunos WHERE idAluno = ${id}`, (err, results) => {
    if (err) {
      res.send(
        "Parece Que ocorreu um erro, tente recarregar a pagina se o erro persistir entre em contato com o suporte técnico através do email: symetraStack@gmail.com"
      );
    } else {
      res.send("Aluno(a) Deletado Com Sucesso");
    }
  });
  next;
});

server.delete("/admin/admin/:id", (req, res, next) => {
  let id = req.params.id;
  conn.query(`DELETE FROM admin WHERE idAdmin = ${id}`, (err, results) => {
    if (err) {
      res.send(
        "Parece Que ocorreu um erro, tente recarregar a pagina se o erro persistir entre em contato com o suporte técnico através do email: symetraStack@gmail.com"
      );
    } else {
      res.send(`Admnistrador(a) Deletado Com Sucesso`);
    }
  });
  next;
});

server.listen(process.env.PORT || 3333, () => {
  console.log(`Servidor Rodando na porta ${port}`);
});
