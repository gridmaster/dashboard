import React from 'react';
import {Link} from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import '../../assets/css/Register.css';

const Register = () => {
    return (

        <div className='outerDivStyle registration-background'>
            <div >
 
                <div className='welcomeDivStyle'>
                    <form className='registration-form'>
                    <table>
                        <thead>
                            <tr className='tr-td'>
                                <th className='register-headers-text th-header-style' >Welcome to the Jungle</th>
                            </tr>
                            <tr className='tr-td'>
                                <th className='register-headers-text'>Please register to board the Nostromo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='tr-td'>
                                <th className='th-style'>Name</th>
                            </tr>
                            <tr className='tr-td'>
                                <td >
                                <input className='tr-style tr-input-style' type='text' name='name' placeholder='Name' id='name' required />
                                </td>
                            </tr>

                            <tr >
                                <th className='th-style'>Email</th>
                            </tr>
                            <tr >
                                <th className='tr-td'>
                                    <input className='tr-style tr-input-style' type='text' name='email' placeholder='Email' id='email' required />
                                </th>
                            </tr>

                            <tr >
                                <th className='th-style'>Password</th>
                            </tr>
                            <tr >
                                <th className='tr-td'>
                                    <input className='tr-style tr-input-style' type='text' name='password' placeholder='Password' id='password' required />
                                </th>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr >
                                <th>
                                    <div className='checkbox-container'>
                                        <input className='tr-checkbox-style' type='checkbox' name='checkbox' id='checkbox' />

                                        <label className='th-label th-label-style'> I agree to privacy policy & terms</label>

                                    </div>
                                    <div className='register-button'>
                                        <button className='tr-button-style'>Sign up!</button>
                                    </div>
                                    <div>
                                        <p className='p-style p-link-style'>Already have an account?<Link className='p-signin-link' to="/login">Sign In!</Link></p>
                                    </div>

                                    <div>
                                        <div className='styled-line'>
                                            <hr className='styled-hr'></hr>
                                            <div>
                                                <span className='styled-or'>  Or  </span>
                                            </div>
                                            <hr className='styled-hr'></hr>


                                        </div>
                                    </div>
                                        <div>                                       
                                            <div className='div-inline register-alt-button register-button '>
                                                <button className='googface-button-style button media-button-orange'><FaGoogle /></button>
                                            </div>
                                            <div className='div-inline register-alt-button register-button'>
                                                <button className='googface-button-style button media-button-blue'><FaFacebook /></button>
                                            </div>
                                        </div>
                                </th>           
                            </tr>
                        </tfoot>
                    </table>
                    </form>
                </div>

            </div>
    
        </div>
   
    );
};

export default Register;


