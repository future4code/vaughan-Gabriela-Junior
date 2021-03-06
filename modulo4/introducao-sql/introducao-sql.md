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

### Exercício 4.

#### a)
A query mostra (SELECT) da tabela Actor (FROM Actor) onde tem nome que começa com A ou com J (WHERE (name LIKE "A%" OR name LIKE "J%")) e que tenha o salário
maior que 300 000 (AND salary > 300000).

#### b)
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

#### c)
SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

#### d)
SELECT * FROM Actor
WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%") 
AND salary BETWEEN 350000 AND 900000;

### Exercício 5.

#### a)
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
	name VARCHAR(255) NOT NULL, 
	synopsis TEXT NOT NULL, 
	release_date DATE NOT NULL,
	rating INT NOT NULL
);

#### b)
INSERT INTO Movie (id, name, synopsis, release_date, rating)
VALUES (
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);

#### c)
INSERT INTO Movie (id, name, synopsis, release_date, rating)
VALUES (
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2021-12-27",
    10
);


#### d)
INSERT INTO Movie (id, name, synopsis, release_date, rating)
VALUES (
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);

#### e)
INSERT INTO Movie (id, name, synopsis, release_date, rating)
VALUES (
	"004",
    "2 Coelhos",
    "Preso entre a criminalidade e o poder público corrupto, Edgar está cansado dessa vida e planeja fazer justiça com as próprias mãos. Ele executa um plano que coloca criminosos e corruptos em rota de colisão.",
    "2012-01-20",
    7
);

### Exercício 6.

#### a)
SELECT id, name, rating FROM Movie
WHERE id = "001";

#### b)
SELECT * FROM Movie
WHERE name = "2 Coelhos";

#### c)
SELECT id, name, synopsis FROM Movie
WHERE rating >= 7;

### Exercício 7.

#### a)
SELECT * FROM Movie
WHERE name LIKE "%vida%";

#### b)
SELECT * FROM Movie
WHERE name LIKE "%TERMO DE BUSCA%" 
OR synopsis LIKE "%TERMO DE BUSCA%";

#### c)
SELECT * FROM Movie
WHERE release_date < "2020-05-04";

#### d)
SELECT * FROM Movie
WHERE release_date < "2020-05-04" 
AND (name LIKE "%TERMO DE BUSCA%" OR synopsis LIKE "%TERMO DE BUSCA%") 
AND rating > 7;