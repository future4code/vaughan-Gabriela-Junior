import express from "express";
import cors from 'cors';
import { Product, products } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server está rodando na porta 3003");
});

//Exercício 1.
app.get("/test", (req, res) => {
    res.send("Api funcionando!")
});

//Exercício 3.
app.post("/product/create", (req, res) => {
    const newName: string = req.body.name;
    const newPrice: number = req.body.price;

    const newProduct = {
        id: Date.now().toString(),
        name: newName,
        price: Number(newPrice)
    };

    products.push(newProduct)

    res.status(201).send(products);
});

//Exercício 4.
app.get("/products", (req, res) => {
    res.status(200).send(products)
});

// //Exercício 5.
// app.put("/products/change/:id", (req, res) => {
//     const productId = req.params.id
//     const newPrice = req.body.price
//     console.log(productId)
//     const changePrice = products.filter((product) => {
//         return productId === product.id
//     }).map((product) => {
//         return { id: product.id, name: product.name, price: Number(newPrice) };
//     });

//     res.status(200).send(changePrice);
// });

//Exercício 6.
// app.delete("/products/delete/:id", (req, res) => {
//     const productId = req.params.id

//     const deleteProduct = products.filter((product) => {
//         return productId !== product.id
//     });

//     res.status(200).send(deleteProduct);
// });

//Exercício 7.
app.post("/products/new", (req, res) => {
    let newName: string = req.body.name;
    let newPrice: number = req.body.price;

    const newProduct = {
        id: Date.now().toString(),
        name: newName,
        price: newPrice
    };

    try {
        if (!newName || !newPrice) {
            throw new Error("Campo de nome ou preço não preenchido.")
        } else if (typeof newName != 'string') {
            throw new Error("Nome precisa ser uma string.")
        } else if (typeof newPrice != 'number') {
            throw new Error("Preço precisa ser um número.");
        } else if (newPrice <= 0) {
            throw new Error("Preço precisa ser maior que 0")
        } else {
            products.push(newProduct)
            res.status(201).send(products);
        }

    } catch (error: any) {
        switch (error.message) {
            case "Campo de nome ou preço não preenchido.":
                res.status(401).send(error.message)
                break
            case "Nome precisa ser uma string.":
                res.status(422).send(error.message)
                break
            case "Preço precisa ser um número.":
                res.status(422).send(error.message)
                break
            case "Preço precisa ser maior que 0":
                res.status(422).send(error.message)
                break
            default:
                res.status(400).send(error.message)
                break
        }
    }
});

//Exercício 8.
app.put("/products/change/:id", (req, res) => {
    try {
        const productId: string = req.params.id
        const newPrice: number = req.body.price

        let productFound: boolean = false

        for (let i = 0; i < products.length; i++) {
            if (products[i].id === productId) {
                productFound = true
            }
        }
        if (!productFound) {
            throw new Error("Produto não encontrado.")
        }

        const changePrice = products.filter(product => {
            return productId === product.id
        }).map((product) => {
            return { id: product.id, name: product.name, price: Number(newPrice) };
        });

        if (!newPrice) {
            throw new Error("Preço precisa ser inserido.")
        } else if (typeof newPrice !== 'number') {
            throw new Error("Preço precisa ser um número.")
        } else if (newPrice <= 0) {
            throw new Error("Preço precisa ser maior que 0.")
        } else {
            res.status(200).send(changePrice);
        }

    } catch (error: any) {
        switch (error.message) {
            case "Produto não encontrado.":
                res.status(404).send(error.message)
                break
            case "Preço precisa ser inserido.":
                res.status(401).send(error.message)
                break
            case "Preço precisa ser um número.":
                res.status(422).send(error.message)
                break
            case "Preço precisa ser maior que 0.":
                res.status(422).send(error.message)
                break
            default:
                res.status(400).send(error.message)
                break
        }
    }
});

//Exercício 9.
app.delete("/products/delete/:id", (req, res) => {
    try {
        const productId: string = req.params.id

        let productFound: boolean = false
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === productId) {
                productFound = true
            }
        }
        if (!productFound) {
            throw new Error("Produto não encontrado.")
        }

        const deleteProduct = products.filter((product) => {
            return productId !== product.id
        });

        res.status(200).send(deleteProduct);

    } catch (error: any) {
        switch (error.message) {
            case "Produto não encontrado.":
                res.status(404).send(error.message)
                break
            default:
                res.status(400).send(error.message)
        }
    };
});