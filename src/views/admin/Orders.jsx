import React, { useState } from 'react';
import { FaArrowsDownToLine } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Pagination from '../Pagination';

import '../../assets/css/Orders.css'

const Orders = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue] = useState('')
    const [perPage, setParPage] = useState(5)
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

                    <div className='orders-div orders-text-uppercase orders-div-bottom'>
                        <div className='orders-detail-column'>Order Id</div>
                        <div className='orders-detail-column'>Price</div>
                        <div className='orders-detail-column'>Payment Status</div>
                        <div className='orders-detail-column'>Order Status</div>
                        <div className='orders-detail-column'>Action</div>
                        <div className='orders-detail-column'><FaArrowsDownToLine /></div>
                    </div>

                    <div className='orders-div'>
                        <div className='orders-detail-column'>#34534</div>
                        <div className='orders-detail-column'>$345</div>
                        <div className='orders-detail-column'>Received</div>
                        <div className='orders-detail-column'>Pending</div>
                        <div className='orders-detail-column'>Y</div>
                        <div className='orders-detail-column'><FaArrowsDownToLine className='on-hover-row' /></div>
                    </div>

                    <div className='orders-div'>
                        <div className='orders-detail-column'>#34534</div>
                        <div className='orders-detail-column'>$345</div>
                        <div className='orders-detail-column'>Received</div>
                        <div className='orders-detail-column'>Pending</div>
                        <div className='orders-detail-column'>Y</div>
                        <div className='orders-detail-column'><FaArrowsDownToLine className='on-hover-row' /></div>
                    </div>

                    <div className='orders-div'>
                        <div className='orders-detail-column'>#34534</div>
                        <div className='orders-detail-column'>$345</div>
                        <div className='orders-detail-column'>Received</div>
                        <div className='orders-detail-column'>Pending</div>
                        <div className='orders-detail-column'>Y</div>
                        <div className='orders-detail-column'><FaArrowsDownToLine className='on-hover-row' /></div>
                    </div>

                    <div className='orders-div'>
                        <div className='orders-detail-column'>#34534</div>
                        <div className='orders-detail-column'>$345</div>
                        <div className='orders-detail-column'>Received</div>
                        <div className='orders-detail-column'>Pending</div>
                        <div className='orders-detail-column'>Y</div>
                        <div className='orders-detail-column'><FaArrowsDownToLine className='on-hover-row' /></div>
                    </div>

                    <div className='orders-div'>
                        <div className='orders-detail-column'>#34534</div>
                        <div className='orders-detail-column'>$345</div>
                        <div className='orders-detail-column'>Received</div>
                        <div className='orders-detail-column'>Pending</div>
                        <div className='orders-detail-column'>Y</div>
                        <div className='orders-detail-column'><FaArrowsDownToLine className='on-hover-row' /></div>
                    </div>

                    <div className='orders-div'>
                        <div className='orders-detail-column'>#34534</div>
                        <div className='orders-detail-column'>$345</div>
                        <div className='orders-detail-column'>Received</div>
                        <div className='orders-detail-column'>Pending</div>
                        <div className='orders-detail-column'>Y</div>
                        <div className='orders-detail-column'><FaArrowsDownToLine className='on-hover-row' /></div>
                    </div>
                    
                    <div className='orders-div'>
                        <div className='orders-detail-column'>#2343</div>
                        <div className='orders-detail-column'>$45</div>
                        <div className='orders-detail-column'>Received</div>
                        <div className='orders-detail-column'>Pending</div>
                        <div className='orders-detail-column'>Y</div>
                        <div onClick={(e) => setShow(!show)} className='orders-detail-column'><FaArrowsDownToLine className='on-hover-row' /></div>
                    </div>

                    <div className={ show ? 'orders-order-detail' : 'hidden' }>
                        <div className='orders-div-detail'>
                            <div className='orders-detail-column text-color'>#9032</div>
                            <div className='orders-detail-column text-color'>$22</div>
                            <div className='orders-detail-column text-color'>Received</div>
                            <div className='orders-detail-column text-color'>Pending</div>
                        </div>

                        <div className='orders-div-detail'>
                            <div className='orders-detail-column text-color'>#9032</div>
                            <div className='orders-detail-column text-color'>$22</div>
                            <div className='orders-detail-column text-color'>Received</div>
                            <div className='orders-detail-column text-color'>Pending</div>
                        </div>
                    </div>

                    <div className='orders-div'>
                        <div className='orders-detail-column'>#9032</div>
                        <div className='orders-detail-column'>$22</div>
                        <div className='orders-detail-column'>Received</div>
                        <div className='orders-detail-column'>Pending</div>
                        <div className='orders-detail-column'>Y</div>
                        <div onClick={(e) => setShow(!show)} className='orders-detail-column'><FaArrowsDownToLine className='on-hover-row' /></div>
                    </div>
            
                    <div className={ show ? 'orders-order-detail' : 'hidden' }>
                        <div className='orders-div-detail'>
                            <div className='orders-detail-column text-color'>#9032</div>
                            <div className='orders-detail-column text-color'>$22</div>
                            <div className='orders-detail-column text-color'>Received</div>
                            <div className='orders-detail-column text-color'>Pending</div>
                        </div>

                        <div className='orders-div-detail'>
                            <div className='orders-detail-column text-color'>#9032</div>
                            <div className='orders-detail-column text-color'>$22</div>
                            <div className='orders-detail-column text-color'>Received</div>
                            <div className='orders-detail-column text-color'>Pending</div>
                        </div>
                    </div>

                    <Pagination 
                        pageNumber = {currentPage}
                        setPageNumber = {setCurrentPage}
                        totalItem = {13}
                        perPage = {perPage}
                        showItem = {13}
                    />
                </div> 
            </div>
        </div>
    );
};

export default Orders;