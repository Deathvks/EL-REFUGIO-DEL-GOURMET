import db from "./firebase.config.js";
import { push, ref, onValue } from "firebase/database"

const refRates = ref(db, "/rates");

const getAllRates = () => {
    return new Promise((resolve, reject) => {
        onValue(refRates, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const rates = Object.keys(data).map((key) => data[key]);
                resolve(rates);
            } else {
                resolve([]);
            }
        }, (error) => {
            reject(error);
        });
    });
};

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