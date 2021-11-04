import React from 'react';
import note404 from '../../assets/note404.png'
import '../error/error.css'

function Error() {
    return(
        <section className="containerError">
            <figure>
                <img src={note404} className="error404" alt="Error notes" />
            </figure>
            <div className="textError">
                <span>Lo siento, página no encontrada</span>
                <p>La página que estás buscando no está disponible</p>
            </div>
            <div className="buttonError">
                <button> <a href="/">De vuelta al inicio</a></button>
            </div>
        </section>
    );
}

export default Error;