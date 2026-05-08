import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination';

// import { FaTrash } from "react-icons/fa6";
// import { FaEdit } from 'react-icons/fa'

import '../../assets/css/Sellers.css'

const Sellers = () => {

    const [parPage, setParPage] = useState(5)
    // const [currentPage, setCurrentPage] = useState(1)
    // const [searchValue, setSearchValue] = useState('')
    const [show, setShow] = useState(true);

    return (
        <div className='sellers-border-div lg-screen'>
            <div className='sellers-div2'>
                <div className='sellers-div-top'>
                    <select onChange={(e) => setParPage(parseInt*(e.target.value))} className='sellers-select'>
                        <option value='5'>5</option>
                        <option value='10'>10</option>
                        <option value='15'>15</option>
                    </select>
                    <input type='text' className='sellers-input' placeholder='Search'>

                    </input>
                </div>
            </div>
        </div>
    );
};

export default Sellers;