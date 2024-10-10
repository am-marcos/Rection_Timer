import { verifyToken } from '../utils/jwt';
export const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        res.status(401).json({ message: 'Access denied. No token provided.' });
        return;
    }
    try {
        const decoded = verifyToken(token);
        req.user = decoded;
        next();
    }
    catch (err) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};
