import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './features/auth/Login';
import DashBoard from './features/donations/DashBoard';
import CreateBookPage from './features/donations/CreateBookPage';
import EditBookPage from './features/donations/EditBookpage';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element= {<Navigate to={"/login"}/>}/>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/cadastrar" element={<CreateBookPage />} />
                <Route path="/editar/:id" element={<EditBookPage />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;