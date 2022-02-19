import axios from 'axios';
import { useEffect, useState } from 'react';

const useRequestData = (url) => {
    const [data, setData] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
  
    useEffect(() => {
      getTrips(url);
    }, [url]);

    const getTrips = async (url) => {
      setIsLoading(true);
  
      try {
        const response = await axios.get(url)
        setData(response.data.trips)
        setIsLoading(false);
  
      } catch (error) {
        alert(`Ocorreu um erro. Tente novamente. ${error.response}`)
        setError(error);
        setIsLoading(false);
      };
    };
  
    return [data, isLoading, error, getTrips];
  };

  export default useRequestData;