import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import './MainLayouts.css';

const MainLayouts = () => {
    return (
        <section>
            <Header></Header>
            <Outlet></Outlet>
        </section>
    );
};

export default MainLayouts;