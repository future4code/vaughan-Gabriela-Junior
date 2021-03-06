### Exercício 1.

#### a)
ALTER TABLE Actor DROP COLUMN salary; deletaria a coluna de salário da tabela de Atores.

#### b)
ALTER TABLE Actor CHANGE gender sex VARCHAR(6); mudaria o nome da coluna "gender" para "sex"

#### c)
ALTER TABLE Actor CHANGE gender gender VARCHAR(255); mudaria a coluna gender para poder ter até 255 caracteres em vez de apenas 6.

#### d)
ALTER TABLE Actor 
CHANGE gender gender VARCHAR(100);

### Exercício 2.

#### a)
UPDATE Actor
SET name = "Montenegro Fernada"
WHERE id = "003";


#### b)
UPDATE Actor
SET name = "JULIANA PAES"
WHERE id = "005";

UPDATE Actor
SET name = "Juliana Paes"
WHERE id = "005";

#### c)
UPDATE Actor
SET name = "Paes Juliana",
birth_date = "1980-01-01",
salary = 300000,
gender = "male"
WHERE id = "005";

#### d)
Aparece como 0 rows afetadas quando o id é inexistente.


### Exercício 3.

#### a)
DELETE FROM Actor
WHERE name = "Fernanda Montenegro";

#### b)
DELETE FROM Actor
WHERE gender = "male" AND salary > 1000000

### Exercício 4.

#### a)
SELECT MAX(salary) FROM Actor;

#### b)
SELECT MIN(salary) FROM Actor
WHERE gender = "female";

#### c)
SELECT COUNT(*) FROM Actor
WHERE gender = "female";

#### d)
SELECT SUM(salary) FROM Actor;


### Exercício 5.

#### a)
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

Essa query faz a conta de quantos atores e atrizes têm separando pro grupos de gênero.

#### b)
SELECT id, name FROM Actor
ORDER BY name DESC;

#### c)
SELECT * FROM Actor
ORDER BY salary ASC;

#### d)
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

#### e)
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

### Exercício 6.

#### a)
ALTER TABLE Movie
ADD COLUMN playing_limit_date DATE;

#### b)
ALTER TABLE Movie
CHANGE rating rating FLOAT NOT NULL;

#### c)
UPDATE Movie
SET playing_limit_date = "2022-05-02"
WHERE id = "001";

UPDATE Movie
SET playing_limit_date = "2020-05-02"
WHERE id = "002";

#### d)
DELETE FROM Movie
WHERE id = "002";

UPDATE Movie
SET synopsis = "Testando sinpse"
WHERE id="002";

Apareceu que afetou 0 rows pois o id foi deletado.

## Desafios
### Exercício 7.
#### a)
SELECT * FROM Movie
WHERE rating > 7.5;

#### b)
SELECT AVG(rating) FROM Movie;

#### c)
SELECT COUNT(*) FROM Movie
WHERE playing_limit_date > CURDATE();

#### d)
SELECT COUNT(*) FROM Movie
WHERE release_date > CURDATE();

#### e)
SELECT MAX(rating) FROM Movie;

#### f)
SELECT MIN(rating) FROM Movie;


### Exercício 8.

#### a)
SELECT * FROM Movie
ORDER BY title ASC;

#### b)
SELECT * FROM Movie
ORDER BY title DESC
LIMIT 5;

#### c)
SELECT * FROM Movie
WHERE release_date < CURDATE()
ORDER BY release_date DESC
LIMIT 3;

#### d)
SELECT * FROM Movie
ORDER BY rating DESC
LIMIT 3;