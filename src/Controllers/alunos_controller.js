const conn = require("../config/bancoDeDados");

module.exports = {
  getAllAlunos(req, res, next) {
    conn.query(
      "SELECT nmAluno, dtNascAluno, endAluno, escAluno, emailAluno, telRespAluno, poloAluno, raAluno, idAluno FROM alunos ORDER BY nmAluno",
      (error, results) => {
        if (error) {
          res.send({
            data: "Parece Que ocorreu um erro, tente recarregar a pagina se o erro persistir entre em contato com o suporte técnico através do email: symetraStack@gmail.com",
          });
        } else {
          if (results.length > 0) {
            res.send({ data: results });
          } else {
            res.send({ data: "Nenhum(a) Aluno(a) Cadastrado(a)" });
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
          res.send({
            data: "Parece Que ocorreu um erro, tente recarregar a pagina se o erro persistir entre em contato com o suporte técnico através do email: symetraStack@gmail.com",
          });
        } else {
          if (results.length > 0) {
            res.send({ data: results });
          } else {
            res.send({ data: "Aluno(a) Não Encontrado(a)" });
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
          res.send({ data: error });
        } else {
          if (results.length > 0) {
            res.send({ data: "Aluno(a) Já Cadastrado(a)" });
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
                  res.send({
                    data: "Parece Que ocorreu um erro, tente recarregar a pagina se o erro persistir entre em contato com o suporte técnico através do email: symetraStack@gmail.com",
                  });
                } else {
                  res.send({
                    data: `Aluno(a) ${dadosAlunos.nome} Cadastrada Com Sucesso`,
                  });
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
          res.send({ data: error });
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
                  res.send({
                    data: "Parece Que ocorreu um erro, tente recarregar a pagina se o erro persistir entre em contato com o suporte técnico através do email: symetraStack@gmail.com",
                  });
                } else {
                  res.send({
                    data: `Dados do Aluno(a) ${dadosAlunos.nome} Alterados Com Sucesso`,
                  });
                }
              }
            );
          } else {
            res.send({ data: "Aluno(a) Não Encontrado(a)" });
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
        res.send({
          data: "Parece Que ocorreu um erro, tente recarregar a pagina se o erro persistir entre em contato com o suporte técnico através do email: symetraStack@gmail.com",
        });
      } else {
        if (results.affectedRows > 0) {
          res.send({ data: "Aluno(a) Deletado Com Sucesso" });
        } else {
          res.send({ data: "Aluno(a) Não Encontrado(a)" });
        }
      }
    });
    next;
  },
};
