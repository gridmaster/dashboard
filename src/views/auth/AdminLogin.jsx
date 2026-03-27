import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import '../../assets/css/Register.css';
import '../../assets/css/Admin.css';
import { admin_login } from '../../store/Reducers/authReducer';


const AdminLogin = () => {

    const dispatch = useDispatch()

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
        dispatch(admin_login(state))
        //console.log(state)
        }

    return (

        <div className='outerDivStyle registration-background'>
            <div >

                <div className='welcomeDivStyle'>
                    <form onSubmit={submit} className='registration-form'>
                    <table>
                        <thead>
                        <tr >
                            <th className='register-headers-text th-header-admin' >Log on to the Jungle!</th>
                        </tr>

                        <tr>
                        <th>
                            <p>The Boss!</p>
                            <div className='admin-logo'>
                                <div className='admin-pic'>
                                    <img className='img-shape' src="http://localhost:3000/images/angry ape.jpg" alt="The Boss!"/>
                                </div>
                            </div>
                            </th>
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
                                        <button className='tr-button-style admin-button'>Log in!</button>
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

export default AdminLogin;


