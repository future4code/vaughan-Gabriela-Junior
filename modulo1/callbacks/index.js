/*Exercícios de interpretação.

Exercício 1.

a) Será impresso no console o array inteiro, um por um, com o item (o objeto inteiro, nesse caso: nome e apelido), o index e o array. Ficará:
"nome: Amanda Rangel apelido: Mandi 0 [array inteiro]
nome: Laís Petra apelido: Laura 1 [array inteiro]
nome: Letícia Chijo apelido: Chijo 2 [array inteiro]"

Exercício 2.

a) Será impresso apenas as propriedades "nome" do objeto. Nesse caso, 
"Amanda Rangel, Laís Petra, Letícia Chijo"

Exercício 3.

a) Será impresso todas propriedades do objeto diferentes de Chijo. Ou seja
"nome: Amanda Rangel, apelido: Mandi, 
nome: Laís Petra, apelido: Laura".*/

//Exercícios de escrita.

//Exercício 1.

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ];

 //a)

 const arrayNomesPets = pets.map((item) => {
     return item.nome;
 });

 console.log(arrayNomesPets);

 //b

 const arrayApenasSalsichas = pets.filter((item) => {
     return item.raca === "Salsicha";
 });

 console.log(arrayApenasSalsichas);

 //c

 const filtrarPoodles = pets.filter((item) => {
     return item.raca === "Poodle";
 });

 console.log(filtrarPoodles);

  const mensagemPoodles = filtrarPoodles.map((item) => {
      return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
});

 console.log(mensagemPoodles);

//Exercício 2.

 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ];


//a)

const arrayNomesItens = produtos.map((item) => {
    return item.nome;
});

console.log(arrayNomesItens);

// b) 

const arrayDesconto5 = produtos.map((item) => {
    produtosComNomeEPreco = {
        nome: item.nome,
        preco: item.preco - (item.preco * 0.05)
        }
        
        return produtosComNomeEPreco
});

console.log(arrayDesconto5);

//c)

const arrayBebidas = produtos.filter((item) => {
    return item.categoria === "Bebidas"
});

console.log(arrayBebidas);

//d)

const arrayYpe = produtos.filter((item) => {
    return item.nome.includes("Ypê")
});

console.log(arrayYpe);

//e)

const arrayMensagemYpe = arrayYpe.map((item) => {
    return `Compre ${item.nome} por R$ ${item.preco}.`
});

console.log(arrayMensagemYpe);

//DESAFIOS

//1. 
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ];

//a)

const arrayNomesPokemons = pokemons.map((item) => {
    return item.nome
});

console.log(arrayNomesPokemons.sort());

//b)

const tipoDePokemons = pokemons.map((item) => {
    return item.tipo
});

console.log(tipoDePokemons);

