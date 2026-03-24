import React from 'react';
import '../../assets/css/Register.css';

const Register = () => {
    return (

        <div className='outerDivStyle'>
            <div >
 
                <div className='welcomeDivStyle'>
                                   <form className='registration-form'>
                    <table>
                        <thead>
                            <tr >
                                <th className='th-header-style' >Welcome to the Jungle</th>
                            </tr>
                            <tr >
                                <th className='p-style'>Please register to board the Nostromo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <th className='th-style'>Name</th>
                            </tr>
                            <tr >
                                <td>
                                <input className='tr-input-style tr-style' type='text' name='name' placeholder='Name' id='name' required />
                                </td>
                            </tr>

                            <tr >
                                <th className='th-style'>Email</th>
                            </tr>
                            <tr >
                                <th>
                                    <input className='tr-style tr-input-style' type='text' name='email' placeholder='Email' id='email' required />
                                </th>
                            </tr>

                            <tr >
                                <th className='th-style'>Password</th>
                            </tr>
                            <tr >
                                <th>
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
                                        <button className='tr-style tr-button-style'>Sign up!</button>
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


