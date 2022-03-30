//Exercício 2.
type User = {
    id: number | string,
    name: string,
    phone: number,
    email: string,
    website: string,
}[];

//Exercício 3.
export const users: User = [{
    id: 1,
    name: "Teste",
    phone: 31,
    email: "testando@testando.com",
    website: "testando.com",
},
{
    id: 2,
    name: "BMO",
    phone: 233455,
    email: "bmo@bmo.com",
    website: "bmo.com"
},
{
    id: 3,
    name: "Marceline",
    phone: 6666666,
    email: "marceline@marceline.com",
    website: "marceline.com"
}];

//Exercício 5.
type Post = {
    userId: number | string,
    id: number | string,
    title: string,
    body: string,
}[];

//Exercício 6.
// Achei melhor criar fora do array de usuários só pra teste, mas acho que seria melhor dentro dos usuários pra já estar linkado com o usuário.
export const posts: Post = [{
    userId: 3,
    id: 1,
    title: "Por que comer morangos faz bem",
    body: "Porque é vermelho"
},
{
    userId: 1,
    id: 2,
    title: "Testando",
    body: "Testany!"
},
{
    userId: 2,
    id: 3,
    title: "Lalalalaal",
    body: "Turururru"
},
{
    userId: 3,
    id: 4,
    title: "AAaaaaaa",
    body: "Ihaaaa"
}];