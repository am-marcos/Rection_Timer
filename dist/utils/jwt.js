import jwt from 'jsonwebtoken';
import { jwtSecret } from '../config/config';
// Générer un jeton JWT
export const generateToken = (id, role) => {
    return jwt.sign({ id, role }, jwtSecret, { expiresIn: '1h' });
};
// Vérifier un jeton JWT
export const verifyToken = (token) => {
    try {
        return jwt.verify(token, jwtSecret);
    }
    catch (err) {
        throw new Error('Invalid token');
    }
};
