import User from '../models/userModel';
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/jwt';
export const registerUser = async (email, password, role) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword, role });
    return await user.save();
};
export const loginUser = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Invalid email or password');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid email or password');
    }
    return generateToken(user._id.toString(), user.role);
};
