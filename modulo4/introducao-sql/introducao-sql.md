### Exercício 1.

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;
SHOW TABLES;

DESCRIBE Actor;


#### a)
VARCHAR seria o formato 'string', para escrever e o número entre parênteses (255) ou (6) é o máximo de caracteres que podem ter.
DATE é para criar no formato de data.
PRIMARY KEY seria o id, um valor único para cada usuário da tabela.
NOT NULL significa que o valor não pode ficar em branco.

#### b)
SHOW DATABASES mostrou a lista dos bancos de dados. SHOW TABLES mostrou a lista de tabelas.

#### c)
DESCRIBE Actor mostra detalhes sobre a tabela Actor.

### Exercício 2.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

#### a)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Gloria Pires",
  1200000,
  "1963-08-23", 
  "female"
);

### b)
Código do erro: 1062. Entrada '002' duplicada para a chave 'PRIMÁRIA'.
O erro aconteceu porque a PRIMARY KEY tem que ser única.