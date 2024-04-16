import React, { useState } from 'react';
import "./Form.css";

function Form() {

    const [userInput, setUserInput] = useState({
        user_name: '',
        user_mail: ''
    });
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserInput({
            ...userInput,
            [name]: value
        });
    };

    const hideAlert = () => {
        setAlertMessage('');
        setAlertType('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!userInput.user_name || !userInput.user_mail) {
            setAlertMessage('Por favor, completa todos los campos con la información correcta.');
            setAlertType('error');
            setTimeout(hideAlert, 3000);
        } else if (!/\S+@\S+\.\S+/.test(userInput.user_mail)) {
            setAlertMessage('El correo electrónico no es válido.');
            setAlertType('error');
            setTimeout(hideAlert, 3000);
        } else {
            setAlertMessage('¡Gracias por enviar tus datos! Pronto recibirás noticias nuestras.');
            setAlertType('confirmation');
            setTimeout(hideAlert, 3000);
            setUserInput({
                user_name: '',
                user_mail: ''
            });
        }
    };

    return (
        <>
            {alertMessage && <div className={`alert ${alertType}`}>{alertMessage}</div>}
            <div className="form-text">
                <h1 className="form-h1">¡Deja que te enviemos recomendaciones y novedades por correo!</h1>
            </div>
            <div className="from-contianer">
                <form onSubmit={handleSubmit} action="/my-handling-form-page" method="submit" className="form-news">
                    <label for="name">Nombre:</label>
                    <input onChange={handleChange} value={userInput.user_name} type="text" id="name" name="user_name" />

                    <label for="mail">Correo electrónico:</label>
                    <input className="form-email" id="mail" name="user_mail" onChange={handleChange} value={userInput.user_mail} />
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        </>
    )
}

export default Form;