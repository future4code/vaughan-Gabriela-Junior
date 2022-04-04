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

### c)
Código do erro: 1136. Quantidade de colunas não corresponde à quantidade da linha 1.
O erro aconteceu porque faltou os valores de data de nascimento e gênero logo depois do INSER INTO Actor.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

### d)
Código do erro: 1364. Campo 'nome' não tem um valor.
O erro ocorreu pois faltou o campo do nome que é NOT NULL.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

### e)
Código do erro: 1292. Valor de data incorreto.
Ocorreu pois está sem aspas a data.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

### f)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Marjorie Estiano",
  8000000,
  "1982-05-08", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Rodrigo Santoro",
  380000,
  "1975-08-22", 
  "male"
);

### Exercício 3.

#### a)
SELECT * FROM Actor
WHERE gender = "female";

#### b)
SELECT salary FROM Actor
WHERE name = "Tony Ramos";

#### c)
O resultado veio todo NULL pois não tem atores ou atrizes sem gênero, já que na criação foi colocado o valor gênero como NOT NULL.

#### d)
SELECT id, name, salary FROM Actor
WHERE salary <= 500000;

#### e)
Erro código: 1054. 'nome' não foi encontrado no campo da lista.
Deu erro pois 'nome' não existe na tabela, está como "name".

SELECT id, name from Actor 
WHERE id = "002";