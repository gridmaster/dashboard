import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import '../assets/css/Home.css';
import '../assets/css/Main.css';

const MainLayout = () => {
    return (
        <div id="outer">
            
                <div className="parent_div_1" id="inner">
                    <div id="sidebar"><Sidebar /></div>
                    <div id="content">
                            <Outlet />
                    </div>
               </div>
        </div>
    );
};

export default MainLayout;