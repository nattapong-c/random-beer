import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RandomBeerScreen from '../screen/beer'
import NotFoundScreen from '../screen/404';

const CustomRoutes = () => {
    return (
        <Routes>
            <Route exact element={<RandomBeerScreen />} path="/" />
            <Route element={<NotFoundScreen />} path="*" />
        </Routes>
    );
};

export default CustomRoutes;