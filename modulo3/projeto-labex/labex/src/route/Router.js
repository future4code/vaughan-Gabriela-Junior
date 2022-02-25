import HomePage from '../pages/HomePage/HomePage.js';
import AdminHomePage from '../pages/AdminHomePage/AdminHomePage';
import ApplicationFormPage from '../pages/ApplicationFormPage/ApplicationFormPage';
import CreateTripPage from '../pages/CreateTripPage/CreateTripPage';
import ListTripsPage from '../pages/ListTripsPage/ListTripsPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import TripDetailsPage from '../pages/TripDetailsPage/TripDetailsPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' element={<HomePage />} />

                <Route path='/trips/list' element={<ListTripsPage />} />

                <Route path='/trips/application' element={<ApplicationFormPage />} />

                <Route path='/login' element={<LoginPage />} />

                <Route path='/admin/trips/list' element={<AdminHomePage />} />

                <Route path='/admin/trips/create' element={<CreateTripPage />} />

                <Route path={`/admin/trips/details/:id`} element={<TripDetailsPage />} />

                <Route path={`*`} element={<ErrorPage />} />

            </Routes>
        </BrowserRouter>
    )
};

export default Router;