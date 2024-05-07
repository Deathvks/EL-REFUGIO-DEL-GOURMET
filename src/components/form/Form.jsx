import { useState, useEffect } from "react";
import RateService from "../../services/firebase/rates.service.js";
import "./Form.css";

function Form() {
    const [name, setName] = useState("");
    const [rate, setRate] = useState("");
    const [alert, setAlert] = useState("");
    const [alertType, setAlertType] = useState("");
    const [rates, setRates] = useState([]);
    const [rateBeingEdited, setRateBeingEdited] = useState(null);

    const getAllRates = () => {
        RateService.getAllRates().then((ratesData) => {
            console.log(ratesData)
            setRates([...ratesData]);
        }).catch((error) => {
            console.error(error);
        });
    }

    useEffect(() => {
        getAllRates();
    }, []);

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

        getAllRates();
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

    const editRate = (r) => {
        setRateBeingEdited(r);
        setName(r.name);
        setRate(r.rate);
    };

    const saveEditedRate = () => {
        let rateId = rateBeingEdited.id;
        RateService.updateRate(rateId, name, rate).then(() => {
            setName("");
            setRate("");
            getAllRates();
            setRateBeingEdited(null);
        }).catch((error) => {
            console.error(error);
        });
    };

    const cancelEdit = () => {
        setName("");
        setRate("");
        setRateBeingEdited(null);
    };

    const deleteRate = (rateId) => {
        console.log("vay aborrar", rateId)
        RateService.deleteRate(rateId).then(() => {
            console.log("se borró")
            getAllRates();
        }).catch((error) => {
            console.error(error);
        });
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
                {rateBeingEdited !== null && (
                    <>
                        <button type="button" onClick={saveEditedRate} className="save-changes-button">Guardar cambios</button>
                        <button type="button" onClick={cancelEdit} className="cancel-edit-button">Cancelar edición</button>
                    </>
                )}
            </form>

            <div className="form-container">
                {
                    rates.map((r, index) => (
                        <div key={index} className="form-rate">
                            <p>{r.name}: {r.rate}</p>
                            <div>
                                <button onClick={() => editRate(r)} className="form-edit">Editar</button>
                                <button onClick={() => deleteRate(r.id)} className="form-delete">Eliminar</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default Form;
