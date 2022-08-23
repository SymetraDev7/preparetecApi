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
  },
};
