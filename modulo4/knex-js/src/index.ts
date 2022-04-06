import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import knex from 'knex';
import dotenv from "dotenv";

const app: Express = express();

app.use(express.json());
app.use(cors());
dotenv.config();

export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    }
});

//Exercício 1.

const findActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result;
};

const findActorByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT COUNT(*)FROM Actor WHERE gender = "${gender}"
    `)
    const count = result[0][0].count
    return count
};

//Exercício 2.

const updateSalary = async (salaryToChange: number, id: string): Promise<any> => {
    await connection("Actor").update({
        salary: salaryToChange

    }).where({ id: id })
};

const deleteActor = async (id: string): Promise<any> => {
    await connection("Actor").delete().where({ id: id })
};

const salaryByGender = async (gender: string): Promise<any> => {
    const result = await connection("Actor").avg("salary as average").where({ gender: gender })
    return result[0].average
};

// Exercício 3.

app.get("/actor/:id", async (req: Request, res: Response): Promise<any> => {
    try {
        const id = req.params.id
        const actor = await connection("Actor").where({ id: id });
        res.status(200).send(actor)

    } catch (error: any) {
        res.status(400).send(error.message)
    }
});

app.get("/actor", async (req: Request, res: Response): Promise<any> => {
    try {
        const gender = req.query.gender
        const countGender = await connection("Actor").count().where({ gender: gender });
        res.status(200).send({ quantity: countGender });

    } catch (error: any) {
        res.status(400).send(error.message)
    }
});

// Exercício 4.

const createActor = async (id: string, name: string, salary: number, dateOfBirth: Date,gender: string ): Promise<void> => {
    await connection("Actor")
      .insert({
        id: id,
        name: name,
        salary: salary,
        birth_date: dateOfBirth,
        gender: gender,
      });
  };


app.post("/actor", async (req: Request, res: Response): Promise<any> => {
    try {
        await createActor(
            req.body.id,
            req.body.name,
            req.body.salary,
            new Date(req.body.dateOfBirth),
            req.body.gender
          );

        res.status(200).send("Ator criado com sucesso!");

    } catch (error: any) {
        res.status(400).send(error.message)
    }
});

app.put("/actor", async (req: Request, res: Response): Promise<any> => {
    try {
        const {salary, id} = req.body
        await connection("Actor").update({
            id,
            salary
        }).where({id: id})

        res.status(200).send("Salário modificado com sucesso!")

    } catch (error: any) {
        res.status(400).send(error.message)
    }
});

app.delete("/actor/:id", async (req: Request, res: Response): Promise<any> => {
    try {
        const id = req.params.id
        await connection("Actor").delete().where({id: id});

        res.status(200).send("Usuário deletado com sucesso!");
    } catch (error: any) {
        res.status(400).send(error.message)
    }
});

// Exercício 5.

const createMovie = async (id: string, title: string, synopsis: string, releaseDate: Date, rating: number, limitDate: Date): Promise<any> => {
    await connection("Movie").insert({
        id: id,
        title: title,
        synopsis: synopsis,
        release_date: releaseDate,
        rating: rating,
        playing_limit_date: limitDate
    })
};

app.post ("/movie", async (req: Request, res: Response): Promise<any> => {
    try {

        const {id, title, synopsis, releaseDate, rating, limitDate} = req.body

        await createMovie(
            id,
            title,
            synopsis,
            new Date(releaseDate),
            rating,
            new Date(limitDate)
        );

        res.status(201).send("Filme criado com sucesso!");

    } catch (error: any) {
        res.status(400).send(error.message)
    }
});

// Exercício 6.
app.get("/movie", async (req: Request, res: Response): Promise<any> => {
    try {
        const response = await connection("Movie").limit(15)

        res.status(200).send(response)

    } catch (error: any) {
        res.status(400).send(error.message)
    }
});

// Exercício 7.

app.get("/movie/search", async (req: Request, res: Response): Promise<any> => {
    try {
        const movie = req.query.movie

        const movies = await connection("Movie").where('title', 'like', `%${movie}%`).orWhere('synopsis', 'like', `%${movie}%`)
        .orderBy('release_date', 'asc')
        res.status(200).send(movies)

    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

//Server por último
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});