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

#### b)
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"333",
    "010"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"001",
    "001"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"001",
    "002"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"003",
    "004"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "006"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"333",
    "007"
);

####  c) 
Não é possível criar uma relação de um ator com um filme inexistente.

####  d)
DELETE FROM Actor
WHERE id = "010";
Não é possível deletar um item de uma tabela que está atrelado a outro item de outra tabela relacionada.

### Exercício 3.

#### a)
Selecione tudo da tabela do filme em conjunto com a tabela Rating em que o movie.id seja igual o rating.movie_id.

#### b)
SELECT title, Movie.id, rate FROM Movie
INNER JOIN Rating
ON Movie.id = Rating.movie_id;


### Exercício 4.

### Exercício 5.

### Exercício 6.