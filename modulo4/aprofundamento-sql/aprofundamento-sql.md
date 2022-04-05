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


## Desafios
### Exercício 7.
### Exercício 8.