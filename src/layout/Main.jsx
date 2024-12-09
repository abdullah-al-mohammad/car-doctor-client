import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shaired/Footer/Footer';
import Navbar from '../pages/shaired/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;