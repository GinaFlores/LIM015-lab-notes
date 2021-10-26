import React from 'react';
import logoNotes from '../../assets/logoNotes.png'
import '../login/login.css'

function Logo () {
    return(
        <div className="logo">
            <img src={logoNotes} className="logoImg" alt="logo notes" />
        </div>
    );
}

export default Logo;