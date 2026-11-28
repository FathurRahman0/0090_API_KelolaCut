import authService from "../services/authService.js";
import authValidator from "../validators/authValidator.js";

const register = async (req, res) => {
    try {
        // 1. Validasi input
        const validation = authValidator.validateRegister(req.body);

        if (!validation.isValid) {
            return res.status(400).json({
                success: false,
                message: "Validasi gagal.",
                errors: validation.errors
            });
        }

        // 2. Jalankan proses registrasi
        const user = await authService.registerOwner(req.body);

        // 3. Kirim response berhasil
        return res.status(201).json({
            success: true,
            message: "Registrasi Owner berhasil.",
            data: user
        });

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const login = async (req, res) => {
    try {
        // 1. Validasi input
        const validation = authValidator.validateLogin(req.body);

        if (!validation.isValid) {
            return res.status(400).json({
                success: false,
                message: "Validasi gagal.",
                errors: validation.errors
            });
        }

        // 2. Jalankan proses login
        const result = await authService.loginOwner(req.body);

        // 3. Kirim response berhasil
        return res.status(200).json({
            success: true,
            message: "Login berhasil.",
            data: result
        });

    } catch (error) {
        // Login gagal = 401, selain itu dianggap error server = 500
        const statusCode = error.statusCode || 500;

        if (statusCode === 500) {
            console.error("Login error:", error.message);
        }

        return res.status(statusCode).json({
            success: false,
            message: statusCode === 500
                ? "Terjadi kesalahan pada server."
                : error.message
        });
    }
};

export default {
    register,
    login
};