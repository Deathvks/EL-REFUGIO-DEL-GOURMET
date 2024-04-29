import db from "./firebase.config.js";
import { push, ref } from "firebase/database"

const refRates = ref(db, "/rates");

const getAllRates = () => {

}

const addRate = (name, rate) => {
    return push(refRates, {
        name: name,
        rate: rate
    })
}

export default {
    getAllRates,
    addRate
}