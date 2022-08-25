const conn = require("../config/bancoDeDados");

module.exports = {
  getAllAdmin(req, res, next) {
    conn.query(
      "SELECT nmAdmin, emailAdmin, telAdmin, idAdmin  FROM admin ORDER BY nmAdmin",
      (error, results) => {
        if (error) {
          res.send({
            data: "Parece Que ocorreu um erro, tente recarregar a pagina se o erro persistir entre em contato com o suporte técnico através do email: symetraStack@gmail.com",
          });
        } else {
          if (results.length > 0) {
            res.send({ data: results });
          } else {
            res.send({ data: "Nenhum(a) Administrador(a) Cadastrado(a)" });
          }
        }
      }
    );
    next;
  },
  getAdminById(req, res, next) {
    let id = req.params.id;
    conn.query(
      `SELECT * FROM admin WHERE idAdmin = ${id}`,
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
            res.send({ data: "Admnistrador(a) Não Encontrado(a)" });
          }
        }
      }
    );
    next;
  },
  addAdmin(req, res, next) {
    let dadosAdmin = req.body;
    conn.query(
      "SELECT emailAdmin FROM admin WHERE emailAdmin = ?",
      [req.body.cpf],
      (error, results) => {
        if (error) {
          res.send({ data: error });
        } else {
          if (results.length > 0) {
            res.send({ data: "Administrador(a) Já Cadastrado(a)" });
          } else {
            conn.query(
              "INSERT INTO admin ( nmAdmin, emailAdmin, senhaAdmin, telAdmin) VALUES (?, ?, ?, ?)",
              [
                dadosAdmin.nome,
                dadosAdmin.email,
                dadosAdmin.senha,
                dadosAdmin.tel,
              ],
              (error, results) => {
                if (error) {
                  res.send({
                    data: "Parece Que ocorreu um erro, tente recarregar a pagina se o erro persistir entre em contato com o suporte técnico através do email: symetraStack@gmail.com",
                  });
                } else {
                  res.send({
                    data: `Admnistrador(a) ${dadosAdmin.nome} Cadastrado Com Sucesso`,
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
  deleteAdmin(req, res, next) {
    let id = req.params.id;
    conn.query(`DELETE FROM admin WHERE idAdmin = ${id}`, (err, results) => {
      if (err) {
        res.send({
          data: "Parece Que ocorreu um erro, tente recarregar a pagina se o erro persistir entre em contato com o suporte técnico através do email: symetraStack@gmail.com",
        });
      } else {
        if (results.affectedRows > 0) {
          res.send({ data: "Admnistrador(a) Deletado Com Sucesso" });
        } else {
          res.send({ data: "Admnistrador(a) Não Encontrado(a)" });
        }
      }
    });
    next;
  },
};
