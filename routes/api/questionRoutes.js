const router = require('express').Router();
const { Question, Answer } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const questionData = await Question.findAll({
            include: [{ model: Answer }]
        });
        res.status(200).json(questionData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const questionData = await Question.findByPk(req.params.id, {
            include: [{ model: Answer }]
        });

        if (!questionData) {
            res.status(404).json({ message: 'No Question found with this id!' });
        };

        res.status(200).json(questionData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const questionData = await Question.create(req.body);
        res.status(200).json(questionData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const questionData = await Question.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!questionData) {
            res.status(404).json({ message: 'No Question found with this id!' });
        };

        res.status(200).json(questionData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;