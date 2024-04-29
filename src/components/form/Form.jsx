import { useState } from "react";
import RateService from "../../services/firebase/rates.service.js";
import "./Form.css";

function Form() {

    const [name, setName] = useState("");
    const [rate, setRate] = useState("");

    const changeName = (e) => {
        setName(e.target.value)
    }

    const changeRate = (e) => {
        setRate(e.target.value)
    }

    const addNewRate = (e) => {
        e.preventDefault();

        saveRate(e.target.name.value, e.target.rate.value);
    }

    const saveRate = (name, rate) => {
        RateService.addRate(name, rate).then((response) => {
            console.log("guardado")
        })
    }

    return (
        <>
            <p>{alert}</p>
            <form onSubmit={addNewRate}>
                <label htmlFor="name" className="name">Nombre:</label>
                <input type="text" id="name" name="name" value={name} onChange={changeName}/>

                <label htmlFor="rate" className="rate">Reseña:</label>
                <input type="text" id="rate" name="rate" value={rate} onChange={changeRate}/>

                <button type="submit" className="sub">Añadir reseña</button>
            </form>
        </>
    )
}

export default Form;