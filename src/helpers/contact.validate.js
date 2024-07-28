const validateContact = (data) => {
    const errors = {};
    let isValid = true;

    if (!data.name) {
        errors.name = "El nombre es requerido.";
        isValid = false;
    }else if (data.name.length < 3) {
        errors.name = "El nombre debe tener al menos 3 caracteres.";
        isValid = false;
    }

    if (!data.email) {
        errors.email = "El correo electrónico es requerido.";
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "El correo electrónico no es válido.";
        isValid = false;
    }

    if (!data.message) {
        errors.message = "El mensaje es requerido.";
        isValid = false;
    }

    return { isValid, errors };
};

export default validateContact;