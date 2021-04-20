const { Answer } = require('../models');

const answerData = [
    {
        "answer": "I am grumpy but soft on the inside.",
        "question_id": 1
    },
    {
        "answer": "I am like a princess, but don't mess with me or you'll be sorry!",
        "question_id": 1
    },
    {
        "answer": "I really like socializing, and I get lonely easily.",
        "question_id": 1
    },
    {
        "answer": "I will literally eat people.",
        "question_id": 1
    },
    {
        "answer": "They judge me before they even know me. That's why I'm better off alone.",
        "question_id": 2
    },
    {
        "answer": "In the morning, I'm making waffles",
        "question_id": 2
    },
    {
        "answer": "You know, you should sweep me off my feet, out yonder window and down a rope onto your valiant steed.",
        "question_id": 2
    },
    {
        "answer": "RAAAAAWWWWWWRRRR",
        "question_id": 2
    },
    {
        "answer": "Scare him away.",
        "question_id": 3
    },
    {
        "answer": "Play nice, then kick his butt with kung fu.",
        "question_id": 3
    },
    {
        "answer": "Try to talk him to death.",
        "question_id": 3
    },
    {
        "answer": "Eat him.",
        "question_id": 3
    },
    {
        "answer": "Really sweet, but also really badass",
        "question_id": 4
    },
    {
        "answer": "Puts up a tough act, but is actually really caring and protective on the inside.",
        "question_id": 4
    },
    {
        "answer": "Powerful. Knows what they want and isn't afraid to go for it.",
        "question_id": 4
    },
    {
        "answer": "Funny, light-hearted, and charismatic.",
        "question_id": 4
    }
]

const seedAnswer = () => Answer.bulkCreate(answerData);

module.exports = seedAnswer;