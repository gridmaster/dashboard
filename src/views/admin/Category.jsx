import React, { useState } from 'react';
import '../../assets/css/Orders.css'
import '../../assets/css/Admin.css';
import '../../assets/css/Home.css';
import { RiCurrencyLine } from "react-icons/ri";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaArrowsDownToLine } from "react-icons/fa6";
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';


const Category = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [SearchValue, setSearchValue] = useState('')
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
        <div className='dash-content-first'>

            <div className='div-chart-outer'>

                <div className='dash-bottom-outer'>
                    <select onChange={(e) => setParPage(parseInt(e.target.value))} className='orders-select'>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>
                    <input className='orders-search' type="text" placeholder='search' />

                        
                    <div className='bottom-table-wrap'>

                        <table className='orders-table-bottom'>
                            {/* <thead className='orders-table-bottom add-underline'>
                                <tr>
                                    <th scope='row' className='bottom-table-column'>Order Id</th>
                                    <th scope='row' className='bottom-table-column'>Price</th>
                                    <th scope='row' className='bottom-table-column'>Payment Status</th>
                                    <th scope='row' className='bottom-table-column'>Order Status</th>
                                    <th scope='row' className='bottom-table-column'>Action</th>
                                    <th scope='row' className='bottom-table-column'><FaArrowsDownToLine /></th>
                                </tr>
                            </thead> */}
                            {/* <tbody>
                                {                                
                                    [1,2,3,4,5].map((d, i) => <tr key={i}>
                                    <td className='bottom-table-tr'>#34344</td>
                                    <td className='bottom-table-tr'>$454</td>
                                    <td className='bottom-table-tr'>Pending</td>
                                    <td className='bottom-table-tr'>Pending</td>
                                    <td className='bottom-table-tr'>View</td>
                                    <td className='bottom-table-tr'>Wojhkly hof!</td>
                                </tr>)
                                }
                            </tbody> */}
                        </table>
                       
                    </div>

                </div>
                
                    <div className={ state ? 'block-border' : 'hidden' }>
                        
                    </div>


            </div>
        </div>
    );

};

export default Category;