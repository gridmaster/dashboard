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
    console.log(pathname)
    console.log(allNav.length)
    console.log(allNav)

    return (
        <div>
            <div onClick={() => setShowSidebar(false)} className={`show-sidebar ${!showSidebar ? 'invisible' : 'visible'}`}>

            </div>

            <div>
                <div className='div-sidebar' >
                    <div>
                        <Link to='/Home'>
                            <img className='icon' src="http://localhost:3000/images/longfellow-logo-black.png" alt="sidebar img"></img>
                        </Link>
                    </div>
                        <div className='menu-holder'>
                            <ul className='menu-item'>
                                {
                                    allNav.map((n,i) => 
                                        <li key={i} className={`${pathname === n.path ? 'dash-back dash-text-aliceblue dash-main' : 'dash-back dash-text-black dash-sub'}`}>

                                            <Link to={n.path}
                                                    className={`${pathname === n.path ? 'dash-link dash-icon' : 'dash-select select-icon'}`}>

                                                <span className='icon-span'>{n.icon}</span>
                                                <span className='hover-mouse'>{n.title}</span>
                                            </Link>
                                        </li>
                                    )
                                }
                                <li className='dash-back dash-text-black dash-sub'>
                                    <button className='dash-link logoff-icon logoff-boarder'>
                                        <span className='span-logoff'><RiLogoutBoxLine /></span>
                                        <span >Log Out</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;