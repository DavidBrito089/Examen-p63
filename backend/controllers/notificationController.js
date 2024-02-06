const Notification = require('../models/Notifications');

exports.createNotification = async (req, res) => {
  try {
    const { message } = req.body;
    const notification = new Notification({ message });
    await notification.save();
    res.status(201).json(notification);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
