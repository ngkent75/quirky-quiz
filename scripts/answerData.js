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
    },
    {
        "answerText": "Running",
        "result": "Vincent van Gogh",
        "question_id": 5
    },
    {
        "answerText": "Cycling",
        "result": "Pablo Picaso",
        "question_id": 5
    },
    {
        "answerText": "Kickboxing",
        "result": "Leonardo da Vinci",
        "question_id": 5
    },
    {
        "answerText": "I don't exercise, ever",
        "result": "Michelangelo",
        "question_id": 5
    },
    {
        "answerText": "International Pancake Association",
        "result": "Vincent van Gogh",
        "question_id": 6
    },
    {
        "answerText": "Inquirer Peoples Anthology",
        "result": "Pablo Picaso",
        "question_id": 6
    },
    {
        "answerText": "India Pale Ale",
        "result": "Leonardo da Vinci",
        "question_id": 6
    },
    {
        "answerText": "Indiana Port Alchemy",
        "result": "Michelangelo",
        "question_id": 6
    },
    {
        "answerText": "Bumble",
        "result": "Vincent van Gogh",
        "question_id": 7
    },
    {
        "answerText": "Tinder",
        "result": "Pablo Picaso",
        "question_id": 7
    },
    {
        "answerText": "Christian Mingle",
        "result": "Leonardo da Vinci",
        "question_id": 7
    },
    {
        "answerText": "CuPets",
        "result": "Michelangelo",
        "question_id": 7
    },
    {
        "answerText": "French Fries",
        "result": "Vincent van Gogh",
        "question_id": 8
    },
    {
        "answerText": "Pizza",
        "result": "Pablo Picaso",
        "question_id": 8
    },
    {
        "answerText": "Tacos",
        "result": "Leonardo da Vinci",
        "question_id": 8
    },
    {
        "answerText": "Grapefruit",
        "result": "Michelangelo",
        "question_id": 8
    },
    {
        "answerText": "Ears",
        "result": "Vincent van Gogh",
        "question_id": 9
    },
    {
        "answerText": "Eyes",
        "result": "Pablo Picaso",
        "question_id": 9
    },
    {
        "answerText": "I would very much like to keep all my body parts",
        "result": "Leonardo da Vinci",
        "question_id": 9
    },
    {
        "answerText": "Mouth",
        "result": "Michelangelo",
        "question_id": 9
    },
    {
        "answerText": "Biscuits and Gravy",
        "result": "Georgia",
        "question_id": 10
    },
    {
        "answerText": "Breakfast Burrito",
        "result": "Texas",
        "question_id": 10
    },
    {
        "answerText": "Bacon and Eggs",
        "result": "Florida",
        "question_id": 10
    },
    {
        "answerText": "A Green Juice",
        "result": "California",
        "question_id": 10
    },
    {
        "answerText": "Mac and Cheese",
        "result": "Georgia",
        "question_id": 11
    },
    {
        "answerText": "Pulled Pork Sandwich",
        "result": "Texas",
        "question_id": 11
    },
    {
        "answerText": "Grilled Chicken",
        "result": "Florida",
        "question_id": 11
    },
    {
        "answerText": "Quinoa Salad with Shaved-Egg Avocado Toast",
        "result": "California",
        "question_id": 11
    },
    {
        "answerText": "Peaches",
        "result": "Georgia",
        "question_id": 12
    },
    {
        "answerText": "Popcorn",
        "result": "Texas",
        "question_id": 12
    },
    {
        "answerText": "Mixed Nuts",
        "result": "Florida",
        "question_id": 12
    },
    {
        "answerText": "Kale Chips",
        "result": "California",
        "question_id": 12
    },
    {
        "answerText": "French Bread Pizza",
        "result": "Georgia",
        "question_id": 13
    },
    {
        "answerText": "Ramen",
        "result": "Texas",
        "question_id": 13
    },
    {
        "answerText": "Black Bean Sweet Potatoes",
        "result": "Florida",
        "question_id": 13
    },
    {
        "answerText": "Vegan Chickpea Shakshuka",
        "result": "California",
        "question_id": 13
    },
    {
        "answerText": "Chocolate Chip Cookie",
        "result": "Georgia",
        "question_id": 14
    },
    {
        "answerText": "Apple Pie",
        "result": "Texas",
        "question_id": 14
    },
    {
        "answerText": "Vanilla Bean Icecream",
        "result": "Florida",
        "question_id": 14
    },
    {
        "answerText": "Banana Nice-cream",
        "result": "California",
        "question_id": 14
    },
    {
        "answerText": "Money",
        "result": "John F. Kennedy",
        "question_id": 15
    },
    {
        "answerText": "Fame",
        "result": "Barack Obama",
        "question_id": 15
    },
    {
        "answerText": "Power",
        "result": "George Washington",
        "question_id": 15
    },
    {
        "answerText": "The ability to walk on water",
        "result": "Ulysses S. Grant",
        "question_id": 15
    },
    {
        "answerText": "Country",
        "result": "John F. Kennedy",
        "question_id": 16
    },
    {
        "answerText": "Heavy Metal",
        "result": "Barack Obama",
        "question_id": 16
    },
    {
        "answerText": "Classical",
        "result": "George Washington",
        "question_id": 16
    },
    {
        "answerText": "Rap",
        "result": "Ulysses S. Grant",
        "question_id": 16
    },
    {
        "answerText": "3",
        "result": "John F. Kennedy",
        "question_id": 17
    },
    {
        "answerText": "2",
        "result": "Barack Obama",
        "question_id": 17
    },
    {
        "answerText": "0",
        "result": "George Washington",
        "question_id": 17
    },
    {
        "answerText": "9",
        "result": "Ulysses S. Grant",
        "question_id": 17
    },
    {
        "answerText": "Frog",
        "result": "John F. Kennedy",
        "question_id": 18
    },
    {
        "answerText": "Dog",
        "result": "Barack Obama",
        "question_id": 18
    },
    {
        "answerText": "Cat",
        "result": "George Washington",
        "question_id": 18
    },
    {
        "answerText": "Saber-toothed Tiger",
        "result": "Ulysses S. Grant",
        "question_id": 18
    },
    {
        "answerText": "Strawberries",
        "result": "John F. Kennedy",
        "question_id": 19
    },
    {
        "answerText": "Tomatoes",
        "result": "Barack Obama",
        "question_id": 19
    },
    {
        "answerText": "Apples",
        "result": "George Washington",
        "question_id": 19
    },
    {
        "answerText": "Bananas",
        "result": "Ulysses S. Grant",
        "question_id": 19
    },
    {
        "answerText": "Coney Island and a slice",
        "result": "dorothy",
        "question_id": 20
    },
    {
        "answerText": "A tour of the fjords of Norway",
        "result": "rose",
        "question_id": 20
    },
    {
        "answerText": "A riverboat cruise of Savannah GA",
        "result": "blanche",
        "question_id": 20
    },
    {
        "answerText": "A Sicillian knife fight",
        "result": "sophia",
        "question_id": 20
    },
    {
        "answerText": "Shoulder pads on shoulder pads",
        "result": "dorothy",
        "question_id": 21
    },
    {
        "answerText": "Tasteful sweats for keeping on the move",
        "result": "rose",
        "question_id": 21
    },
    {
        "answerText": "Anything with sequins and a low cut",
        "result": "blanche",
        "question_id": 21
    },
    {
        "answerText": "House  coat and slippers regardless of the occasion",
        "result": "sophia",
        "question_id": 21
    },
    {
        "answerText": "Someone who will both challenge me and respect me",
        "result": "dorothy",
        "question_id": 22
    },
    {
        "answerText": "Someone who will love me unconditionaly, despite my flaws",
        "result": "rose",
        "question_id": 22
    },
    {
        "answerText": "No way I'm locking it down to one",
        "result": "blanche",
        "question_id": 22
    },
    {
        "answerText": "At my age, a pulse is all you ask for",
        "result": "sophia",
        "question_id": 22
    },
    {
        "answerText": "Yellow",
        "result": "dorothy",
        "question_id": 23
    },
    {
        "answerText": "Red",
        "result": "rose",
        "question_id": 23
    },
    {
        "answerText": "Green",
        "result": "blanche",
        "question_id": 23
    },
    {
        "answerText": "Orange",
        "result": "sophia",
        "question_id": 23
    },
    {
        "answerText": "Spider-Man",
        "result": "Neptune",
        "question_id": 24
    },
    {
        "answerText": "Black Panther",
        "result": "Saturn",
        "question_id": 24
    },
    {
        "answerText": "Elastigirl",
        "result": "Jupiter",
        "question_id": 24
    },
    {
        "answerText": "Deadpool",
        "result": "Uranus",
        "question_id": 24
    },
    {
        "answerText": "Blue",
        "result": "Neptune",
        "question_id": 25
    },
    {
        "answerText": "Yellow",
        "result": "Saturn",
        "question_id": 25
    },
    {
        "answerText": "How could I pick just one?",
        "result": "Jupiter",
        "question_id": 25
    },
    {
        "answerText": "Green",
        "result": "Uranus",
        "question_id": 25
    },
    {
        "answerText": "Kim",
        "result": "Neptune",
        "question_id": 26
    },
    {
        "answerText": "Khloe",
        "result": "Saturn",
        "question_id": 26
    },
    {
        "answerText": "Rob",
        "result": "Jupiter",
        "question_id": 26
    },
    {
        "answerText": "Kourtney",
        "result": "Uranus",
        "question_id": 26
    },
    {
        "answerText": "Heart",
        "result": "Neptune",
        "question_id": 27
    },
    {
        "answerText": "Masseter",
        "result": "Saturn",
        "question_id": 27
    },
    {
        "answerText": "Soleus",
        "result": "Jupiter",
        "question_id": 27
    },
    {
        "answerText": "Gluteus Maximus",
        "result": "Uranus",
        "question_id": 27
    },
    {
        "answerText": "Mashed",
        "result": "Neptune",
        "question_id": 28
    },
    {
        "answerText": "Baked",
        "result": "Saturn",
        "question_id": 28
    },
    {
        "answerText": "French Fries",
        "result": "Jupiter",
        "question_id": 28
    },
    {
        "answerText": "Scalloped",
        "result": "Uranus",
        "question_id": 28
    },
    {
        "answerText": "Football",
        "result": "Carolina Panthers",
        "question_id": 29
    },
    {
        "answerText": "Hockey",
        "result": "Arizona Coyotes",
        "question_id": 29
    },
    {
        "answerText": "Soccer",
        "result": "Manchester United",
        "question_id": 29
    },
    {
        "answerText": "Baseball",
        "result": "Chicago Cubs",
        "question_id": 29
    },
    {
        "answerText": "Diamond",
        "result": "Carolina Panthers",
        "question_id": 30
    },
    {
        "answerText": "Triangle",
        "result": "Arizona Coyotes",
        "question_id": 30
    },
    {
        "answerText": "Square",
        "result": "Manchester United",
        "question_id": 30
    },
    {
        "answerText": "Circle",
        "result": "Chicago Cubs",
        "question_id": 30
    },
    {
        "answerText": "21.2 miles",
        "result": "Carolina Panthers",
        "question_id": 31
    },
    {
        "answerText": "22.1 miles",
        "result": "Arizona Coyotes",
        "question_id": 31
    },
    {
        "answerText": "26.2 miles",
        "result": "Manchester United",
        "question_id": 31
    },
    {
        "answerText": "22.6 miles",
        "result": "Chicago Cubs",
        "question_id": 31
    },
    {
        "answerText": "Atlanta, GA",
        "result": "Carolina Panthers",
        "question_id": 32
    },
    {
        "answerText": "Santa Cruz, CA",
        "result": "Arizona Coyotes",
        "question_id": 32
    },
    {
        "answerText": "Kansas City, MO",
        "result": "Manchester United",
        "question_id": 32
    },
    {
        "answerText": "South Williamsport, PA",
        "result": "Chicago Cubs",
        "question_id": 32
    },
    {
        "answerText": "Football",
        "result": "Carolina Panthers",
        "question_id": 33
    },
    {
        "answerText": "Hockey",
        "result": "Arizona Coyotes",
        "question_id": 33
    },
    {
        "answerText": "Soccer",
        "result": "Manchester United",
        "question_id": 33
    },
    {
        "answerText": "Baseball",
        "result": "Chicago Cubs",
        "question_id": 33
    }    
]

const seedAnswer = () => Answer.bulkCreate(answerData);

module.exports = seedAnswer;