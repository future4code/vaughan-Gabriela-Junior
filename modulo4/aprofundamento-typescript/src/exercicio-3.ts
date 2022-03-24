//Exercício 3.
//a)

type Posts = {
    autor: string
    texto: string
}[];

const posts: Posts = [
    {
        autor: "Frank-N-Furter",
        texto: "I'm just a sweet transvestite from Transexual, Transylvania"
    },
    {
        autor: "Riff Raff",
        texto: "With a bit of a mind flip, you're there in the time slip"
    },
    {
        autor: "Magenta",
        texto: "It's so dreamy, oh fantasy free me so you can't see me, no, not at all"
    },
    {
        autor: "Columbia",
        texto: "He shook me up, he took me by surprise, he had a pickup truck and the devil's eyes."
    },
    {
        autor: "Janet Weiss",
        texto: "Now all I want to know is how to go, I've tasted blood and I want more"
    }
];

console.table(posts)

//b) As estrandas são do type Posts e string, e a saída retorna Posts.

function buscarPostsPorAutor(posts: Posts, autorInformado: string): Posts {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }

console.table(buscarPostsPorAutor(posts, "Columbia"));