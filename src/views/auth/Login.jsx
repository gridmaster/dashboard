import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import '../../assets/css/Register.css';

const Login = () => {

    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    const submit = (e) =>{
        e.preventDefault()
        console.log(state)
        }

    return (

        <div className='outerDivStyle registration-background'>
            <div >
 
                <div className='welcomeDivStyle'>
                    <form onSubmit={submit} className='registration-form'>
                    <table>
                        <thead>
                            <tr >
                                <th className='register-headers-text th-header-style' >Welcome to the Jungle</th>
                            </tr>
                            <tr >
                                <th className='register-headers-text'>Please sign in to board the Nostromo</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            <tr >
                                <th className='th-style'>Email</th>
                            </tr>
                            <tr >
                                <th className='tr-td'>
                                    <input onChange={inputHandle} value={state.email} className='tr-style tr-input-style' type='email' name='email' placeholder='Email' id='email' required />
                                </th>
                            </tr>

                            <tr >
                                <th className='th-style'>Password</th>
                            </tr>
                            <tr >
                                <th className='tr-td'>
                                    <input onChange={inputHandle} value={state.password} className='tr-style tr-input-style' type='password' name='password' placeholder='Password' id='password' required />
                                </th>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr >
                                <th>
                                    <div className='register-button'>
                                        <button className='tr-button-style'>Sign in!</button>
                                    </div>
                                    <div>
                                        <p className='p-style p-link-style'>Don't have an account?<Link className='p-signin-link' to="/Register">Sign up!</Link></p>
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
                                        <div className='outer-width'>                   
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

export default Login;


