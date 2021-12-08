/*Exercícios de interpretação

//Exercício 1.

a) Matheus Nachtergaele
Virginia Cavendish
canal: "Globo", horário: 14h

Exercício 2.

a) nome: "Juca", idade: 3, raca: "SRD"

nome: "Juba", idade: 3, raca: "SRD"

nome: "Jubo", idade: 3, raca: "SRD"

b) A sintaxe dos três pontos antes do nome de um objeto faz uma "cópia" do objeto referenciado.

Exercício 3.

a) false
undefined

b) Apareceu "false" pois é o valor dado à propriedade "backender" dentro do objeto "pessoa".
Apareceu undefined no console porque não existe a propriedade "altura" dentro do objeto "pessoa".
*/

//Exercícios de escrita

//Exercício 1.
//a)

const pessoa = {
    nome: "Gabriela",
    apelidos: ["Gabi", "Hermenegabi", "Biela"]
}

function mensagemPessoa (pessoa) {
    mensagemApelidos = `${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`
    mensagem = console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${mensagemApelidos}.`)

    return mensagem
}

mensagemPessoa(pessoa)

//b)

const novosApelidos = {
    ...pessoa,
    apelidos: ["gabizinha", "juninho", "cabrita"]
}

mensagemPessoa(novosApelidos)

//Exercício 2.

// a)
const primeiraPessoa = {
    nome: "Gabriela",
    idade: 25,
    profissão: "pesquisadora"
}

const segundaPessoa = {
    nome: "Natália",
    idade: 23,
    profissão: "estudante"
}

//b

function informacoesPessoas (primeiraPessoa, segundaPessoa) {

    primeiroArray = [primeiraPessoa.nome,
        primeiraPessoa.nome.length,
        primeiraPessoa.idade,
        primeiraPessoa.profissão,
        primeiraPessoa.profissão.length]

    segundoArray = [segundaPessoa.nome,
        segundaPessoa.nome.length,
        segundaPessoa.idade,
        segundaPessoa.profissão,
        segundaPessoa.profissão.length]

    return console.log(primeiroArray, segundoArray)
}

informacoesPessoas(primeiraPessoa, segundaPessoa)

//Exercício 3.

//a)
const carrinho = []

//b)
const primeiraFruta = {
    nome: "banana",
    disponibilidade: true
}

const segundaFruta = {
    nome: "maçã",
    disponibilidade: true
}

const terceiraFruta = {
    nome: "manga",
    disponibilidade: true
}

//c)

function colocarFrutaNoCarrinho (fruta) {
    carrinho.push(fruta);

    return carrinho
}

colocarFrutaNoCarrinho(primeiraFruta);
colocarFrutaNoCarrinho(segundaFruta);
colocarFrutaNoCarrinho(terceiraFruta);

console.log(carrinho);

//Desafios

//1.

function informacoesUsuario() {

    pergunta1 = prompt("Qual seu nome?");
    pergunta2 = prompt("Qual sua idade?");
    pergunta3 = prompt("Qual sua profissão?");

    usuario = {
        nome: pergunta1,
        idade: pergunta2,
        profissao: pergunta3
    
    }

    console.log(usuario)
}

informacoesUsuario()

//2.

const primeiroFilme = {
    nome: "Rocky Horror Picture Show",
    anoDeLançamento: 1975
}

const segundoFilme = {
    nome: "Moulin Rouge",
    anoDeLançamento: 2001
}

function calcularLancamentoFilmes (filme1, filme2) {
    
    subtracaoFilme = filme1.anoDeLançamento - filme2.anoDeLançamento

    subtracao = subtracaoFilme < 0
    igualdade = filme1.anoDeLançamento === filme2.anoDeLançamento

    mensagem = `O primeiro filme foi lançado antes do segundo? ${subtracao}
O primeiro filme foi lançado no mesmo ano do segundo? ${igualdade}.`

        return mensagem
}

console.log(calcularLancamentoFilmes(primeiroFilme, segundoFilme));

//3.

function controleDeEstoque (fruta) {

    fruta.disponibilidade = !fruta.disponibilidade

    return fruta
}

console.log(controleDeEstoque(primeiraFruta));
console.log(primeiraFruta);