create database preparetec;
use preparetec;

CREATE TABLE admin (
  idAdmin INT NOT NULL AUTO_INCREMENT,
  nmAdmin VARCHAR(100) NOT NULL,
  emailAdmin VARCHAR(100) NOT NULL,
  telAdmin VARCHAR(15) NOT NULL,
  senhaAdmin VARCHAR(8) NOT NULL,
  PRIMARY KEY (`idAdmin`));

CREATE TABLE alunos (
  idAluno INT NOT NULL  AUTO_INCREMENT,
  nmAluno VARCHAR(100) NOT NULL,
  cpfAluno VARCHAR(15) NOT NULL,
  dtNascAluno VARCHAR(10) NOT NULL,
  endAluno VARCHAR(200) NOT NULL,
  escAluno VARCHAR(100) NOT NULL,
  emailAluno VARCHAR(100) NOT NULL,
  telRespAluno VARCHAR(15) NOT NULL,
  poloAluno VARCHAR(100) NOT NULL,
  raAluno VARCHAR(10) NOT NULL,
  senhaAluno VARCHAR(8) NOT NULL,
  PRIMARY KEY (`idAluno`));
  
CREATE TABLE professores (
  idProfessor INT NOT NULL AUTO_INCREMENT,
  nmProfessor VARCHAR(100) NOT NULL ,
  emailProfessor VARCHAR(100) NOT NULL,
  cpfProfessor VARCHAR(14) NOT NULL,
  telProfessor VARCHAR(15) NOT NULL,
  formacaoProfessor VARCHAR(50) NOT NULL,
  endProfessor VARCHAR(200) NOT NULL,
  discProfessor VARCHAR(100) NOT NULL,
  senhaProfessor VARCHAR(8) NOT NULL,
  PRIMARY KEY (`idProfessores`));
