import { connection } from "./connection";

const printError = (error: any) => {
    console.log(error.sqlMessage || error.message)
};

export const createTables = () => connection
    .raw(
        `
    CREATE TABLE IF NOT EXISTS labecommerce_users (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
         );

    CREATE TABLE IF NOT EXISTS labecommerce_products (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL,
        price FLOAT NOT NULL,
        image_url VARCHAR(255) NOT NULL
    );
    
    `)

    .then(() => { console.log("Tabelas criadas") })
    .catch(printError)

export const closeConnection = () => { connection.destroy() }

createTables()
    .finally(closeConnection)

