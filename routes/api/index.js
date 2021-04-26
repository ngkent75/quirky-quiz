const router = require('express').Router();
const userRoutes = require('./userRoutes')
const categoryRoutes = require('./categoryRoutes');
const quizRoutes = require('./quizRoutes');
const questionRoutes = require('./questionRoutes');
const answerRoutes = require('./answerRoutes');
const quizCategoryRoutes = require('./quizCategoryRoutes');
const userResultRoutes = require('./userResultRoutes');

router.use('/user', userRoutes);
router.use('/category', categoryRoutes);
router.use('/quiz', quizRoutes);
router.use('/question', questionRoutes);
router.use('/answer', answerRoutes);
router.use('/quizCategory', quizCategoryRoutes);
router.use('/userResult', userResultRoutes);


module.exports = router;