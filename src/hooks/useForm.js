import { useState } from 'react';

const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const onResetForm = () => {
        setFormState(initialForm);
    };


    return {
        ...formState,
        onInputChange, // Cambiado de onInputChangeName a onInputChange
        onResetForm
    };
};


export default useForm;
