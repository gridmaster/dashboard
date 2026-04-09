import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import '../assets/css/Header.css';
import { FaList } from "react-icons/fa";

const Header = ({showSidebar, setShowSidebar}) => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/Home"); 
    }

    return (
        
        <div className='header'>

            <div className={`${showSidebar === true ? 'div-inner-header left-anchored right-anchored' : 'div-inner-header left-sb-anchored right-anchored '}`}>

                <button onClick={() => setShowSidebar(!showSidebar)} className="btn">
                    <FaList className='show-list-icon'/>
                </button>

                <span className={`${showSidebar === true ? 'span-show-text left-free' : 'span-hide-text left-sb-anchored'}`} > Hide sidebar</span>
                <span className={`${showSidebar !== true ? 'span-show-text left-free' : 'span-hide-text '}`} > Show sidebar</span>

            <div className='header-content'>
                <div className='header-user-ids'>
                    <span className='header-user'>What up!</span>
                    <span className='header-user'>SUCKERS!</span>
                </div>
        
                <button className='image-button' onClick={handleClick}></button>
            </div>

            </div>
        </div>
    );
};

export default Header;