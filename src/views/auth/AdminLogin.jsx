import React, { useState } from 'react';

import '../../assets/css/Register.css';

const AdminLogin = () => {

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
                            <div className='admin-logo'>
                                <div className='admin-pic'>
                                    <img src="http://localhost:3000/images/angry ape.jpg" alt="image"/>
                                </div>
                            </div>
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
                                        <button className='tr-button-style'>Log in!</button>
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


