import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Importa la biblioteca EmailJS

import "./contacto.css";

const Contacto = () =>
{
    const [ nombre, setNombre ] = useState( '' );
    const [ correo, setCorreo ] = useState( '' );
    const [ mensaje, setMensaje ] = useState( '' );

    const handleSubmit = ( e ) =>
    {
        e.preventDefault();

        // Configura tus credenciales de SMTP.js
        emailjs.send( 'smtp_service', 'template_id', {
            to_email: 'ziortzarl@gmail.com>', // Tu correo personal
            from_name: nombre,
            message: mensaje,
        } )
            .then( ( response ) =>
            {
                console.log( 'Correo enviado con éxito:', response );
                alert( '¡Tu mensaje ha sido enviado! Me pondré en contacto lo antes posible.' );
            } )
            .catch( ( error ) =>
            {
                console.error( 'Error al enviar el correo:', error );
                alert( 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.' );
            } );

        // Restablece los campos del formulario.
        setNombre( '' );
        setCorreo( '' );
        setMensaje( '' );
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre:</label>
            <input
                type="text"
                id="nombre"
                name="nombre"
                value={nombre}
                onChange={( e ) => setNombre( e.target.value )}
            />

            <label htmlFor="correo">Correo electrónico:</label>
            <input
                type="email"
                id="correo"
                name="correo"
                value={correo}
                onChange={( e ) => setCorreo( e.target.value )}
            />

            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
                id="mensaje"
                name="mensaje"
                value={mensaje}
                onChange={( e ) => setMensaje( e.target.value )}
            />

            <button type="submit">Enviar mensaje</button>
        </form>
    );
};

export default Contacto;
