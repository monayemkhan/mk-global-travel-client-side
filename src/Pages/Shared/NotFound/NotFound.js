import React from 'react';
import { NavLink } from 'react-router-dom';
import NotFoundImg from '../../../images/404-not-found.jpg';

const NotFound = () => {
    return (
        <div className="text-center">
            <img className="w-50" src={NotFoundImg} alt="" />
            <p>The Requested URL/badpage was not found this server. Go to- <NavLink to="/home"> Home</NavLink>
            </p>
        </div>
    );
};

export default NotFound;