import React from 'react';
import { Link } from 'react-router-dom';
import './GoHome.css';

const GoHome = () => {
    return (
      <div className='goHome'>
        <img className="home" src="홈.png" alt="" />
        <Link to="/">GoHome</Link>
      </div>
    );
};

export default GoHome;
