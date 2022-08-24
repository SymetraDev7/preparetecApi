const conn = require("../config/bancoDeDados");

module.exports = {
  login(req, res, next) {
    conn.query(
      `SELECT emailAdmin FROM admin WHERE emailAdmin = ?`,
      [req.body.login],
      (error, results) => {
        if (results.length > 0) {
          conn.query(
            "SELECT senhaAdmin FROM admin WHERE emailAdmin = ?",
            [req.body.login],
            (error, results) => {
              if (req.body.senha == results[0].senhaAdmin) {
                res.send({ data: "seja Bem Vindo", code: 200 });
              } else {
                res.send({ data: "Senha Incorreta", code: 403 });
              }
            }
          );
        } else {
          res.send({ data: "Usuario Não Encontrado!", code: 404 });
        }
      }
    );
  },
};
