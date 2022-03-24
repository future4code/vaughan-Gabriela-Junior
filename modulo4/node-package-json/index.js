// Exercício 1.
//a) Acessamos através do process.argv[index].

//b)

const nameUser = process.argv[2];
const age = process.argv[3];

// console.log(`Olá, ${nameUser}! Você tem ${age} anos.`);

//c)

const ageInNumber = Number(process.argv[3]);
const addSeven = ageInNumber + 7

// console.log(`Olá, ${nameUser}! Você tem ${ageInNumber} anos. Em sete anos você terá ${addSeven}.`);

// Exercício 2.

const mathOperation = process.argv[2]
const firstNumber = Number(process.argv[3]);
const secondNumber=  Number(process.argv[4]);

const returnResult = () => {
    if (mathOperation === "add") {
        const result = firstNumber + secondNumber
        return result
    } else if (mathOperation === "sub") {
        const result = firstNumber - secondNumber
        return result
    } else if (mathOperation === "mult") {
        const result = firstNumber * secondNumber
        return result
    } else if (mathOperation === "div") {
        const result = firstNumber / secondNumber
        return result
    }
};

// console.log(`Resposta: ${returnResult()}`);

// Exercício 3.

const toDoList = [
    "Cozinhar",
]

const toDo = process.argv[2];

toDoList.push(toDo);

console.log(toDoList);
