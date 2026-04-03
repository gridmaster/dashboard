import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Sidebar.css';

const Sidebar = () => {
    return (
        <div>
            <div></div>

            <div>
                <div className='div-sidebar'>
                    <div>
                        <Link to='/'>
                            <img src="http://localhost:3000/images/longfellow-logo-white.png" alt="sidebar img"></img>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;