import React, { useState } from 'react';
import "./Form.css";

function Form() {

    const [userInput, setUserInput] = useState({
        user_name: '',
        user_mail: ''
    });
    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserInput({
            ...userInput,
            [name]: value
        });
    };

    const hideAlert = () => {
        setShowAlert(false);
        setAlertMessage('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!userInput.user_name || !userInput.user_mail) {
            setAlertMessage('Por favor, completa todos los campos con la información correcta.');
            setShowAlert(true);
            setTimeout(hideAlert, 3000); // Alerta desaparecerá después de 3 segundos
        } else if (!/\S+@\S+\.\S+/.test(userInput.user_mail)) {
            setAlertMessage('El correo electrónico no es válido.');
            setShowAlert(true);
            setTimeout(hideAlert, 3000); // Alerta desaparecerá después de 3 segundos
        } else {
            setAlertMessage('¡Gracias por enviar tus datos! Pronto recibirás noticias nuestras.');
            setShowAlert(true);
            setTimeout(hideAlert, 3000); // Confirmación desaparecerá después de 3 segundos
            // Aquí puedes enviar los datos a un servidor o manejarlos como desees
            console.log('Formulario enviado:', userInput);
            // Restablecer los valores del formulario
            setUserInput({
                user_name: '',
                user_mail: ''
            });
        }
    };

    return (
        <>
            {showAlert && <div className="alert">{alertMessage}</div>}
            <div className="form-text">
                <h1 className="form-h1">¡Deja que te enviemos recomendaciones y novedades por correo!</h1>
            </div>
            <div className="from-contianer">
                <form onSubmit={handleSubmit} action="/my-handling-form-page" method="submit" className="form-news">
                    <label for="name">Nombre:</label>
                    <input onChange={handleChange} value={userInput.user_name} type="text" id="name" name="user_name" />

                    <label for="mail">Correo electrónico:</label>
                    <input className="form-email" id="mail" name="user_mail" onChange={handleChange} value={userInput.user_mail} />
                    <input type="submit" value="ENVIAR" />
                </form>
            </div>
        </>
    )
}

export default Form;