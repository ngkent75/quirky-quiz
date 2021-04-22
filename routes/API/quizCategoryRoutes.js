const router = require('express').Router();
const { QuizCategory } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const getQuizCategory = await QuizCategory.findAll();
        res.status(200).json(getQuizCategory);
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

module.exports = router;