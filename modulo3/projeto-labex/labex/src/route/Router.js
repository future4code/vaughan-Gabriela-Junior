import HomePage from '../pages/HomePage/HomePage.js';
import AdminHomePage from '../pages/AdminHomePage/AdminHomePage';
import ApplicationFormPage from '../pages/ApplicationFormPage/ApplicationFormPage';
import CreateTripPage from '../pages/CreateTripPage/CreateTripPage';
import ListTripsPage from '../pages/ListTripsPage/ListTripsPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import TripDetailsPage from '../pages/TripDetailsPage/TripDetailsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = (props) => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' element={<HomePage />} />

                <Route path='/trips/list' element={<ListTripsPage trips={props.trips} getTrips={props.getTrips}/>} />

                <Route path='/trips/application' element={<ApplicationFormPage trips={props.trips} />} />

                <Route path='/login' element={<LoginPage />} />

                <Route path='/admin/trips/list' element={<AdminHomePage trips={props.trips} getId={props.getId} getTrips={props.getTrips}/>} />

                <Route path='/admin/trips/create' element={<CreateTripPage />} />

                <Route path={`/admin/trips/${props.idTrip}`} element={<TripDetailsPage idTrip={props.idTrip} />} />

            </Routes>
        </BrowserRouter>
    )
};

export default Router;