import { useEffect, useState } from 'react';
import axios from 'axios';

const useRequestData = (initialData, url) => {
    const token = localStorage.getItem('token');

    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        getData(url)
    }, [url])

    const getData = async (url) => {
        setIsLoading(true);

        const config = {
            headers: {
                Authorization: token
            }
        };

        try {
            const response = await axios.get(url, config)
            setData(response.data)
            setIsLoading(false);

        } catch (error) {
            alert(error.response.data)
            setError(error);
            setIsLoading(false);
        };
    };

    return [data, getData, isLoading, error];
};

export default useRequestData;