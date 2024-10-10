import { registerUser, loginUser } from '../services/authService';
export const register = async (req, res) => {
    const { email, password, role } = req.body;
    try {
        const newUser = await registerUser(email, password, role);
        res.status(201).json(newUser);
    }
    catch (err) {
        const error = err;
        res.status(400).json({ message: error.message });
    }
};
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await loginUser(email, password);
        res.json({ token });
    }
    catch (err) {
        const error = err;
        res.status(400).json({ message: error.message });
    }
};
