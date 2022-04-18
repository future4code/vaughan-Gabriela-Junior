import axios from "axios";

//a) Endpoint GET
//b) Promise<any[]>

export default async function getAllSubscribers(): Promise<any[]> {
    const response = await axios.get(`https://labenews.herokuapp.com/subscribers`)
    console.log(response.data)
    return response.data
};

console.log(getAllSubscribers());


