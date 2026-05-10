import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

import '../assets/css/Main.css';

const MainLayout = () => {

    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className='main-boarder-div'>
            <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
            <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

            <div className='main-outlet-div lg-outlet'>
                <Outlet />
            </div>
        </div>


        // <div id="outer">
        //         <div className="parent_div_1" id="inner">

        //             <div id="sidebar" className={`${showSidebar === true ? 'show-sidebar' : 'hide-sidebar'}`} >
        //                 <Sidebar />
        //             </div>  
                    
        //             <div id="content" className='category-content-page'>
        //                 <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        //                     <Outlet />
        //             </div>
        //        </div>
        // </div>
    );
};

export default MainLayout;