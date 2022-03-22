// Exercício 3.

const toDoList = []

const toDo = process.argv[2];

toDoList.push(toDo);

console.log(toDoList);

//Desafio
const fs = require('fs');

fs.appendFile('data.txt', `${String(toDoList)}, `, function(err) {
    if (err) {
        return console.error(err);
    };
});