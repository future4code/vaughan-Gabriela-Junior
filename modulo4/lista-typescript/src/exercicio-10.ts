// cpf = 11 digitos = XXX.XXX.XXX-XX
// oito primeiros digitos = XXX.XXX.XX => número base
// nono digito = X => regiao fiscal
// penultimo digito = -X => digito verificador modulo 11 dos nove digitos anteriores
// ultimo digito = X => modulo 11 dos dez digitos anteriores

// PRIMEIRO DV
// primeiros 9 digitos vezes 10 a 2 (decrescente)
//105581439 => 1 x 10 = 10, 0 x 9 = 0, 5 x 8 = 40, 5 x 7 = 35, 8 x 6 = 48, 1 x 5 = 5, 4 x 4 = 16, 3 x 3 = 9, 9 x 2 = 18
// => soma de todos os resultados dividido por 11 => 181 % 11 = 5. se 10 ou maior => dv = 0
// subtrair o resultado de 11 = 11 - 5 = 6.
//105.581.439-6

//SEGUNDO DV
// primeiros 10 digitos vezes 11 a 2 (decrescente)
//1055814396 => 1 x 11 = 11, 0 x 10 = 0, 5 x 9 = 45, 5 x 8 = 40, 8 x 7 = 56, 1 x 6 = 6, 4 x 5 = 20, 3 x 4 = 12, 9 x 3 = 18, 6 x 2 = 12.
// => soma de todos os resultados dividido por 11 => 


console.log(181 % 11)