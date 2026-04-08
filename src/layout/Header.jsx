import React, { useRef } from 'react';
import '../assets/css/Header.css';
import { FaList } from "react-icons/fa";

const Header = ({showSidebar, setShowSidebar}) => {

    return (
        
        <div className='header'>

            <div className={`${showSidebar === true ? 'div-inner-header left-anchored right-anchored' : 'div-inner-header left-sb-anchored right-anchored '}`}>

                <button onClick={() => setShowSidebar(!showSidebar)} className="btn">
                    <FaList className='show-list-icon'/>
                </button>

                <span className={`${showSidebar === true ? 'span-show-text left-free' : 'span-hide-text left-sb-anchored'}`} > Hide sidebar</span>
                <span className={`${showSidebar !== true ? 'span-show-text left-free' : 'span-hide-text '}`} > Show sidebar</span>

            </div>
        </div>
    );
};

export default Header;