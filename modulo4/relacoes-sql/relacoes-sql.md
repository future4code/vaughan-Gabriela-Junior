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

#### a)
SELECT * FROM Movie
LEFT JOIN Rating
ON Movie.id = Rating.movie_id;

#### b)

SELECT Movie.id, Movie.title, MovieCast.actor_id FROM Movie
RIGHT JOIN MovieCast
ON Movie.id = MovieCast.movie_id;

#### c)

SELECT AVG(Rating.rate) as rating, Movie.id, Movie.title FROM Movie
LEFT JOIN Rating
ON Movie.id = Rating.movie_id
GROUP BY (Movie.id);

### Exercício 5.

#### a)
Precisa de dois joins porque é uma relação M:N.

#### b)
SELECT m.id as MovieID, m.title as MovieTitle, a.id as ActorID, a.name as ActorName FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;

#### c)
SELECT m.id as movie_id, m.title, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;

A vírgula do m,title em vez de m.title deu erro.

#### d)

SELECT Movie.title as MovieTitle, Actor.name as ActorName, Rating.rate as Rate, Rating.comment as RateComment FROM Movie
LEFT JOIN Rating
ON Movie.id = Rating.movie_id
RIGHT JOIN MovieCast
ON Movie.id = MovieCast.movie_id
RIGHT JOIN Actor
ON Actor.id = MovieCast.actor_id;

### Exercício 6.

#### a)
M:N

#### b)
CREATE TABLE Oscar (
	id VARCHAR(255) PRIMARY KEY,
    category VARCHAR(255) NOT NULL
);

INSERT INTO Oscar (id, category)
VALUES 
("001", "Melhor Filme"),
("002", "Melhor Direção"),
("003", "Melhor Roteiro Original"),
("004", "Melhor Roteiro Adaptado"),
("005", "Melhor Fotografia"),
("006", "Melhor Figurino"),
("007", "Melhor Som"),
("008", "Melhor Edição");

CREATE TABLE MovieOscar (
	movie_id VARCHAR(255),
    oscar_id VARCHAR(255),
    winning_date DATE NOT NULL,
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (oscar_id) REFERENCES Oscar(id)
);

#### c)

INSERT INTO MovieOscar (movie_id, oscar_id, winning_date)
VALUES
("333", "003", "2001-02-02"),
("004", "001", "2000-01-01"),
("001", "001", "2000-01-01"),
("001", "002", "2000-01-01"),
("004", "006", "2000-01-01"),
("004", "007", "2000-01-01");

#### d)

SELECT Movie.id as MovieID, Movie.title as MovieTitle, Oscar.category as OscarCategory, MovieOscar.winning_date as WinningDate FROM Movie
RIGHT JOIN MovieOscar
ON Movie.id = MovieOscar.movie_id
LEFT JOIN Oscar
ON Oscar.id = MovieOscar.oscar_id;
