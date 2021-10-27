import React from "react";
import Logo from '../logo/logo';
import notesImg from '../../assets/notes.png'
import '../register/register.css'

function Register () {
    return(
        <section className="registerSection">
            <div className="desktopContainer">
                <div className="containerLogoDesktop">
                    <img src={notesImg} className="viewDesktop" alt="dispositivos" />
                </div>
            </div>
            <div className="registerContainer">
                <Logo/>
                <div className="registerSubtitle">
                    <h2 className="registerH2">¡Registrate ahora.. Te ayudará a tener muchos apuntes y recuerdes cada uno de ellos!</h2>
                </div>
                <div className="registerTitle">
                    <h1 className="registerH1">REGISTRATE</h1>
                </div>
                <form className="formRegister">
                    <div className="inputList">
                        <input className="formInput inputUser" type="text" placeholder="Nombre" required/><br />
                        <input className="formInput inputGmail" type="text" placeholder="Correo electrónico" required/><br />
                        <input className="formInput inputPassword" type="password" placeholder="Contraseña" required/><br />
                        <input className="formInput inputPasswordConfirmd" type="password" placeholder="Confirmar contraseña" required/><br />
                    </div>
                    <div className="registerButton">
                    <input className="registerBtn" type="submit" value="Crear cuenta"/>
                    </div>
                </form>
                <div className="registerLoginLink">
                    <span>¿Ya tienes cuenta? Ingresa <a href="/">aquí</a></span>
                </div>
            </div>
        </section>
    );
}

export default Register