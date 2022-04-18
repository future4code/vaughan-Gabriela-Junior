import axios from 'axios';
import { Address } from '../types';

//Exercício 1.
export const getAddress = async(zipcode: string):Promise<Address | null> => {
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${zipcode}/json/`)
        const address: Address = {
            zipcode: response.data.cep,
            street: response.data.logradouro,
            number: 0,
            complement: response.data.complemento,
            district: response.data.bairro,
            city: response.data.localidade,
            state: response.data.uf
        }

        console.log(response.data)
        return address

    } catch (error: any) {
        console.log(error.response)
        return null
    }
}
