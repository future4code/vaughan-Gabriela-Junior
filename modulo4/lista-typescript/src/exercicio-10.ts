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
// => soma de todos os resultados dividido por 11 => 220 % 11 = 10. 11-10 = 1


const cpf = "xxx.xxx.xxx-xx"

const verificarCPF = (cpf: string): any => {
    cpf = cpf.replace(".", "").replace(".", "").replace("-", "");

    if (cpf === "00000000000" || cpf === "11111111111" || cpf === "22222222222" || cpf === "33333333333" || cpf === "44444444444" ||
        cpf === "55555555555" || cpf === "66666666666" || cpf === "77777777777" || cpf === "88888888888" || cpf === "99999999999") {
        return false
    };

    let multiplicadorPrimeiroDV: number = 0;
    let divisorDe11: number = 0;

    for (let i = 1; i <= 9; i++) {
        multiplicadorPrimeiroDV = multiplicadorPrimeiroDV + Number(cpf.substring(i - 1, i)) * (11 - i)
        divisorDe11 = (multiplicadorPrimeiroDV * 10) % 11
    }

    if ((divisorDe11 == 10) || (divisorDe11 == 11)) {
        divisorDe11 = 0
    }
    if (divisorDe11 != Number(cpf.substring(9, 10))) {
        return false
    }

    let multiplicadorSegundoDV: number = 0;
    let divisorSegundoDV: number = 0

    for (let i = 1; i <= 10; i++) {
        multiplicadorSegundoDV = multiplicadorSegundoDV + Number(cpf.substring(i - 1, i)) * (12 - i);
        divisorSegundoDV = (multiplicadorSegundoDV * 10) % 11
    }

    if ((divisorSegundoDV == 10) || (divisorSegundoDV == 11)) {
        divisorSegundoDV = 0
    };
    if (divisorSegundoDV != Number(cpf.substring(10, 11))) {
        return false
    };

    return true;
}

console.log(verificarCPF("000.000.000-00"))
console.log(verificarCPF("111.111.111-11"))
console.log(verificarCPF("123.321.876-23"))
console.log(verificarCPF("123.321.876-00"))