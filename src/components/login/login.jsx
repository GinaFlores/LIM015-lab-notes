import React from 'react';
import Logo from '../logo/logo';
import notesImg from '../../assets/notes.png'
import '../login/login.css'

function Login () {
    return(
        <section className="loginSection">
            <div className="desktopContainer">
                <div className="containerLogoDesktop">
                    <img src={notesImg} className="viewDesktop" alt="dispositivos" />
                </div>
            </div>
            <div className="loginContainer">
                <Logo/>
                <div className="loginSubtitle">
                    <h2 className="loginH2">¡Bienvenidos!</h2>
                </div>
                <div className="loginTitle">
                    <h1 className="loginH1">INICIA SESIÓN</h1>
                </div>
                <form className="formLogin">
                    <div className="inputList">
                        <input className="formInput inputGmail" type="text" placeholder="Correo electrónico" required/><br />
                        <input className="formInput inputPassword" type="password" placeholder="Contraseña" required/><br />
                    </div>
                    <div className="loginButton">
                        <input className="loginBtn" type="submit" placeholder="Ingresar"/>
                    </div>
                </form>
                <div className="loginRgisterLink">
                    <span>¿No tienes cuenta? Regístrate <a href="/#">aquí</a></span>
                </div>
            </div>
        </section>
    );
}

export default Login