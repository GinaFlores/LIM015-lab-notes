import React from 'react';
import logoHome from '../assets/logoNotes.png'
import signOut from '../assets/sign-out-alt-solid.svg'
import '../css/home.css'

function Home () {
    return(
        <section>
            <header >
                <div className="headerLogo">
                    <img className="logoHome" src={logoHome} alt="Notes" />
                </div>
                <div className="headerInput">
                    <input className="inputSeach iconSeach" type="text" placeholder="Busca lo que quieras"/>
                </div>
                <div className="headerSignOut">
                    <img className="signOut" src={signOut} alt="Notes" />
                </div>
            </header>

            <hr style={{
                color: '#616161',
            }}/>

            <h1>Home</h1>
        </section>
    );
}

export default Home;