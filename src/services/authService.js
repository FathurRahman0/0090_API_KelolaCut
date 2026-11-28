import bcrypt from "bcrypt";
import User from "../models/User.js";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt.js";

// Error khusus untuk login gagal (status 401 = tidak berhak masuk)
const createUnauthorizedError = () => {
    const error = new Error("Email atau password salah.");
    error.statusCode = 401;
    return error;
};

const registerOwner = async ({ nama, email, password }) => {
    // 1. Pastikan belum ada akun Owner
    const totalUsers = await User.count();

    if (totalUsers > 0) {
        throw new Error("Akun Owner sudah terdaftar.");
    }

    // 2. Periksa apakah email sudah digunakan
    const existingUser = await User.findOne({
        where: { email }
    });

    if (existingUser) {
        throw new Error("Email sudah terdaftar.");
    }

    // 3. Hash password sebelum disimpan
    const password_hash = await bcrypt.hash(password, 10);

    // 4. Simpan akun Owner ke database
    const user = await User.create({
        nama,
        email,
        password_hash
    });

    // 5. Jangan kirim password hash ke response
    return {
        id_user: user.id_user,
        nama: user.nama,
        email: user.email
    };
};

const loginOwner = async ({ email, password }) => {
    // 1. Cari user berdasarkan email
    const user = await User.findOne({
        where: { email: email.trim() }
    });

    if (!user) {
        throw createUnauthorizedError();
    }

    // 2. Cocokkan password dengan hash di database
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordValid) {
        throw createUnauthorizedError();
    }

    // 3. Buat Access Token dan Refresh Token
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    // 4. Jangan kirim password hash ke response
    return {
        user: {
            id_user: user.id_user,
            nama: user.nama,
            email: user.email
        },
        accessToken,
        refreshToken
    };
};

export default {
    registerOwner,
    loginOwner
};