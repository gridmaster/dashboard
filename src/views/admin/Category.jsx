import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowsDownToLine } from "react-icons/fa6";
import Pagination from '../Pagination';

import '../../assets/css/Category.css'

const Category = () => {

    const [parPage, setParPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue] = useState('')
    const [show, setShow] = useState(false)

    const state = {

        series: [
            {
                name: 'Orders',
                data : [23,34,45,45,65,43,44,43,32,20,23,34]
            },
            {
                name: 'Revenue',
                data : [13,32,45,37,54,43,34,33,32,29,43,44]
            },
            {
                name: 'Sellers',
                data : [55,53,57,78,86,67,58,59,76,77,54,43]
            }
        ],
        options : {
            color : ['#181eee8', '#181eee8'],
            plotOptions : {
                radius : 30
            },
            chart : {
                background : 'transparent',
                foreColor : '#d0d2d6'
            },
            dataLabels : {
                enabled : false
            },
            strock : {
                show : true,
                curve : ['smooth', 'straight', 'stepline'],
                lineCap : 'butt',
                colors : '#f0f0f0',
                width : .5,
                dashArray : 0
            },
            xaxis : {
                categories : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            legend : {
                position : 'top'
            },
            responsive : [
                {
                breakpoint : 565,
                yaxis : {
                    cateories : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                },
                options : {
                    plotOptions : {
                        bar : {
                            horizontal : true
                        }
                    },
                    chart : {
                        height : "550px"
                    }
                }
            }
            ]
            
        }

    }

    return (
        <div className='dash-content-first'>
            <div className='div-chart-outer'>
                <div className="grid-container">

                    <div className="item1">
                        <div className='category-div-outer'>
                            <select onChange={(e) => setParPage(parseInt(e.target.value))} className='category-select'>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                            </select>
                            <input className='category-search' type="text" placeholder='search' />
                        </div>




                    <div className='category-div category-text-uppercase category-div-bottom'>
                        <div className='category-detail-column'>Order Id</div>
                        <div className='category-detail-column'>Price</div>
                        <div className='category-detail-column'>Payment Status</div>
                        <div className='category-detail-column'>Order Status</div>
                        <div className='category-detail-column'>Action</div>
                        <div className='category-detail-column'><FaArrowsDownToLine /></div>
                    </div>

                    <div className='category-div'>
                        <div className='category-detail-column'>#34534</div>
                        <div className='category-detail-column'>$345</div>
                        <div className='category-detail-column'>Received</div>
                        <div className='category-detail-column'>Pending</div>
                        <div className='category-detail-column'>Y</div>
                        <div className='category-detail-column'><FaArrowsDownToLine className='on-hover-row' /></div>
                    </div>

                    <div className='category-div'>
                        <div className='category-detail-column'>#34534</div>
                        <div className='category-detail-column'>$345</div>
                        <div className='category-detail-column'>Received</div>
                        <div className='category-detail-column'>Pending</div>
                        <div className='category-detail-column'>Y</div>
                        <div className='category-detail-column'><FaArrowsDownToLine className='on-hover-row' /></div>
                    </div>

                    <div className='category-div'>
                        <div className='category-detail-column'>#34534</div>
                        <div className='category-detail-column'>$345</div>
                        <div className='category-detail-column'>Received</div>
                        <div className='category-detail-column'>Pending</div>
                        <div className='category-detail-column'>Y</div>
                        <div className='category-detail-column'><FaArrowsDownToLine className='on-hover-row' /></div>
                    </div>

                    <div className='category-div'>
                        <div className='category-detail-column'>#34534</div>
                        <div className='category-detail-column'>$345</div>
                        <div className='category-detail-column'>Received</div>
                        <div className='category-detail-column'>Pending</div>
                        <div className='category-detail-column'>Y</div>
                        <div className='category-detail-column'><FaArrowsDownToLine className='on-hover-row' /></div>
                    </div>

                    <div className='category-div'>
                        <div className='category-detail-column'>#34534</div>
                        <div className='category-detail-column'>$345</div>
                        <div className='category-detail-column'>Received</div>
                        <div className='category-detail-column'>Pending</div>
                        <div className='category-detail-column'>Y</div>
                        <div className='category-detail-column'><FaArrowsDownToLine className='on-hover-row' /></div>
                    </div>

                    <div className='category-div'>
                        <div className='category-detail-column'>#34534</div>
                        <div className='category-detail-column'>$345</div>
                        <div className='category-detail-column'>Received</div>
                        <div className='category-detail-column'>Pending</div>
                        <div className='category-detail-column'>Y</div>
                        <div className='category-detail-column'><FaArrowsDownToLine className='on-hover-row' /></div>
                    </div>
                    
                    <div className='category-div'>
                        <div className='category-detail-column'>#2343</div>
                        <div className='category-detail-column'>$45</div>
                        <div className='category-detail-column'>Received</div>
                        <div className='category-detail-column'>Pending</div>
                        <div className='category-detail-column'>Y</div>
                        <div onClick={(e) => setShow(!show)} className='category-detail-column'><FaArrowsDownToLine className='on-hover-row' /></div>
                    </div>

                    <div className={ show ? 'category-order-detail' : 'hidden' }>
                        <div className='category-div-detail'>
                            <div className='category-detail-column text-color'>#9032</div>
                            <div className='category-detail-column text-color'>$22</div>
                            <div className='category-detail-column text-color'>Received</div>
                            <div className='category-detail-column text-color'>Pending</div>
                        </div>

                        <div className='category-div-detail'>
                            <div className='category-detail-column text-color'>#9032</div>
                            <div className='category-detail-column text-color'>$22</div>
                            <div className='category-detail-column text-color'>Received</div>
                            <div className='category-detail-column text-color'>Pending</div>
                        </div>
                    </div>

                    <div className='category-div'>
                        <div className='category-detail-column'>#9032</div>
                        <div className='category-detail-column'>$22</div>
                        <div className='category-detail-column'>Received</div>
                        <div className='category-detail-column'>Pending</div>
                        <div className='category-detail-column'>Y</div>
                        <div onClick={(e) => setShow(!show)} className='category-detail-column'><FaArrowsDownToLine className='on-hover-row' /></div>
                    </div>
            
                    <div className={ show ? 'category-order-detail' : 'hidden' }>
                        <div className='category-div-detail'>
                            <div className='category-detail-column text-color'>#9032</div>
                            <div className='category-detail-column text-color'>$22</div>
                            <div className='category-detail-column text-color'>Received</div>
                            <div className='category-detail-column text-color'>Pending</div>
                        </div>

                        <div className='category-div-detail'>
                            <div className='category-detail-column text-color'>#9032</div>
                            <div className='category-detail-column text-color'>$22</div>
                            <div className='category-detail-column text-color'>Received</div>
                            <div className='category-detail-column text-color'>Pending</div>
                        </div>
                    </div>

                    <Pagination 
                        pageNumber = {currentPage}
                        setPageNumber = {setCurrentPage}
                        totalItem = {12}
                        parPage = {parPage}
                        showItem = {12}
                    />










                    </div>
                    <div className="item2">
                        <div className='div-seller-msg'>
                            <span className="recient-sellers recient-format">Recient Seller Message</span>
                            <Link className="view-all-sellers">'View All'</Link>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    );
};

export default Category;