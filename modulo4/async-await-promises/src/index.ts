import express, {Express} from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import axios from 'axios';

const app: Express = express();

app.use(express.json());
app.use(cors());

//Exercício 1.

//a) Endpoint GET
//b) Promise<any[]>
//c)
async function getAllSubscribers(): Promise<any[]> {
    const response = await axios.get(`https://labenews.herokuapp.com/subscribers`)
    console.log(response.data)
    return response.data
};

// getAllSubscribers();


//Exercício 2.

const getAllSubscribersArrow = async(): Promise<User[]> => {
    const response = await axios.get(`https://labenews.herokuapp.com/subscribers`)
    // console.log(response.data)
    return response.data
};

// getAllSubscribersArrow();

//Exercício 3.

type User = {
    id: string;
    name: string;
    email: string
};

//a) Não.

//c)

const getAllSubscribersMap = async(): Promise<User[]> => {
    const response = await axios.get(`https://labenews.herokuapp.com/subscribers`)
    console.log(response.data)
    return response.data.map((res: any) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email
        }
    });
};

// getAllSubscribersMap();

// Exercício 4.

const createNews = async(title: string, content: string, date: number): Promise<void> => {
    await axios.put(`https://labenews.herokuapp.com/news`, {
        title,
        content,
        date
    })

    console.log("Criada noticia")
};

// Exercício 5.

const sendNotification = async (users: User[], message: string): Promise<void> => {
    try {
        for (const user of users) {
            await axios.post(`https://labenews.herokuapp.com/notifications`, {
                userId: user.id,
                message
            })
        };
        console.log("Mensagens enviadas")

    } catch (error: any) {
        console.log(error.response)
    }
};

// Exercício 6.

//a) Promise.all recebe um array de promises e retorna outra promise que retorna um array de respostas.

//c)

const sendNotificationAll = async (users: User[], message: string): Promise<void> => {
    try {
        const promises = users.map(user => {
            return axios.post(`https://labenews.herokuapp.com/notifications`, {
                userId: user.id,
                message
            })
        })

        await Promise.all(promises)
        console.log("Mensagens todas enviadas")

    } catch (error: any) {

        console.log(error.response)
    }
};

const main = async (): Promise<void> => {
    try {
        await createNews("teste", "teste", 321)
        await getAllSubscribersArrow()
        await getAllSubscribersMap()

    } catch (error: any) {
        console.log(error.response?.data || error.message)
    }
}


main()

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});