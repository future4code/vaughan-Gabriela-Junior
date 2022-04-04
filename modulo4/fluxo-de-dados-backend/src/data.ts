//Exercício 2.

export type Product = {
    id: string,
    name: string,
    price: number
}[];

export const products: Product = [
    {
        id: "1",
        name: "Nave Espacial",
        price: 2000
    },
    {
        id: "2",
        name: "Máquina do tempo",
        price: 3000
    },
    {
        id: "3",
        name: "Ônibus espacial",
        price: 50000
    },
    {
        id: "4",
        name: "Caneta",
        price: 1
    },
]