import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FeedPage from '../pages/FeedPage/FeedPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import CreatePostPage from '../pages/CreatePostPage/CreatePostPage';
import PostPage from '../pages/PostPage/PostPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const Router = ({setLoginButton}) => {
    return (
            <Routes>

                <Route path="/" element={<FeedPage />} />

                <Route path='/login' element={<LoginPage setLoginButton={setLoginButton} />} />

                <Route path="/signup" element={<SignUpPage setLoginButton={setLoginButton}/>} />

                <Route path="/createpost" element={<CreatePostPage />} />

                <Route path="/post/:id" element={<PostPage />} />

                <Route path="*" element={<ErrorPage/>} />

            </Routes>
    )
};

export default Router;