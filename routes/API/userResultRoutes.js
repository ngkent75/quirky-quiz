const router = require('express').Router();
const { UserResult } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const getUserResult = await UserResult.findAll();
        res.status(200).json(getUserResult);
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

module.exports = router;