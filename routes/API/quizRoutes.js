const router = require('express').Router();
const { Quiz, Category, Question, Answer, Result } = require('../../models');

router.get('/', async (req, res) => {
	try {
		const quizData = await Quiz.findAll({
			include:
				[
					{
						model: Category
					},
					{
						model: Result
					},
					{
						model: Question,
						include: [
							{
								model: Answer
							}
						]
					},
				]
		});
		res.status(200).json(quizData);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/:id', async (req, res) => {
	try {
		const quizData = await Quiz.findByPk(req.params.id, {
			include:
				[
					{
						model: Category
					},
					{
						model: Result
					},
					{
						model: Question,
						include: [
							{
								model: Answer
							}
						]
					}
				]
		});
		res.status(200).json(quizData);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.post('/', async (req, res) => {
	try {
			const quizData = await Quiz.create(req.body);
			res.status(200).json(quizData);
	} catch (err) {
			res.status(500).json(err);
	}
});

router.delete('/:id', async (req, res) => {
	try {
			const quizData = await Quiz.destroy({
					where: {
							id: req.params.id
					}
			});

			if (!quizData) {
					res.status(404).json({ message: 'No Quiz found with this id!' });
			};

			res.status(200).json(quizData);
	} catch (err) {
			res.status(500).json(err);
	}
});

module.exports = router;