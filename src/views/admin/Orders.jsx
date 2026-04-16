import React, { useState } from 'react';
import { FaArrowsDownToLine } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import '../../assets/css/Orders.css'
import '../../assets/css/Admin.css';
import '../../assets/css/Home.css';

const Orders = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue] = useState('')
    const [parPage, setParPage] = useState(5)
    
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
                        <div className='orders-detail-column'>Active</div>
                        <div className='orders-detail-column no-hover-col'><FaArrowsDownToLine /></div> 
                    </div>

                    <div className='orders-div'>
                        <div className='orders-detail-column'>#34534</div>
                        <div className='orders-detail-column'>$345</div>
                        <div className='orders-detail-column'>Received</div>
                        <div className='orders-detail-column'>Pending</div>
                        <div className='orders-detail-column'>Y</div>
                        <div className='orders-detail-column on-hover-row'>Arf! Arf!</div> 
                    </div>

                    <div className='orders-div'>
                        <div className='orders-detail-column'>#2343</div>
                        <div className='orders-detail-column'>$45</div>
                        <div className='orders-detail-column'>Received</div>
                        <div className='orders-detail-column'>Pending</div>
                        <div className='orders-detail-column'>Y</div>
                        <div className='orders-detail-column on-hover-row'>Arf! Arf!</div> 
                    </div>


                    <div className='orders-div'>
                        <div className='orders-detail-column'>#9032</div>
                        <div className='orders-detail-column'>$22</div>
                        <div className='orders-detail-column'>Received</div>
                        <div className='orders-detail-column'>Pending</div>
                        <div className='orders-detail-column'>Y</div>
                        <div className='orders-detail-column on-hover-row'>Arf! Arf!</div> 
                    </div>
                </div>
            </div>
                {/* <table> */}
                            {/* <thead className='bottom-table'>
                                <tr>
                                    <th scope='row' className='bottom-table-column'>Order Id</th>
                                    <th scope='row' className='bottom-table-column'>Price</th>
                                    <th scope='row' className='bottom-table-column'>Payment Status</th>
                                    <th scope='row' className='bottom-table-column'>Order Status</th>
                                    <th scope='row' className='bottom-table-column'>Active</th>                               
                                </tr>
                            </thead>
                            <tbody>
                            </tbody> */}
                        {/* </table> */}
                {/* <div className='relative mt-5 overflow-x-auto'>
                    <div className='w-full text-sm text-left [#d0d2d6]'>

                        <div className='text-sm text-[#d0d2d6] uppercase border-b border-slate-700'>
                            <div className=' flex justify-between items-center'>
                                <div className='py-3 w-[25%] font-bold'>Order id</div>
                                <div className='py-3 w-[13%] font-bold'>Price</div>
                                <div className='py-3 w-[18%] font-bold'>Payment Status</div>
                                <div className='py-3 w-[18%] font-bold'>Order Status</div>
                                <div className='py-3 w-[18%] font-bold'>Action </div>
                                <div className='py-3 w-[8%] font-bold'><LuArrowDownSquare /></div> 
                            </div> 
                        </div>

                        <div className='text-[#d0d2d6] '>
                            <div className=' flex justify-between items-start border-b border-slate-700'>
                                <div className='py-3 w-[25%] font-medium whitespace-nowrap'>#34343</div>
                                <div className='py-3 w-[13%] font-medium'>$654</div>
                                <div className='py-3 w-[18%] font-medium'>Pending</div>
                                <div className='py-3 w-[18%] font-medium'>Pending</div>
                                <div className='py-3 w-[18%] font-medium'><Link>View</Link></div>
                                <div className='py-3 w-[8%] font-medium'><LuArrowDownSquare /></div> 
                            </div> 
                        </div>

                    </div>
                </div> */}

            
            <div className={ state ? 'block-border' : 'hidden' }>
  
            </div>
        </div> 
    );
};

export default Orders;