import { useState } from "react";
import RateService from "../../services/firebase/rates.service.js";
import "./Form.css";

function Form() {
    const [name, setName] = useState("");
    const [rate, setRate] = useState("");
    const [alert, setAlert] = useState("");
    const [alertType, setAlertType] = useState("");
    const [rates, setRates] = useState([]);
    const [editRateIndex, setEditRateIndex] = useState(null);

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

    const editRate = (index) => {
        setEditRateIndex(index);
        setName(rates[index].name);
        setRate(rates[index].rate);
    };

    const saveEditedRate = () => {
        let auxRates = [...rates];
        auxRates[editRateIndex] = { name, rate };
        setRates(auxRates);
        setName("");
        setRate("");
        setEditRateIndex(null);
    };

    const deleteRate = (index) => {
        let auxRates = [...rates];
        auxRates.splice(index, 1);
        setRates(auxRates);
    };

    return (
        <>
            <h1 className="form-h1">¡Déjanos una reseña!</h1>
            {alert && <p className={alertType}>{alert}</p>}
            <form onSubmit={addNewRate}>
                <label htmlFor="name" className="name">Nombre:</label>
                <input type="text" id="name" name="name" value={name} onChange={changeName} className={alertType === "error-message" ? "error" : ""} />

                <label htmlFor="rate" className="rate">Reseña:</label>
                <input type="text" id="rate" name="rate" value={rate} onChange={changeRate} className={alertType === "error-message" ? "error" : ""} />

                <button type="submit" className="sub">Añadir reseña</button>
                {editRateIndex !== null && <button type="button" onClick={saveEditedRate} className="save-changes-button">Guardar cambios</button>}
            </form>

            <div className="form-container">
                {
                    rates.map((r, index) => (
                        <div key={index} className="form-rate">
                            <p>{r.name}: {r.rate}</p>
                            <div>
                                <button onClick={() => editRate(index)} className="form-edit">Editar</button>
                                <button onClick={() => deleteRate(index)} className="form-delete">Eliminar</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default Form;
