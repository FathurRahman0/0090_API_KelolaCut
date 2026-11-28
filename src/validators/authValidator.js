const validateRegister = ({ nama, email, password }) => {
    const errors = [];

    // Periksa nama
    if (!nama || nama.trim() === "") {
        errors.push("Nama wajib diisi.");
    }

    // Periksa email
    if (!email || email.trim() === "") {
        errors.push("Email wajib diisi.");
    } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.trim())) {
            errors.push("Format email tidak valid.");
        }
    }

    // Periksa password
    if (!password) {
        errors.push("Password wajib diisi.");
    } else if (password.length < 8) {
        errors.push("Password minimal 8 karakter.");
    }

    return {
        isValid: errors.length === 0,
        errors
    };
};

const validateLogin = ({ email, password }) => {
    const errors = [];

    // Periksa email
    if (!email || email.trim() === "") {
        errors.push("Email wajib diisi.");
    }

    // Periksa password
    if (!password) {
        errors.push("Password wajib diisi.");
    }

    return {
        isValid: errors.length === 0,
        errors
    };
};

export default {
    validateRegister,
    validateLogin
};