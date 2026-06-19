
import Notification from "../models/Notification.js";

export const getNotifications = async (req, res) => {
  const data = await Notification.find({
    userId: req.params.userId,
  }).sort({ createdAt: -1 });

  res.json(data);
};

export const createNotification = async (
  req,
  res
) => {
  const notification =
    await Notification.create(req.body);

  res.status(201).json(notification);
};
