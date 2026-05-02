import React from 'react';
import '../assets/css/Home.css';

const Home = () => {
    return (
        <div>
            <h1 className='home-title'>Home Page</h1>
            <img className='home-image' src='http://localhost:3000/images/BB.jpeg' alt="aint I a beauty">
            </img>
            <span className='home-image'>Ain't I a beauty!</span>
        </div>
    );
};

export default Home;