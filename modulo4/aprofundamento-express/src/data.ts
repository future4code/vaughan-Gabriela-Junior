//Exercício 2.
type ToDo = {
    userId: number | string,
    id: number | string,
    title: string,
    completed: boolean
}[];

//Exercício 3.
export const toDoList: ToDo = [
    {
        userId: 1,
        id: 1,
        title: "Lavar louça",
        completed: false
    },
    {
        userId: 1,
        id: 2,
        title: "Cozinhar",
        completed: true
    },    {
        userId: 1,
        id: 3,
        title: "Limpar a casa",
        completed: true
    },    {
        userId: 2,
        id: 4,
        title: "Limpar o quarto",
        completed: false
    },    {
        userId: 3,
        id: 5,
        title: "Limpar caixa de areia",
        completed: true
    },    {
        userId: 3,
        id: 6,
        title: "Organizar a sala",
        completed: false
    },
]