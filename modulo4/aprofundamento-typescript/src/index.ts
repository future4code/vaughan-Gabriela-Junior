//Exercício 1

//a) Aparece que não é possível colocar um número em uma variavel tipada como string.
// const minhaString: string = 3


//b) É possível fazer um union type e tipar a variável como string e número. 
// const meuNumero: number | string = "lala"

// c)

const novoObjeto: {nome: string, idade: number, corFavorita: string} = {
    nome: "juninho",
    idade: 3,
    corFavorita: "roxo"
};

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
};

const primeiroObjeto: Pessoa = {
    nome: "Julinha",
    idade: 4,
    corFavorita: "azul"
};

const segundoObjeto: Pessoa = {
    nome: "jorginho",
    idade: 5,
    corFavorita: "vermelho"
};

const terceiroObjeto: Pessoa = {
    nome: "joaninha",
    idade: 6,
    corFavorita: "preto"
};

// d)

enum CoresArcoIris {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
};

const quartaPessoa: Pessoa = {
    nome: "joaozinho",
    idade: 7,
    corFavorita: CoresArcoIris.AMARELO
};

console.table(quartaPessoa)