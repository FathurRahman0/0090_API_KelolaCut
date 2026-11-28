
import jwt from "jsonwebtoken";

export const generateAccessToken = (user) => {
    return jwt.sign(
        {
            id_user: user.id_user,
            email: user.email
        },
        process.env.JWT_ACCESS_SECRET,
        {
            expiresIn: process.env.JWT_ACCESS_EXPIRES || "15m"
        }
    );
};

export const generateRefreshToken = (user) => {
    return jwt.sign(
        {
            id_user: user.id_user
        },
        process.env.JWT_REFRESH_SECRET,
        {
            expiresIn: process.env.JWT_REFRESH_EXPIRES || "7d"
        }
    );
};
