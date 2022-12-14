const conn = require("../config/bancoDeDados");
module.exports = {
  getAllProf(req, res, next) {
    conn.query(
      "SELECT nmProfessor, emailProfessor, telProfessor, formacaoProfessor, endProfessor, discProfessor, idProfessor FROM professores ORDER BY nmProfessor",
      (error, results) => {
        if (error) {
          res.send({
            data: "Parece Que ocorreu um erro, tente recarregar a pagina se o erro persistir entre em contato com o suporte técnico através do email: symetraStack@gmail.com",
          });
        } else {
          if (results.length > 0) {
            res.send({ data: results });
          } else {
            res.send({ data: "Nenhum(a) Professor (a) Cadastrado(a)" });
          }
        }
      }
    );
    next;
  },

  getProfById(req, res, next) {
    let id = req.params.id;
    conn.query(
      `SELECT * FROM professores WHERE idProfessor = ${id}`,
      (error, results) => {
        if (error) {
          res.send({
            data: "Parece Que ocorreu um erro, tente recarregar a pagina se o erro persistir entre em contato com o suporte técnico através do email: symetraStack@gmail.com",
          });
        } else {
          if (results.length > 0) {
            res.send({ data: results });
          } else {
            res.send({ data: "Professor(a) Não Encontrado(a)" });
          }
        }
      }
    );
    next;
  },

  addProf(req, res, next) {
    let dadosProfessores = req.body;
    conn.query(
      "SELECT cpfProfessor FROM professores WHERE cpfProfessor = ?",
      [req.body.cpf],
      (error, results) => {
        if (error) {
          res.send({
            data: "Parece Que ocorreu um erro, tente recarregar a pagina se o erro persistir entre em contato com o suporte técnico através do email: symetraStack@gmail.com",
          });
        } else {
          if (results.length > 0) {
            res.send({ data: "Professor(a) Já Cadastrado(a)" });
          } else {
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
                  res.send({
                    data: "Parece Que ocorreu um erro, tente recarregar a pagina se o erro persistir entre em contato com o suporte técnico através do email: symetraStack@gmail.com",
                  });
                } else {
                  res.send({
                    data: `Professor(a) ${dadosProfessores.nome} Cadastrado Com Sucesso`,
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

  updateProf(req, res, next) {
    let dadosProfessores = req.body;
    let id = req.params.id;
    conn.query(
      "SELECT idProfessor FROM professores WHERE idProfessor = ?",
      [id],
      (error, results) => {
        if (error) {
          res.send({
            data: "Parece Que ocorreu um erro, tente recarregar a pagina se o erro persistir entre em contato com o suporte técnico através do email: symetraStack@gmail.com",
          });
        } else {
          if (results.length > 0) {
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
                  res.send({
                    data: "Parece Que ocorreu um erro, tente recarregar a pagina se o erro persistir entre em contato com o suporte técnico através do email: symetraStack@gmail.com",
                  });
                } else {
                  res.send({
                    data: `Dados do Professor(a) ${dadosProfessores.nome} Alterados Com Sucesso`,
                  });
                }
              }
            );
          } else {
            res.send({ data: "Professor(a) Não Encontrado(a)" });
          }
        }
      }
    );
    next;
  },
  deleteProf(req, res, next) {
    let id = req.params.id;
    conn.query(
      `DELETE FROM professores WHERE idProfessor = ${id}`,
      (err, results) => {
        if (err) {
          res.send({
            data: "Parece Que ocorreu um erro, tente recarregar a pagina se o erro persistir entre em contato com o suporte técnico através do email: symetraStack@gmail.com",
          });
        } else {
          if (results.affectedRows > 0) {
            res.send({ data: "Professor(a) Deletado Com Sucesso" });
          } else {
            res.send({ data: "Professor(a) Não Encontrado(a)" });
          }
        }
      }
    );
    next;
  },
};
