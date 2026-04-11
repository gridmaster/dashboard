import React from 'react';
import '../../assets/css/Admin.css';
import '../../assets/css/Home.css';
import { RiCurrencyLine } from "react-icons/ri";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { GiTakeMyMoney } from "react-icons/gi";

const AdminDashboard = () => {
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

        </div>
    );
};

export default AdminDashboard;