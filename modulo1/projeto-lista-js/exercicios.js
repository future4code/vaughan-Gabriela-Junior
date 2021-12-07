// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {

  alturaRetangulo = prompt("Digite a altura de um retângulo");
  larguraRetangulo = prompt("Digite a largura de um retângulo");

  areaRetangulo = Number(alturaRetangulo) * Number(larguraRetangulo);

  console.log(areaRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {

  anoAtual = prompt("Digite o ano atual");
  anoDeNascimento = prompt("Digite o ano de nascimento");
  idade = Number(anoAtual) - Number(anoDeNascimento);
  
  console.log(idade);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
 
  imc = peso / (altura * altura)

  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
 
  nome = prompt("Qual seu nome?");
  idade = prompt("Qual sua idade?");
  email = prompt("Qual seu email?");

  mensagem = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`

  console.log(mensagem);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  
  corFavorita1 = prompt("Digite aqui uma de suas cores favoritas");
  corFavorita2 = prompt("Digite outra cor favorita");
  corFavorita3 = prompt("Digite mais uma cor favorita");

  coresFavoritas = [corFavorita1, corFavorita2, corFavorita3];

  console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {

  stringMinuscula = string.toUpperCase()

  return stringMinuscula;
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
 
  valorIngresso >= custo
  ingressosVendidos = custo / valorIngresso

  return ingressosVendidos;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {

  tamanhoString1 = string1.length;
  tamanhoString2 = string2.length;

  mesmoTamanhoStrings = tamanhoString1 === tamanhoString2

  return mesmoTamanhoStrings
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
 
  primeiroElemento = array[0]

  return primeiroElemento;
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  
  ultimoElemento = array.pop();

  return ultimoElemento;
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
 
  primeiroElemento = array[0];
  ultimoElemento = array[array.length -1];
  
  
  array[array.length -1] = array[0]
  array[0] = ultimoElemento

  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  
  stringMinuscula1 = string1.toLowerCase();
  stringMinuscula2 = string2.toLowerCase();

  igualdadeStrings = stringMinuscula1 === stringMinuscula2;

  return igualdadeStrings;
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
 
  anoAtual = prompt("Em que ano estamos?");
  anoNascimento = prompt("Digite a data de nascimento");
  anoRgEmitido = prompt("Digite a data de emissão da carteira de identidade");

  idade = Number(anoAtual) - Number(anoNascimento);

  idadeRg = Number(anoAtual) - Number(anoRgEmitido);

  menorDe20 = idade <= 20;
  entre20E50 = idade > 20 && idade <= 50;
  maiorDe50 = idade > 50;
  
  renovarRg1 = menorDe20 && (idadeRg >= 5);
  renovarRg2 = entre20E50 && (idadeRg >= 10);
  renovarRg3 = maiorDe50 && (idadeRg >= 15);

  console.log(renovarRg1 || renovarRg2 || renovarRg3);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  
  
  anoBissexto1 = ano % 400 === 0;
  
  anoBissexto2 = ano % 4 === 0; 
  
  anoNaoBissexto = ano % 100 !== 0;

  
  return anoBissexto1 || (anoBissexto2 && anoNaoBissexto)
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {

  maiorDeIdade = prompt("Você tem mais de 18 anos? sim ou nao");
  ensinoMedio = prompt("Você possui ensino médio completo? sim ou nao");
  disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso? sim ou nao")

  maiorDeIdadeCorreto = maiorDeIdade === "sim";
  ensinoMedioCorreto = ensinoMedio === "sim";
  disponibilidadeCorreto = disponibilidade === "sim";

  estudanteLabenu = maiorDeIdadeCorreto && ensinoMedioCorreto && disponibilidadeCorreto;

  console.log(estudanteLabenu);
}
