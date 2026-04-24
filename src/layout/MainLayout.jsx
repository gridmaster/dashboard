import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import '../assets/css/Home.css';
import '../assets/css/Main.css';
import '../assets/css/Sidebar.css';

const MainLayout = () => {

    const [showSidebar, setShowSidebar] = useState(true);

    return (
        <div id="outer">
                
                <div className="parent_div_1" id="inner">

                    <div id="sidebar" className={`${showSidebar === true ? 'show-sidebar' : 'hide-sidebar'}`} >
                        <Sidebar  />
                    </div>  
                    
                    <div id="content" className='category-content-page'>
                        <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
                            <Outlet />
                    </div>
               </div>
        </div>
    );
};

export default MainLayout;