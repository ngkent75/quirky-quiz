const router = require('express').Router();
const { Category } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const getCategory = await Category.findAll();
        res.status(200).json(getCategory);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const categoryData = await Category.findByPk(req.params.id);
        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// router.post('/', async (req, res) => {
//     try {
//         const newCategory = await Category.create({
//             ...req.body,
//             user_id: req.session.user_id,
//         });
//         res.status(200).json(newCategory)
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

// router.delete('/:id', async (req, res) => {
//     try {
//         const categoryData = await Category.destroy({
//             where: {
//                 id: req.params.id,
//                 user_id: req.session.user_id,
//             },
//         });
//         if (!categoryData) {
//             res.status(404).json({ message: "No category found with this id!" });
//             return;
//         }
//         res.status(200).json(projectData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;