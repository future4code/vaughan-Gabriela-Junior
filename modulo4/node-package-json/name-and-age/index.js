// Exercício 1.
//a) Acessamos através do process.argv[index].

//b)

const nameUser = process.argv[2];
const age = process.argv[3];


// console.log(`Olá, ${nameUser}! Você tem ${age} anos.`);

//c)

const ageInNumber = Number(process.argv[3]);
const addSeven = ageInNumber + 7;

// console.log(`Olá, ${nameUser}! Você tem ${ageInNumber} anos. Em sete anos você terá ${addSeven}.`);

//Desafio

const returnNameAndAge = () => {
    if (nameUser === undefined || age === undefined || ageInNumber === undefined) {
        return `Coloque seu nome e sua idade!`
    } else {
        return `Olá, ${nameUser}! Você tem ${age} anos.
Olá, ${nameUser}! Você tem ${ageInNumber} anos. Em sete anos você terá ${addSeven}.`
    };
};

console.log("\x1b[35m",'Esse texto vai ser magenta!', returnNameAndAge(), '\x1b[0m');