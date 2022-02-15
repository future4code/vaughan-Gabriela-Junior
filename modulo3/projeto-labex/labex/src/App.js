import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL } from './constants/baseurl';
import Header from './components/Header/Header';
import { GlobalStyle } from './style-app';
import Router from './route/Router';

const App = () => {

  const [trips, setTrips] = useState([]);

    useEffect(() => 
        {getTrips()}
    , [])


    const getTrips = async () => {
        const url = `${BASE_URL}/trips`

        try {
            const response = await axios.get(url)
            console.log(response.data.trips)
            setTrips(response.data.trips)

        } catch (error){ 
            console.log(error)
        }
    }

  return (
    <div>
      <GlobalStyle />
      <Router trips={trips} />
      
    </div>
  );
};

export default App;