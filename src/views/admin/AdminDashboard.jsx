import React from 'react';
import { RiCurrencyLine } from "react-icons/ri";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { GiTakeMyMoney } from "react-icons/gi";
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';
import '../../assets/css/Admin.css';
import '../../assets/css/Home.css';

const AdminDashboard = () => {

    // const state = {
    //     series: [
    //         {
    //             name: 'Orders',
    //             data : [23,34,45,45,65,43,44,43,32,20,23,34]
    //         },
    //         {
    //             name: 'Revenue',
    //             data : [13,32,45,37,54,43,34,33,32,29,43,44]
    //         },
    //         {
    //             name: 'Sellers',
    //             data : [55,53,57,78,86,67,58,59,76,77,54,43]
    //         }
    //     ],
    //     options : {
    //         color : ['#181eee8', '#181eee8'],
    //         plotOptions : {
    //             radius : 30
    //         },
    //         chart : {
    //             background : 'transparent',
    //             foreColor : '#d0d2d6'
    //         },
    //         dataLabels : {
    //             enabled : false
    //         },
    //         strock : {
    //             show : true,
    //             curve : ['smooth', 'straight', 'stepline'],
    //             lineCap : 'butt',
    //             colors : '#f0f0f0',
    //             width : .5,
    //             dashArray : 0
    //         },
    //         xaxis : {
    //             categories : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    //         },
    //         legend : {
    //             position : 'top'
    //         },
    //         responsive : [
    //             {
    //             breakpoint : 565,
    //             yaxis : {
    //                 cateories : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    //             },
    //             options : {
    //                 plotOptions : {
    //                     bar : {
    //                         horizontal : true
    //                     }
    //                 },
    //                 chart : {
    //                     height : "550px"
    //                 }
    //             }
    //         }
    //         ]
            
    //     }

    // }

    return (
        <div>
            <span>Admin Dashboard</span>
        </div>

        /* <div className='dash-content-first'>

            <div className='sum-cards'>
                <div className='dash-summary-cards card-BGColor-1'>
                    <div className='dash-cards'>
                        <span className='dash-title no-hover card-BGColor-1'>Total Sales</span>
                        <span className='dash-data no-hover card-BGColor-1'>$3434</span>

                    </div>

                    <div className='img-icon card-IconColor-1'>
                        <RiCurrencyLine className='img-position-icon'/>
                    </div>
                </div>
            </div>
            
            <div className='sum-cards'>
                <div className='dash-summary-cards card-BGColor-2'>
                    <div className='dash-cards'>
                        <span className='dash-title no-hover card-BGColor-2'>Products</span>
                        <span className='dash-data no-hover card-BGColor-2'>55</span>

                    </div>

                    <div className='img-icon card-IconColor-2'>
                        <MdProductionQuantityLimits className='img-position-icon'/>
                    </div>
                </div>
            </div>

            <div className='sum-cards'>
                <div className='dash-summary-cards card-BGColor-3'>
                    <div className='dash-cards'>
                        <span className='dash-title no-hover card-BGColor-3'>Sellers</span>
                        <span className='dash-data no-hover card-BGColor-3'>10</span>

                    </div>

                    <div className='img-icon  card-IconColor-3'>
                        <IoIosPeople className='img-position-icon'/>
                    </div>
                </div>
            </div>
            
            <div className='sum-cards'>
                <div className='dash-summary-cards card-BGColor-2'>
                    <div className='dash-cards'>
                        <span className='dash-title no-hover card-BGColor-4'>Orders</span>
                        <span className='dash-data no-hover card-BGColor-4'>54</span>

                    </div>

                    <div className='img-icon card-IconColor-2'>
                        <GiTakeMyMoney className='img-position-icon'/>
                    </div>
                </div>
            </div>

            <div className='div-chart-outer'>

                <div className="grid-container">
                    <div className="item1">
                        <Chart className="item1 chart-position" options={state.options} series={state.series} type='bar' height={350} />
                    </div>
                    <div className="item2">
                        <div className='div-seller-msg'>
                            <span className="recient-sellers recient-format off-white-text">Recient Seller Message</span>
                            <Link className="view-all-sellers off-white-text ">View All</Link>
                        </div>
                        <div className='card-seller-message'>
                            <img className='seller-msg-icon' src="http://localhost:3000/images/BB.jpeg" alt='googlie mooglie!'></img>
                            <div className='admin-message-block'>
                                <Link className="view-all-sellers admin-link">Admin</Link>
                                <span className="time-since-sent">2 days ago</span>
                                <div className='admin-message'>How are you?</div>
                            </div>
                        </div>
                        <div className='card-seller-message'>
                            <img className='seller-msg-icon' src="http://localhost:3000/images/admin image 1.jpg" alt='googlie mooglie!'></img>
                           <div className='admin-message-block'>
                                <Link className="view-all-sellers admin-link">Admin</Link>
                                <span className="time-since-sent">1 day ago</span>
                                <div className='admin-message'>Great googlie mooglie!</div>
                            </div>
                        </div>
                        <div className='card-seller-message'>
                            <img className='seller-msg-icon' src="http://localhost:3000/images/Bart.png" alt='googlie mooglie!'></img>
                           <div className='admin-message-block'>
                                <Link className="view-all-sellers admin-link">Admin</Link>
                                <span className="time-since-sent">2 days ago</span>
                                <div className='admin-message'>Miss me yet??</div>
                            </div>
                         </div>
                        <div className='card-seller-message'>
                            <img className='seller-msg-icon' src="http://localhost:3000/images/dh.jpg" alt='googlie mooglie!'></img>
                           <div className='admin-message-block'>
                                <Link className="view-all-sellers admin-link">Admin</Link>
                                <span className="time-since-sent">4 days ago</span>
                                <div className='admin-message'>Kiss me baby!!</div>
                            </div>
                         </div>
                    </div>
                </div>

                <div className='dash-bottom-outer'>
                    <div className='div-bottom-flex'>
                        <h2 className='h2-bottom'>Recent Orders</h2>
                        <Link className='link-bottom'>View All</Link>
                    </div>
                        
                    <div className='bottom-table-wrap'>

                        <table className='bottom-table'>
                            <thead className='bottom-table'>
                                <tr>
                                    <th scope='row' className='bottom-table-column'>Order Id</th>
                                    <th scope='row' className='bottom-table-column'>Price</th>
                                    <th scope='row' className='bottom-table-column'>Payment Status</th>
                                    <th scope='row' className='bottom-table-column'>Order Status</th>
                                    <th scope='row' className='bottom-table-column'>Active</th>                               
                                </tr>
                            </thead>
                            <tbody>
                                {                                
                                    [1,2,3,4,5].map((d, i) => <tr key={i}>
                                    <td className='bottom-table-tr'>#34344</td>
                                    <td className='bottom-table-tr'>$454</td>
                                    <td className='bottom-table-tr'>Pending</td>
                                    <td className='bottom-table-tr'>Pending</td>
                                    <td className='bottom-table-tr'>View</td>
                                </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
        </div> */
    );
};

export default AdminDashboard;