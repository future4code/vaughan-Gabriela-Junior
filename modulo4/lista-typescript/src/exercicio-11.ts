const numerosRomanos: any = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
];

const converterParaRomano = (numero: number): string => {
    if (numero === 0) {
        return '';
    }
    for (let i = 0; i < numerosRomanos.length; i++) {

        if (numero >= numerosRomanos[i][0]) {
            return numerosRomanos[i][1] + converterParaRomano(numero - numerosRomanos[i][0]);
        }
    }
}

console.log(converterParaRomano(1998))