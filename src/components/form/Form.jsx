import { useState } from "react";
import RateService from "../../services/firebase/rates.service.js";
import "./Form.css";

function Form() {
    const [name, setName] = useState("");
    const [rate, setRate] = useState("");
    const [alert, setAlert] = useState("");
    const [alertType, setAlertType] = useState("");
    const [rates, setRates] = useState([]);

    const changeName = (e) => {
        setName(e.target.value);
    };

    const changeRate = (e) => {
        setRate(e.target.value);
    };

    const addNewRate = (e) => {
        e.preventDefault();
        if (!name.trim() || !rate.trim()) {
            setAlert("Los campos no pueden estar vacíos");
            setAlertType("error-message");
            setTimeout(() => {
                setAlert("");
            }, 3000);
            return;
        }
        saveRate(name, rate);

        let auxRates = rates;
        auxRates.push({
            name: e.target.name.value,
            rate: e.target.rate.value
        });

        setRates([...auxRates])
    };

    const saveRate = (name, rate) => {
        RateService.addRate(name, rate).then(() => {
            setAlert("Reseña añadida con éxito");
            setAlertType("success-message");
            setName("");
            setRate("");
            setTimeout(() => {
                setAlert("");
            }, 3000);
        }).catch(error => {
            setAlert("Error al guardar la reseña");
            setAlertType("error-message");
            setTimeout(() => {
                setAlert("");
            }, 3000);
            console.error(error);
        });
    };

    return (
        <>
            <h1 className="form-h1">¡Déjanos una reseña!</h1>
            {alert && <p className={alertType}>{alert}</p>}
            <form onSubmit={addNewRate}>
                <label htmlFor="name" className="name">Nombre:</label>
                <input type="text" id="name" name="name" value={name} onChange={changeName} className={alert ? "error" : ""} />

                <label htmlFor="rate" className="rate">Reseña:</label>
                <input type="text" id="rate" name="rate" value={rate} onChange={changeRate} className={alert ? "error" : ""} />

                <button type="submit" className="sub">Añadir reseña</button>
            </form>

            <div className="form-container">
                {
                    rates.map((r, index) => (
                        <p key={index} className="form-rate">{r.name}: {r.rate}</p>
                    ))
                }
            </div>



        </>
    );
}

export default Form;