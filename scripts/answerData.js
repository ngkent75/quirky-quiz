const { Answer } = require('../models');

const answerData = [
    {
        "answerText": "I am grumpy but soft on the inside.",
        "result": "Shrek",
        "question_id": 1
    },
    {
        "answerText": "I am like a princess, but don't mess with me or you'll be sorry!",
        "result": "Fiona",
        "question_id": 1
    },
    {
        "answerText": "I really like socializing, and I get lonely easily.",
        "result": "Donkey",
        "question_id": 1
    },
    {
        "answerText": "I will literally eat people.",
        "result": "Dragon",
        "question_id": 1
    },
    {
        "answerText": "They judge me before they even know me. That's why I'm better off alone.",
        "result": "Shrek",
        "question_id": 2
    },
    {
        "answerText": "In the morning, I'm making waffles",
        "result": "Fiona",
        "question_id": 2
    },
    {
        "answerText": "You know, you should sweep me off my feet, out yonder window and down a rope onto your valiant steed.",
        "result": "Donkey",
        "question_id": 2
    },
    {
        "answerText": "RAAAAAWWWWWWRRRR",
        "result": "Dragon",
        "question_id": 2
    },
    {
        "answerText": "Scare him away.",
        "result": "Shrek",
        "question_id": 3
    },
    {
        "answerText": "Play nice, then kick his butt with kung fu.",
        "result": "Fiona",
        "question_id": 3
    },
    {
        "answerText": "Try to talk him to death.",
        "result": "Donkey",
        "question_id": 3
    },
    {
        "answerText": "Eat him.",
        "result": "Dragon",
        "question_id": 3
    },
    {
        "answerText": "Really sweet, but also really badass",
        "result": "Shrek",
        "question_id": 4
    },
    {
        "answerText": "Puts up a tough act, but is actually really caring and protective on the inside.",
        "result": "Fiona",
        "question_id": 4
    },
    {
        "answerText": "Powerful. Knows what they want and isn't afraid to go for it.",
        "result": "Donkey",
        "question_id": 4
    },
    {
        "answerText": "Funny, light-hearted, and charismatic.",
        "result": "Dragon",
        "question_id": 4
    }
]

const seedAnswer = () => Answer.bulkCreate(answerData);

module.exports = seedAnswer;