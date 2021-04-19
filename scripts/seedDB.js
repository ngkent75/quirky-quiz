const sequelize = require('../config/connection');

const seedUser = require('./userData');
const seedQuiz = require('./quizData');
const seedQuestion = require('./questionData');
const seedAnswer = require('./answerData');
const seedCategory = require('./categoryData');
const seedQuizCategory = require('./quizCategoryData');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await seedUser();
    
    await seedQuiz();

    await seedQuestion();

    await seedAnswer();

    await seedCategory();

    await seedQuizCategory();

    process.exit(0);
};

seedDatabase();