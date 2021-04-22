const router = require('express').Router();
const userRoutes = require('./userRoutes')
const categoryRoutes = require('./categoryRoutes');
const questionRoutes = require('./questionRoutes');

router.use('/user', userRoutes);
router.use('/category', categoryRoutes);
router.use('/question', questionRoutes);



module.exports = router;