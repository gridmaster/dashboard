import React, { useRef } from 'react';
import '../assets/css/Header.css';
import { FaList } from "react-icons/fa";

const Header = ({showSidebar, setShowSidebar}) => {
    console.log("sb = " + showSidebar);
    console.log(showSidebar === true);
    console.log(showSidebar !== true);

    //let span = document.getElementById("span-show-hide-text");

    return (
        
        <div className='header'>

            <div id='header-div' className='responsive-div div-inner-header'>
                
                <button onClick={() => setShowSidebar(!showSidebar)} className="btn"><FaList className='show-list-icon'/></button>

                <span className={`${showSidebar === true ? 'span-show-text' : 'span-hide-text'}`} > Hide sidebar</span>
                <span className={`${showSidebar !== true ? 'span-show-text' : 'span-hide-text'}`} > Show sidebar</span>

            </div>
        </div>
    );
};

export default Header;