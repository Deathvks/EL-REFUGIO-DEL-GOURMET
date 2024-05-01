import db from "./firebase.config.js";
import { push, ref, onValue, set, child, remove } from "firebase/database"

const refRates = ref(db, "/rates");

const getAllRates = () => {
    return new Promise((resolve, reject) => {
        onValue(refRates, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const rates = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
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

const updateRate = (id, name, rate) => {
    return set(child(refRates, id), {
        name: name,
        rate: rate
    });
};

const deleteRate = (id) => {
    return remove(child(refRates, id));
};

export default {
    getAllRates,
    updateRate,
    deleteRate,
    addRate
}