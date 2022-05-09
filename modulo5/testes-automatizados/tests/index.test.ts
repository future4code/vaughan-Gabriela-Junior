import { ableToPurchase, User } from "../src";

test("Teste usuário com saldo maior do que o valor de compra", () => {
    const user: User = {
        name: "Joana",
        balance: 150
    }

    const result = ableToPurchase(user, 100)

    expect(result).toEqual({
        name: "Joana",
        balance: 50
    })
})

test("Teste usuário saldo igual ao valor de compra", () => {
    const user: User = {
        name: "João",
        balance: 100
    }

    const result = ableToPurchase(user, 100)

    expect(result).toEqual({
        name: "João",
        balance: 0
    })
});

test("Teste usuário saldo menor que o valor de compra", () => {
    const user: User = {
        name: "Hermenegildo",
        balance: 90
    }

    const result = ableToPurchase(user, 100)

    expect(result).not.toBeDefined()
})