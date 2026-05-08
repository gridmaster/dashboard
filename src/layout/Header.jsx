import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import '../assets/css/Header.css';
import { FaList } from "react-icons/fa";

const Header = ({showSidebar, setShowSidebar}) => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/"); 
    }

    return (
        
        <div className='header-border-div lg-header-screen'>
            <div className='lg-header-bar header-div'>

            <div onClick={() => setShowSidebar(!showSidebar)} className='' >
                <span><FaList/></span>
            </div>

            </div>
        </div>
    );
};

export default Header;