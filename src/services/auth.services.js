import jwt from "jsonwebtoken";
import "dotenv/config";

const secretKey = process.env.JWT_SECRET_KEY;

export const generateToken = (userData) => {
    const payload = { email: userData.email};
    return jwt.sign(payload, secretKey, { expiresIn: "1h" });
};

