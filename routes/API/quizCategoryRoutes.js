const router = require('express').Router();
const { QuizCategory } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const quizCategoryData = await QuizCategory.findAll();
        res.status(200).json(quizCategoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const quizCategoryData = await QuizCategory.findByPk(req.params.id);
        res.status(200).json(quizCategoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const quizCategoryData = await QuizCategory.create(req.body);
        res.status(200).json(quizCategoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const quizCategoryData = await QuizCategory.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!quizCategoryData) {
            res.status(404).json({ message: 'No QuizCategory found with this id!' });
        };

        res.status(200).json(quizCategoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;