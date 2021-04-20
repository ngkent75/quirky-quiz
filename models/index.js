const User = require('./User');
const Quiz = require('./Quiz');
const Question = require('./Question');
const Answer = require('./Answer');
const Category = require('./Category');
const QuizCategory = require('./QuizCategory');
const Result = require('./Result');

User.hasMany(Quiz, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Quiz.belongsTo(User, {
    foreignKey: 'user_id'
});

Quiz.hasMany(Question, {
    foreignKey: 'quiz_id',
    onDelete: 'CASCADE',
});

Question.belongsTo(Quiz, {
    foreignKey: 'quiz_id',
});

Quiz.hasMany(Result, {
    foreignKey: 'quiz_id',
    onDelete: 'CASCADE',
});

Result.belongsTo(Quiz, {
    foreignKey: 'quiz_id',
});

Question.hasMany(Answer, {
    foreignKey: 'question_id',
    onDelete: 'CASCADE',
});

Answer.belongsTo(Question, {
    foreignKey: 'question_id',
});

Quiz.belongsToMany(Category, { through: QuizCategory, foreignKey: 'quiz_id' });

Category.belongsToMany(Quiz, { through: QuizCategory, foreignKey: 'category_id' });

module.exports = { Quiz, User, Question, Answer, Category, QuizCategory, Result };