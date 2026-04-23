import React, { useState } from 'react';
import { FaArrowsDownToLine } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Pagination from '../Pagination';

import '../../assets/css/Orders.css'

const Orders = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue] = useState('')
    const [parPage, setParPage] = useState(5)
    const [show, setShow] = useState(false)

    return (
        <div className='orders-div-content'>

            <div className='orders-div-container'>
                <div className='orders-div-outer'>
                    <select onChange={(e) => setParPage(parseInt(e.target.value))} className='orders-select'>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>
                    <input className='orders-search' type="text" placeholder='search' />

                    <table className='orders-bottom-table'>
                        <thead className='orders-bottom-table'>
                            <tr>
                                <th scope='row' className='orders-table-column'>Order Id</th>
                                <th scope='row' className='orders-table-column'>Price</th>
                                <th scope='row' className='orders-table-column'>Payment Status</th>
                                <th scope='row' className='orders-table-column'>Active</th>              
                                <th scope='row' className='orders-table-column'>Action</th>
                                <th scope='row' className='orders-table-column'><FaArrowsDownToLine /></th>                                                                 
                            </tr>
                        </thead>
                        <tbody>
                            {                                
                                [1,2,3,4,5].map((d, i) => <tr key={i}>
                                <td className='orders-table-tr'>#34344</td>
                                <td className='orders-table-tr'>$454</td>
                                <td className='orders-table-tr'>Pending</td>
                                <td className='orders-table-tr'>View</td>
                                <td className='orders-table-tr'>Arf!</td>
                                <td className='orders-table-tr'><FaArrowsDownToLine /></td>                                            
                            </tr>)
                            }
                        </tbody>
                    </table>
                        {/* </div> */}
                    {/* </div> */}

                    <Pagination 
                        pageNumber = {currentPage}
                        setPageNumber = {setCurrentPage}
                        totalItem = {27}
                        parPage = {parPage}
                        showItem = {27}
                    />
                </div> 
            </div>
        </div>
    );
};

export default Orders;