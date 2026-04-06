import React from 'react';
import '../assets/css/Header.css';
import { FaList } from "react-icons/fa";

const Header = ({showSidebar, setShowSidebar}) => {
    console.log(showSidebar);
    console.log(setShowSidebar);
    
    return (
        
        <div className='header'>

            <div id='header-div' className='responsive-div div-inner-header'>
                
                <button onClick={() => setShowSidebar(!showSidebar)} className="btn"><i className="fa fa-home"></i><FaList className='show-list-icon'/></button>

            </div>
        </div>
    );
};

export default Header;