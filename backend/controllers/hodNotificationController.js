import hodNotificationModel from '../models/hodNotificationModel.js';

const getAllHodNotifications = async (req, res) => {
    try {
        const hodNotifications = await hodNotificationModel.findAll();
        res.json(hodNotifications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createHodNotification = async (req, res) => {
    try {
        const newHodNotification = await hodNotificationModel.create(req.body);
        res.status(201).json(newHodNotification);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

const deleteHodNotification = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await hodNotificationModel.destroy({ where: { notifiction_id: id } });
        if (result === 0) {
            return res.status(404).send('No hodNotification with that id');
        }
        res.json({ message: 'hodNotification deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { getAllHodNotifications, createHodNotification, deleteHodNotification };