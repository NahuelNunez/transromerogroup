import { object } from "framer-motion/client";
import React, { useState } from "react";

export const useFormHook = (initialValue = {}) => {
  const [input, setInput] = useState(initialValue);
  const [error, setError] = useState(initialValue);
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!input.titulo) newErrors.titulo = "El titulo es obligatorio";
    if (!input.descripcion)
      newErrors.descripcion = "La descripcion es obligatoria";
    if (!input.precio) newErrors.precio = "El precio es invalido";
    if (!input.tipo) newErrors.tipo = "Selecciona el tipo de promoción";
    // if (!input.valida_hasta) newErrors.valida_hasta = 'Fecha requerida'

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const reset = () => {
    setInput(initialValue);
    setError({});
  };
  return {
    handleChange,
    input,
    setInput,
    reset,
    validate,
    error,
  };
};
