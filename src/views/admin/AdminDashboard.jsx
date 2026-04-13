import React from 'react';
import '../../assets/css/Admin.css';
import '../../assets/css/Home.css';
import { RiCurrencyLine } from "react-icons/ri";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { GiTakeMyMoney } from "react-icons/gi";
import Chart from 'react-apexcharts';

const AdminDashboard = () => {

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

                <div class="grid-container">
                    <div class="item1"><Chart options={state.options} series={state.series} type='bar' height={350} /></div>
                    <div class="item2"><Chart options={state.options} series={state.series} type='bar' height={350} /></div>
                </div>
                
            </div>
        </div>
    );
};

export default AdminDashboard;