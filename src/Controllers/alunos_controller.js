const conn = require("../config/bancoDeDados");

module.exports = {
  getAllAlunos(req, res, next) {
    conn.query(
      "SELECT idAluno, nmAluno, dtNascAluno, endAluno, escAluno, emailAluno, telRespAluno, poloAluno, raAluno FROM alunos ORDER BY nmAluno",
      (error, results) => {
        if (error) {
          res.send(
            "Parece Que ocorreu um erro, tente recarregar a pagina se o erro persistir entre em contato com o suporte técnico através do email: symetraStack@gmail.com"
          );
        } else {
          if (results.length > 0) {
            res.send(results);
          } else {
            res.send("Nenhum(a) Aluno(a) Cadastrado(a)");
          }
        }
      }
    );
    next;
  },

  getAlunosById(req, res, next) {
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
          if (results.length > 0) {
            res.send(results);
          } else {
            res.send("Aluno(a) Não Encontrado(a)");
          }
        }
      }
    );
    next;
  },

  addAluno(req, res, next) {
    let dadosAlunos = req.body;
    conn.query(
      "SELECT cpfAluno FROM alunos WHERE cpfAluno = ?",
      [req.body.cpf],
      (error, results) => {
        if (error) {
          res.send(error);
        } else {
          if (results.length > 0) {
            res.send("Aluno(a) Já Cadastrado(a)");
          } else {
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
                  res.send(
                    `Aluno(a) ${dadosAlunos.nome} Cadastrada Com Sucesso`
                  );
                }
              }
            );
          }
        }
      }
    );
    next;
  },

  updateAluno(req, res, next) {
    let dadosAlunos = req.body;
    let id = req.params.id;
    conn.query(
      "SELECT idAluno FROM alunos WHERE idAluno = ?",
      [id],
      (error, results) => {
        if (error) {
          res.send(error);
        } else {
          if (results.length > 0) {
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
                  res.send(
                    `Dados do Aluno(a) ${dadosAlunos.nome} Alterados Com Sucesso`
                  );
                }
              }
            );
          } else {
            res.send("Aluno(a) Não Encontrado(a)");
          }
        }
      }
    );

    next;
  },

  deleteAluno(req, res, next) {
    let id = req.params.id;
    conn.query(`DELETE FROM alunos WHERE idAluno = ${id}`, (err, results) => {
      if (err) {
        res.send(
          "Parece Que ocorreu um erro, tente recarregar a pagina se o erro persistir entre em contato com o suporte técnico através do email: symetraStack@gmail.com"
        );
      } else {
        if (results.affectedRows > 0) {
          res.send("Aluno(a) Deletado Com Sucesso");
        } else {
          res.send("Aluno(a) Não Encontrado(a)");
        }
      }
    });
    next;
  },
};
