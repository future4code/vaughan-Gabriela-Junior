const returnOperation = (num1: number, num2: number): void => {
    const sum: number = num1 + num2
    const sub: number = num1 - num2
    const mult: number = num1 * num2
    let highestNumber: number
    if (num1 > num2) {
        highestNumber = num1
    } else if (num2 > num1) {
        highestNumber = num2
    } else {
        highestNumber = num1
    }

    console.log(sum)
    console.log(sub)
    console.log(mult)
    console.log(highestNumber)
}

returnOperation(10, 5)