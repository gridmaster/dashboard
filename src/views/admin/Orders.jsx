import React, { useState } from 'react';
import { FaArrowsDownToLine } from "react-icons/fa6";
import Pagination from '../Pagination';

import '../../assets/css/Orders.css'

const Orders = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue] = useState('')
    const [parPage, setParPage] = useState(5)
    const [show, setShow] = useState(false)

    return (
        <div>
            <h1>Orders</h1>
        </div>
    );
};

export default Orders;