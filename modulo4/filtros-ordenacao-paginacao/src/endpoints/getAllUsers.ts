import { Request, Response } from "express";
import { connection } from "../app";

//Exercício 1.

//a)

export const findUserByName = async (name: string): Promise<any> => {
    const result = await connection("aula48_exercicio").where("name", "like", `%${name}%`)
    return result
};

export const getAllUsersByName = async (req: Request, res: Response): Promise<void> => {
    try {
        const name = req.query.name as string
        const users = await findUserByName(name)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send(users)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
};

//b)

export const findUserByType = async (type: string): Promise<any> => {
    const result = await connection("aula48_exercicio").where("type", "=", type)
    return result
};

export const getAllUsersByType = async (req: Request, res: Response): Promise<void> => {
    try {
        const type = req.params.type as string
        const users = await findUserByType(type)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send(users)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
};

//Exercicio 2.

export const sortUser = async (sort: string): Promise<any> => {
    if (sort === '') {
        sort = 'email'
    }
    const result = await connection("aula48_exercicio")
        .orderBy(sort, 'asc')

    return result
};

export const getAllUsersSorted = async (req: Request, res: Response): Promise<void> => {
    try {
        let sort = req.query.sort as string
        const users = await sortUser(sort)



        if (!users.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }



        res.status(200).send(users)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
};

// Exercício 3.

export const userPage = async (page: number): Promise<any> => {
    let size = 5
    let offset = size * (page - 1)

    const result = await connection("aula48_exercicio")
        .limit(size)
        .offset(offset)

    return result
};

export const getAllUsersByPage = async (req: Request, res: Response): Promise<void> => {
    try {
        let page = Number(req.query.page)
        const users = await userPage(page)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send(users)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
};

// Exercício 4.

export const selectUsers = async (page: number, sort: string, name: string, type: string): Promise<any> => {
    let size = 5
    let order = 'asc';
    let result
    let offset = size * (page - 1)

    if (sort === '' || !sort) {
        sort = 'name'
        order = 'desc'
    };

    if (!type) {
        type = ""
    };

    if (!name) {
        name = ""
    };

    if (!name && !type) {
        result = await connection("aula48_exercicio")
            .orderBy(sort, order)
            .limit(size)
            .offset(offset)

    } else {
        result = await connection("aula48_exercicio")
            .select("*")
            .where("name", name)
            .orWhere("type", type)
            .orderBy(sort, order)
            .limit(size)
            .offset(offset)
    };

    return result
};

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        let sort = req.query.sort as string
        const name = req.query.name as string
        const type = req.query.type as string
        let page = Number(req.query.page)

        const users = await selectUsers(page, sort, name, type)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send(users)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
};