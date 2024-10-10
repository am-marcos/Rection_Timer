import { Request, Response } from 'express';
import { submitReactionTime, getReactionTimes } from '../services/timerService';

export const submitReactionTimeController = async (req: Request, res: Response) => {
  const { time } = req.body;
  const user_id = req.user?._id as string;

  try {
    const newReactionTime = await submitReactionTime(user_id, time);
    res.status(201).json(newReactionTime);
  } catch (err) {
    const error = err as Error;
    res.status(400).json({ message: error.message });
  }
};

export const getReactionTimesController = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { sort, filter } = req.query;

  try {
    const reactionTimes = await getReactionTimes(userId, sort as string, filter);
    res.json(reactionTimes);
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ message: error.message });
  }
};