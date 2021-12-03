/*Exercícios de leitura
Exercício 1.

a)10
50

b)Não apareceria nada pois nao foi feita a impressão no console.

Exercício 2.

a) Essa função retorna o texto colocado no prompt todo em letras minúsculas; 
retorna o valor "true" se o texto inserido pelo usuário contém a palavra/string "cenoura", 
e se não tiver retorna o valor "false".

b)true
true
true
*/

//Exercícios de escrita

//Exercício 1.

//a

function informacoesUsuario() {

    const informacao = console.log("Eu sou Gabriela, tenho 25 anos, moro em João Pessoa e sou estudante.")

    return informacao
}

    const mensagemImpressa = informacoesUsuario()
//b)

function informacoes(nome, idade, cidade, profissao) {

    const nomeUsuario = nome;
    const idadeUsuario = idade
    const cidadeUsuario = cidade;
    const profissaoUsuario = profissao;

    const mensagem1 = console.log(`Eu sou ${nomeUsuario}, tenho ${idadeUsuario} anos, moro em ${cidadeUsuario} e sou ${profissaoUsuario}`);

    return mensagem1
}

    const mensagemString = informacoes("Gabriela", 25, "Joao Pessoa", "estudante");

//Exercício 2.

//a)

function somar(n1, n2) {
    soma = n1 + n2

    return soma
}

const somatoria = somar(3, 2)
console.log(somatoria)

//b)

function retornarBoolean(numero1, numero2) {
    boolean = numero1 >= numero2

    return boolean
}

const booleano1 = retornarBoolean(5,8);
const booleano2 = retornarBoolean(8,5);
const booleano3 = retornarBoolean (5,5);

    console.log (booleano1);
    console.log (booleano2);
    console.log (booleano3);

//c

function retornarPar (numero) {
    divisao = numero % 2
    numeroPar = divisao === 0

    return numeroPar
}

const n1 = retornarPar(2);
const n2 = retornarPar(3);
const n3 = retornarPar(890);

    console.log(n1);
    console.log(n2);
    console.log(n3);

//d

function retornarMensagem (mensagem) {

    mensagemEmMinusculo = mensagem.toUpperCase()
    tamanhoMensagem = mensagem.length

    imprimirMensagem = console.log(mensagemEmMinusculo, tamanhoMensagem);

    return imprimirMensagem;
    
}

const funcaoMensagem = retornarMensagem("TesteTesteAaA");


//Exercício 3.

function somar(primeiroNumero, segundoNumero) {

    soma = Number(primeiroNumero) + Number(segundoNumero);

    return soma
}

function subtrair(primeiroNumero, segundoNumero){

    subtracao = Number(primeiroNumero) - Number(segundoNumero);

    return subtracao
}

function multiplicar (primeiroNumero, segundoNumero) {

    multiplicacao = primeiroNumero * segundoNumero;

    return multiplicacao;
}

function dividir (primeiroNumero, segundoNumero) {

    divisao = primeiroNumero / segundoNumero;

    return divisao;
}

const numeroUsuario1 = prompt("Insira um número");
const numeroUsuario2 = prompt("Insira outro número");

const numerosInseridos = `Números inseridos: ${numeroUsuario1} e ${numeroUsuario2}`;
const numerosSomados = `Soma: ${somar(numeroUsuario1, numeroUsuario2)}`;
const numerosSubtraidos = `Diferença: ${subtrair(numeroUsuario1, numeroUsuario2)}`;
const numerosMultiplicados = `Multiplicação: ${multiplicar(numeroUsuario1, numeroUsuario2)}`;
const numerosDivididos = `Divisão: ${dividir(numeroUsuario1, numeroUsuario2)}`;

    console.log(numerosInseridos);
    console.log(numerosSomados);
    console.log(numerosSubtraidos);
    console.log(numerosMultiplicados);
    console.log(numerosDivididos);