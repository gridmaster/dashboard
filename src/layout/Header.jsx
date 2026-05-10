import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { FaList } from "react-icons/fa";

import '../assets/css/Header.css';

const Header = ({showSidebar, setShowSidebar}) => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/"); 
    }

    return (
        
        <div className='header-border-div lg-header-screen'>
            <div className='lg-header-bar header-div'>

            <div onClick={() => setShowSidebar(!showSidebar)} className='header-showSidebar lg-header-sidebar' >
                <span><FaList/></span>
            </div>

            </div>
        </div>
    );
};

export default Header;