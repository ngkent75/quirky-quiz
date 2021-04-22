const router = require('express').Router();
const { User, Result, Quiz } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const getUser = await User.findAll({
            include:
                [
                    {
                        model: Result
                    },
                    {
                        model: Quiz
                    }
                ]
        });
        res.status(200).json(getUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id, {
            include:
                [
                    {
                        model: Result
                    },
                    {
                        model: Quiz
                    }
                ]
        });
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// router.post('/', async (req, res) => {
//     try {
//         const newUser = await User.create({
//             ...req.body,
//             user_id: req.session.user_id,
//         });
//         res.status(200).json(newUser)
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

// router.delete('/:id', async (req, res) => {
//     try {
//         const userData = await User.destroy({
//             where: {
//                 id: req.params.id,
//                 user_id: req.session.user_id,
//             },
//         });
//         if (!userData) {
//             res.status(404).json({ message: "No user found with this id!" });
//             return;
//         }
//         res.status(200).json(projectData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;