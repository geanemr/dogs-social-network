import React from "react";

const types = {
  email: {
    regex: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i,
    message: "Preencha um e-mail válido.",
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Preencha um valor");
      return false
    } else if (types[type] && !types[type].regex.text(value)) {
        setError(types[type].message);
        return false;
    } else {
        setError(null);
        return true
    }
  }

  function onChange(event) {
    if (error) validate(event.target.value);
    setValue(event.target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value)
  };
};

export default useForm;
