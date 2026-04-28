import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import '../assets/css/AddCategory.css';
import { FaList } from "react-icons/fa";

const AddCategory = ({showSidebar, setShowSidebar}) => {

    console.log("showSidebar = " + showSidebar);

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/"); 
    }

    return (
        
        <div id='cat-add'>
            
            <div className={`${showSidebar === true ? 'catAdd-inner-header catAdd-left-anchored catAdd-right-anchored' : 'catAdd-inner-header catAdd-left-sb-anchored catAdd-right-anchored'}`}>

            {/* <div className={`${showSidebar === true ? 'catAdd-inner-header catAdd-left-anchored catAdd-right-anchored' : 'catAdd-inner-header catAdd-right-anchored xcatAdd-left-anchored'}`}> */}

                <span className='catAdd-text-style off-white-text'>Category Add</span>
                <span ><button className='catAdd-button-add off-white-text'>Add</button></span>

                {/* <div className='catAdd-header-input'>
                    <input className='header-text' type='text' />
                </div> */}

                {/* <div className='header-content'>
                    <button className='image-button' onClick={handleClick}></button>
                </div> */}

            </div>
        </div>
    );
};

export default AddCategory;