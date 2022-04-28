import React from 'react';
import '../../Styles/NavStyle/NavStyle.css';


function Navigation() {
  return (
    <div className="nav">
        
            <div className="nav__logo">
                <h1>Movie-House</h1>
            </div>
            <div className="nav__container">
            <div className="nav__list">
                <ul>
                    <li>Home</li>
                    <li>Movies</li>
                    <li>Celebrities</li>
                </ul>
            </div>
            
            <div className="nav__sign__up">
                <ul>
                    <li>My Account</li>
                    <li>Login</li>
                </ul>
            </div>
            </div>

    </div>
  )
}

export default Navigation;