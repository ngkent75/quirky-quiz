const router = require('express').Router();
const { UserResult } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const userResultData = await UserResult.findAll();
        res.status(200).json(userResultData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const userResultData = await UserResult.findByPk(req.params.id);
        res.status(200).json(userResultData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const userResultData = await UserResult.create(req.body);
        res.status(200).json(userResultData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const userResultData = await UserResult.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!userResultData) {
            res.status(404).json({ message: 'No UserResult found with this id!' });
        };

        res.status(200).json(userResultData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;