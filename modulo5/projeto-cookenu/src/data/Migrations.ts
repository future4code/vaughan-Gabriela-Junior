import { BaseDatabase } from "./BaseDatabase"

export class Migrations extends BaseDatabase {
    static createTables = () => BaseDatabase.connection
    .raw(
        `
        CREATE TABLE IF NOT EXISTS cookenu_users (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL, 
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            role VARCHAR(255) NOT NULL DEFAULT "GUEST"
        );

        CREATE TABLE IF NOT EXISTS cookenu_recipes (
            id VARCHAR(255) PRIMARY KEY,
            title VARCHAR(255) NOT NULL UNIQUE,
            description VARCHAR(255) NOT NULL,
            date DATE NOT NULL
        );
        `
    )
    .then(() => console.log("Tabelas criadas"))
    .catch((error: any) => console.log(error.message || error.sqlMessage))
    

    static closeConnection = () => this.connection.destroy();
};