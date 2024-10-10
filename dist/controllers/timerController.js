import { submitReactionTime, getReactionTimes } from '../services/timerService';
export const submitReactionTimeController = async (req, res) => {
    const { time } = req.body;
    const user_id = req.user?._id;
    try {
        const newReactionTime = await submitReactionTime(user_id, time);
        res.status(201).json(newReactionTime);
    }
    catch (err) {
        const error = err;
        res.status(400).json({ message: error.message });
    }
};
export const getReactionTimesController = async (req, res) => {
    const { userId } = req.params;
    const { sort, filter } = req.query;
    try {
        const reactionTimes = await getReactionTimes(userId, sort, filter);
        res.json(reactionTimes);
    }
    catch (err) {
        const error = err;
        res.status(500).json({ message: error.message });
    }
};
