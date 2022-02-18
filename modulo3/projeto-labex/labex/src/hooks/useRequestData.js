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
        console.log(response.data.trips)
        setData(response.data.trips)
        setIsLoading(false);
  
      } catch (error) {
        console.log(error)
        setError(error);
        setIsLoading(false);
      };
    };
  

  
    return [data, isLoading, error, getTrips];
  };

  export default useRequestData;