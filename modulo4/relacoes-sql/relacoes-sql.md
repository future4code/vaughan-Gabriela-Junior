### Exercício 1.

#### a)
FOREIGN KEY é uma PRIMARY KEY de uma outra tabela.

#### b)

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
	"001",
	"Ótimo filme.",
    8.6,
    "001"
);

#### c)

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
	"002",
	"Ótimo filme.",
    8.6,
    "002"
);
Não dá para adicionar avaliação a um filme não existente.

#### d)

ALTER TABLE Movie
DROP COLUMN rating;

#### e)

DELETE FROM Movie
WHERE id = "001";
Não dá pra deletar uma tabela que tem outra tabela relacionada a ela.

### Exercício 2.

#### a)
A tabela Movie Cast tem um id de filme e id de ator conectando-se com as tabelas de filmes e atores.

### Exercício 3.

#### a)
Selecione tudo da tabela do filme em conjunto com a tabela Rating em que o movie.id seja igual o rating.movie_id.

### Exercício 4.

### Exercício 5.

### Exercício 6.