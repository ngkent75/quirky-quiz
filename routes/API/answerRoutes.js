const router = require('express').Router();
const { Answer } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const answerData = await Answer.findAll();
        res.status(200).json(answerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const answerData = await Answer.findByPk(req.params.id);

        if (!answerData) {
            res.status(404).json({ message: 'No Answer found with this id!' });
        };

        res.status(200).json(answerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const answerData = await Answer.create(req.body);
        res.status(200).json(answerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const answerData = await Answer.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!answerData) {
            res.status(404).json({ message: 'No Answer found with this id!' });
        };

        res.status(200).json(answerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;