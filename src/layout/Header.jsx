import React, { useRef } from 'react';
import '../assets/css/Header.css';
import { FaList } from "react-icons/fa";

const Header = ({showSidebar, setShowSidebar}) => {

    return (
        
        <div className='header'>
            <div className='div-inner-header left-anchored right-anchored'>
                
                <button onClick={() => setShowSidebar(!showSidebar)} className="btn">
                    <FaList className='show-list-icon'/>
                </button>

                <span className={`${showSidebar === true ? 'span-show-text' : 'span-hide-text'}`} > Hide sidebar</span>
                <span className={`${showSidebar !== true ? 'span-show-text' : 'span-hide-text'}`} > Show sidebar</span>

                <div className='hidden md:block'>
                    <input className='header-text' type='text' />
                </div>

                <div className='admin-header'>
                    <div className='place holder'>
                        <div className='place holder'>
                            <div className='div-user-info user-info flex justify-center items-center flex-col text-end'>
                                <h5 className='h5-user-info'>Jim Ballard</h5>
                                <span className='span-user-info'>Admin</span>
                            </div>
                        </div>
                    </div >
                </div>
            </div>
        </div>
    );
};

export default Header;