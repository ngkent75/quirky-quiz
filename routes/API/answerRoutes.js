const router = require('express').Router();
const { Answer } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const getAnswer = await Answer.findAll();
        res.status(200).json(getAnswer);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const answerData = await Answer.findByPk(req.params.id);
        res.status(200).json(answerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;