import HomePage from '../pages/HomePage/HomePage.js';
import AdminHomePage from '../pages/AdminHomePage/AdminHomePage';
import ApplicationFormPage from '../pages/ApplicationFormPage/ApplicationFormPage';
import CreateTripPage from '../pages/CreateTripPage/CreateTripPage';
import ListTripsPage from '../pages/ListTripsPage/ListTripsPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import TripDetailsPage from '../pages/TripDetailsPage/TripDetailsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';


const Router = (props) => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' element={<HomePage />} />

                <Route path='/trips/list' element={<ListTripsPage trips={props.trips} />} />

                <Route path='/trips/application' element={<ApplicationFormPage trips={props.trips} />} />

                <Route path='/login' element={<LoginPage />} />

                <Route path='/admin/trips/list' element={<AdminHomePage trips={props.trips}
                                                                        getId={props.getId} />} />

                <Route path='/admin/trips/create' element={<CreateTripPage />} />

                <Route path={`/admin/trips/:id`} element={<TripDetailsPage idTrip={props.idTrip} />} />

            </Routes>
        </BrowserRouter>
    )
};

export default Router;