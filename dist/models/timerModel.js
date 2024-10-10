import mongoose, { Schema } from 'mongoose';
// Schéma Timer
const timerSchema = new Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    time: { type: Number, required: true }
});
// Modèle Timer
const Timer = mongoose.model('Timer', timerSchema);
export default Timer;
