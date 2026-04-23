import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowsDownToLine, FaTrash } from "react-icons/fa6";
import { FaEdit } from 'react-icons/fa'
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
                <div className="category-grid-container">

                    <div className="item1">
                        <div className='category-div-outer'>
                            <select onChange={(e) => setParPage(parseInt(e.target.value))} className='category-select'>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                            </select>
                            <input className='category-search' type="text" placeholder='search' />
                        </div>

                        <div className='category-bottom-outer'>
                            <div className='category-table-wrap'>
                                <table className='category-bottom-table'>
                                    <thead className='category-bottom-table'>
                                        <tr>
                                            <th scope='row' className='category-table-column'>No</th>
                                            <th scope='row' className='category-table-column'>Image</th>
                                            <th scope='row' className='category-table-column'>Name</th>
                                            <th scope='row' className='category-table-column'>Action</th>                               
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {                                
                                            [1,2,3,4,5].map((d, i) => <tr key={i}>
                                            <td className='category-table-tr'>{d}</td>
                                            <td className='category-table-tr'>
                                                <img className='category-msg-icon' src={`http://localhost:3000/images/category/${d}.jpg`} alt="BFD as Ralph would say..."/>
                                            </td>
                                            <td className='category-table-tr'>Sports</td>
                                            <td className='category-table-tr category-cell'><FaEdit className='category-edit-icon'/><FaTrash className='category-edit-icon'/></td>
                                        </tr>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
            
                        {/*<div className={ show ? 'category-order-detail' : 'hidden' }>
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
                        </div> */}

                        <Pagination 
                            pageNumber = {currentPage}
                            setPageNumber = {setCurrentPage}
                            totalItem = {27}
                            parPage = {parPage}
                            showItem = {27}
                        />

                    </div>

                    <div className="item2">
                        <div className='div-seller-msg'>
                            <span className="recient-sellers recient-format off-white-text">Recient Seller Message</span>
                            <Link className="view-all-sellers off-white-text">View All</Link>
                        </div>
                        <div className='off-white-text'>
                            <label htmlFor='name'>Category Name </label>
                            <input type='text' id='name' name='category_name' placeholder='Category Name' />
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    );
};

export default Category;