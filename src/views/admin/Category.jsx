import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';

import '../../assets/css/Category.css'

const Category = () => {

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