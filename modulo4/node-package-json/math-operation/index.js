// Exercício 2.

const mathOperation = process.argv[2]
const firstNumber = Number(process.argv[3]);
const secondNumber = Number(process.argv[4]);

const returnResult = () => {
    //Desafio
    if (!secondNumber || !mathOperation) {
        return `Coloque a operação e dois números!`
    } else {
        if (mathOperation === "add") {
            const result = firstNumber + secondNumber
            return `Resposta: ${result}`
        } else if (mathOperation === "sub") {
            const result = firstNumber - secondNumber
            return `Resposta: ${result}`
        } else if (mathOperation === "mult") {
            const result = firstNumber * secondNumber
            return `Resposta: ${result}`
        } else if (mathOperation === "div") {
            const result = firstNumber / secondNumber
            return `Resposta: ${result}`
        }
    };
};

console.log('\x1b[31m','Esse texto vai ser vermelho!', returnResult(), '\x1b[0m');