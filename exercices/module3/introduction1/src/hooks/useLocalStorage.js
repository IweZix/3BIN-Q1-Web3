import { useState } from "react";

/**
 * Personalized hook to use local storage
 * @param {String} key name of the key in local storage
 * @param {Number} initialValue initial value if the key is not found in local storage
 * @returns {Array} value : actual value of the key in local storage
 *                  persistentSetter : function to set the value in local storage
 */
export const useLocalStorage = (key, initialValue) => {
    let currentValue = JSON.parse(localStorage.getItem(key));
    if (currentValue === null) {
        currentValue = initialValue;
    }

    const [ value, setValue ] = useState(currentValue);

    const persistentSetter = (value) => {
        localStorage.setItem(key, JSON.stringify(value));
        setValue(value);
    }

    return [ value, persistentSetter ];
}