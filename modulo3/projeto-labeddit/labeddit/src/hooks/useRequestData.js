import {useEffect, useState } from 'react';
import axios from 'axios';

const useRequestData = (initialData, url) => {
    const token = localStorage.getItem('token');

    const [data, setData] = useState(initialData);

    useEffect(() => {
        getData(url)
    }, [url])

    const getData = async (url) => {
        const config = {
            headers: {
                Authorization: token
            }
        };

        try {
            const response = await axios.get(url, config)
            console.log(response.data)
            setData(response.data)
        } catch (error) {
            console.log(error.response.data)
        }
    }

    return (data)
}

export default useRequestData;