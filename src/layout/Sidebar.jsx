import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getNav } from '../navigation/index';
import { RiLogoutBoxLine } from "react-icons/ri";
import '../assets/css/Sidebar.css';

const Sidebar = ({showSidebar, setShowSidebar}) => {

    const { pathname } = useLocation()
    const [allNav,setAllNav] = useState([])

    useEffect(() => {
        const navs = getNav('admin')
        setAllNav(navs)
    },[])

    return (
        <div>
            <div onClick={() => setShowSidebar(!showSidebar)} className={`sidebar-show-hide ${!showSidebar ? 'invisible' : 'visible'} sidebar-show-hide-div`} >
                
            </div>

            <div className={`sidebar-div-3 ${showSidebar ? 'sidebar-set-left' : 'sidebar-reset-left lg-sidebar' } `}>
                <div className='sidebar-div-link'>
                    <Link to='/' className='sidebar-link'>
                        <img src='http://localhost:3000/images/logo.png' alt='' />
                    </Link>
                </div>

                <div>
                    <ul className='sidebar-li-no-bullets'>
                        {
                            allNav.map((n,i) => <li key={i}>
                                <Link to={n.path} className={`${pathname === n.path ? 'sidebar-menu-select off-white-text' : 'sidebar-menu-not-select' } sidebar-menu-all `}>
                                    <span>{n.icon}</span>
                                    <span>{n.title}</span>
                                </Link>
                            </li>)
                        }
                        <li >
                            <button className='sidebar-menu-not-select sidebar-logout sidebar-menu-all'>
                                <span className='span-logoff'><RiLogoutBoxLine /></span>
                                <span>Log Out</span>
                            </button>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Sidebar;