import React, { useState } from 'react';
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from 'react-icons/fa'
import Pagination from '../Pagination';

// import '../../assets/css/Main.css'
import '../../assets/css/Category.css'

const Category = () => {

    const [parPage, setParPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue] = useState('')
    const [show, setShow] = useState(true);

    const handleClick = () => {
        setShow(!show)
    }

    return (
        <div>
            <h1>Category</h1>
        </div>
    );
};

export default Category;