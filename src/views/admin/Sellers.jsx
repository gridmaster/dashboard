import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination';

import '../../assets/css/Sellers.css'

const Sellers = () => {

    const [parPage, setParPage] = useState(5)
    const [show, setShow] = useState(true);

    return (
        <div className='sellers-border-div lg-screen'>
            <h1>Sellers</h1>
        </div>
    );
};

export default Sellers;