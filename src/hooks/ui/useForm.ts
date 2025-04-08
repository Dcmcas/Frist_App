import { useState } from 'react';

const useForm = <T extends Object>(intialForm: T) => {
    const [ isSubmitting, setIsSubmitting ] = useState(false);
    const [ form, setForm ] = useState<T>(intialForm);

    const clearForm = () => {
        setForm(intialForm);
    }

    const setFieldValue = (field: keyof T, value: string): void => {
        setForm({
            ...form,
            [field]: value
        });
    }

    const asyncSubmit = async (onSubmit: (values: T) => Promise<void>): Promise<void> => {
        setIsSubmitting(true);
        await onSubmit(form);
        setIsSubmitting(false);
    }

    return { 
        form,
        isSubmitting,

        asyncSubmit,
        clearForm,
        setFieldValue
    }
}

export default useForm;