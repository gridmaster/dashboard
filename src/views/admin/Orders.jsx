import React, { useState } from 'react';
import '../../assets/css/Orders.css';

const Orders = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [SearchValue, setSearchValue] = useState('')
    const [parPage, setParPage] = useState(5)

    return (
        <div>
            <div className='orders-outer-div'>
                <div className='orders-inner-div'>
                    <select onChange={(e) => setParPage(parseInt(e.target.value))} className='orders-select'>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>
                    <input className='orders-search' type="text" placeholder='search' />

                    <div className='orders-text-head'>
                        <div className='orders-list-header'>Order Id</div>
                        <div className='orders-list-header'>Order Id</div>
                        <div className='orders-list-header'>Order Id</div>
                        <div className='orders-list-header'>Order Id</div>
                        <div className='orders-list-header'>Order Id</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Orders;