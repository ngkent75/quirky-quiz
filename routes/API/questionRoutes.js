const router = require('express').Router();
const { Question } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const getQuestion = await Question.findAll();
        res.status(200).json(getQuestion);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const questionData = await Question.findByPk(req.params.id);
        res.status(200).json(questionData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;