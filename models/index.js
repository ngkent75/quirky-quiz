const User = require('./User');
const Quiz = require('./Quiz');
const Question = require('./Question');
const Answer = require('./Answer');
const Category = require('./Category');
const QuizCategory = require('./QuizCategory');
const UserResult = require('./UserResult');
const Result = require('./Result');

// One to many relationship for user and quiz
User.hasMany(Quiz, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Quiz.belongsTo(User, {
    foreignKey: 'user_id'
});

// One to many relationship for question and quiz
Quiz.hasMany(Question, {
    foreignKey: 'quiz_id',
    onDelete: 'CASCADE',
});

Question.belongsTo(Quiz, {
    foreignKey: 'quiz_id',
});

// One to many relationship for answer and question
Question.hasMany(Answer, {
    foreignKey: 'question_id',
    onDelete: 'CASCADE',
});

Answer.belongsTo(Question, {
    foreignKey: 'question_id',
});

// One to many relationship for quiz and result
Quiz.hasMany(Result, {
    foreignKey: 'quiz_id',
    onDeletge: 'CASCADE',
});

Result.belongsTo(Quiz, {
    foreignKey: 'quiz_id'
})


// Many to many relationship for quiz and category through quizcategory
Quiz.belongsToMany(Category, { through: QuizCategory, foreignKey: 'quiz_id' });

Category.belongsToMany(Quiz, { through: QuizCategory, foreignKey: 'category_id' });

// Many to many relationship for result and user through userresult
User.belongsToMany(Result, { through: UserResult, foreignKey: 'user_id' });

Result.belongsToMany(User, { through: UserResult, foreignKey: 'result_id' });


module.exports = { User, Result, Question, Answer, Quiz, Category, QuizCategory, UserResult };