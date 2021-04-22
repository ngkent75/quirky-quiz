const router = require('express').Router();
const { User, Result } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const getResult = await Result.findAll({
            include: [{
                model: User
            }]
        });
        res.status(200).json(getResult);
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

module.exports = router;