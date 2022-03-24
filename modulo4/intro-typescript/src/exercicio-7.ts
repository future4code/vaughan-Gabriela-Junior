const returnRNA = (string: string): string => {
    let dnaToRna: string[] = []
    for (let i: number = 0; i < string.length; i++) {
        if (string[i] == "A") {
            dnaToRna.push("U")
        } else if (string[i] == "T") {
            dnaToRna.push("A")
        } else if (string[i] == "C") {
            dnaToRna.push("G")
        } else if (string[i] == "G") {
            dnaToRna.push("C")
        }
    }
    return dnaToRna.join("");
}

console.log(returnRNA("ATTGCTGCGCATTAACGACGCGTA"))