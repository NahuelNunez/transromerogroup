import React, { useState } from 'react'

export const useFormHook = (initialValue = {}) => {
    const [input, setInput] = useState(initialValue);
    const handleChange = ({ target }) => {

        const { name, value } = target;
        setInput(prev => ({
            ...prev,
            [name]: value,
        }));






    };

    const reset = () => {
        setInput(initialValue)
    }
    return {
        handleChange,
        input,
        setInput,
        reset
    }

}
