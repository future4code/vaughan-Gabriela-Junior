import Header from './components/Header/Header';
import AdminHomePage from './pages/AdminHomePage/AdminHomePage';
import ApplicationFormPage from './pages/ApplicationFormPage/ApplicationFormPage';
import CreateTripPage from './pages/CreateTripPage/CreateTripPage';
import HomePage from './pages/HomePage/HomePage';
import ListTripsPage from './pages/ListTripsPage/ListTripsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import TripDetailsPage from './pages/TripDetailsPage/TripDetailsPage';
import { GlobalStyle } from './style-app';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header/>
      <h1>Esse é o App</h1> 
      {/* <AdminHomePage />
      <ApplicationFormPage />
      <CreateTripPage />
      <HomePage /> */}
      <ListTripsPage />
      {/* <LoginPage />
      <TripDetailsPage /> */}
      
    </div>
  );
};

export default App;