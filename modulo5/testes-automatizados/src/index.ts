//Exercício 1.

//a)

export interface User {
    name: string
    balance: number
};

//b)

export const ableToPurchase = (user: User, value: number): User | undefined => {
    if (user.balance >= value) {
        return {
            name: user.name,
            balance: user.balance - value
        }
    }
    return undefined
};