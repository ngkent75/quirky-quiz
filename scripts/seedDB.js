const sequelize = require('../config/connection');

const seedUser = require('./userData');
const seedQuiz = require('./quizData');
const seedQuestion = require('./questionData');
const seedAnswer = require('./answerData');
const seedCategory = require('./categoryData');
const seedQuizCategory = require('./quizCategoryData');
const seedResult = require('./resultData');
const seedUserResult = require('./userResultData');

const seedDatabase = async () => {

    try {
        await sequelize.sync({ force: true });

        await seedUser();

        await seedQuiz();

        await seedQuestion();

        await seedAnswer();

        await seedCategory();

        await seedResult();
        
        await seedQuizCategory();

        await seedUserResult();

        process.exit(0);
    } catch (err) {
        console.log(err);
    }


};

seedDatabase();