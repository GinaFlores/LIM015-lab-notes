import React from 'react';
import Logo from '../components/Logo';
import notesImg from '../assets/notes.png'
import '../css/login.css'

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
                        <input className="loginBtn" type="submit" value="Ingresar"/>
                    </div>
                </form>
                <div className="loginRegisterLink">
                    <span>¿No tienes cuenta? Regístrate <a href="/register">aquí</a></span>
                </div>
            </div>
        </section>
    );
}

export default Login