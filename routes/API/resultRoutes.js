const router = require('express').Router();
const { User, Result } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const resultData = await Result.findAll({
            include: [{
                model: User
            }]
        });
        res.status(200).json(resultData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const resultData = await Result.findByPk(req.params.id, {
            include: [{
                model: User
            }]
        });
        res.status(200).json(resultData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const resultData = await Result.create(req.body);
        res.status(200).json(resultData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const resultData = await Result.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!resultData) {
            res.status(404).json({ message: 'No Result found with this id!' });
        };

        res.status(200).json(resultData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;