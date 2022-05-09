//Exercício 1.

//a)

interface User {
    name: string
    balance: number
};

//b)

const ableToPurchase = (user: User, value: number): User | undefined => {
    if (user.balance >= value) {
        return {
            name: user.name,
            balance: user.balance - value
        }
    }
    return undefined
};