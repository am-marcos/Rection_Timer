import mongoose, { Schema } from 'mongoose';
// Schéma utilisateur
const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: Boolean, required: true }
});
// Modèle utilisateur
const User = mongoose.model('User', userSchema);
export default User;
