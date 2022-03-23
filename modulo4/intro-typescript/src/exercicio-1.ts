// function checaTriangulo(a, b, c) {
//     if (a !== b && b !== c) {
//       return "Escaleno";
//     } else if (a === b && b === c) {
//       return "Equilátero";
//     } else {
//       return "Isósceles";
//     }
//   }

// const primeiroTriangulo: number = process.argv[2]
// const segundoTriangulo: number = process.argv[3]
// const terceiroTriangulo: number = process.argv[4]

function checaTriangulo(a: number, b: number, c: number): string{
    if (a !== b && b !== c) {
        return "Escaleno";
    } else if (a == b && b == c) {
        return "Equilátero";
    } else {
        return "Isósceles";
    };
};

console.log(checaTriangulo(1, 3, 4));