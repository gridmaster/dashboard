import React from 'react';
import '../../assets/css/Register.css';

const Register = () => {
    return (
        <div className='outerDivStyle'>
            <div >
                <div className='welcomeDivStyle'>
                    <form>
                        <table>
                            <tr >
                                <th className='th-header-style' >Welcome to the Jungle</th>
                            </tr>
                            <tr >
                                <p className='p-style'>Please register to board the Nostromo</p>
                            </tr>
                        
                            <tr>
                                <tr >
                                    <label className='tr-style' htmlFor="name">Name</label>
                                </tr>
                                <tr >
                                    <input className='tr-style tr-input-style' type='text' name='name' placeholder='Name' id='name' required />
                                </tr>
                            </tr>

                             <tr>
                                <tr >
                                    <label className='tr-style' htmlFor="email">Email</label>
                                </tr>
                                <tr >
                                    <input className='tr-style tr-input-style' type='text' name='email' placeholder='Email' id='email' required />
                                </tr>
                            </tr>

                            <tr>
                                <tr >
                                    <label className='tr-style' htmlFor="password">Password</label>
                                </tr>
                                <tr >
                                    <input className='tr-style tr-input-style' type='text' name='password' placeholder='Password' id='password' required />
                                </tr>
                            </tr>

                            <tr >
                                <input className='tr-style tr-checkbox-style' type='checkbox' name='checkbox' id='checkbox' />
                                <label className='tr-style tr-lable-style' htmlFor='checkbox'> I agree to privacy policy & terms</label>
                            </tr>

                        </table>

                        <div className='tr-button-center'>
                            <button className='tr-style tr-button-style'>Sign up!</button> 
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;


