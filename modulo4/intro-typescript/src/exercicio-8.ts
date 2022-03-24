const stringInReverse = (string: string): string => {
    return string.split("").reverse().join("")
}

console.log(stringInReverse("gabriela"));
console.log(stringInReverse("hermenegildo"));
console.log(stringInReverse("júnior"));
console.log(stringInReverse("gabriela hermenegildo júnior"));