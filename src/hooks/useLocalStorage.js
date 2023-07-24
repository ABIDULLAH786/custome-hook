// hooks/useLocalStorage.js
import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    // Get the initial state from localStorage, if available
    const storedValue = localStorage.getItem(key);
    const initial = storedValue ? JSON.parse(storedValue) : initialValue;

    // Create the state variable
    const [value, setValue] = useState(initial);

    // Sync state changes with localStorage
    const updateLocalStorage = (newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue));
        setValue(newValue);
    };

    return [value, updateLocalStorage];
};

export default useLocalStorage;