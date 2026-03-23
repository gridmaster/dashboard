import React from 'react';
import '../../assets/css/Register.css';

const Register = () => {
    return (
        <div className='outerDivStyle'>
            <div >
                <div className='welcomeDivStyle'>
                   <table>
                        <tr >
                            <h2 className='tr-style h2-Style' >Welcome to the Jungle</h2>
                        </tr>
                        <tr >
                            <p className='tr-style p-style'>Please register for the Nostromo</p>
                        </tr>
                    
                        <tr>
                            <tr >
                                <label className='tr-style' htmlFor="name">Name</label>
                            </tr>
                            <tr >
                                <input className='tr-style tr-input-style' type='text' name='name' placeholder='Name' id='name' required />
                            </tr>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Register;


