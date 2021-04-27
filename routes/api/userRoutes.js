const router = require('express').Router();
const withAuth = require('../../client/src/utils/auth');
const { User, Quiz, UserResult } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            include:
                [
                    {
                        model: Quiz
                    },
                    {
                        model: UserResult
                    }
                ]
        });
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});
//   withAuth,
router.get('/:id', async (req, res, next) => {
    console.log(req.params.id);
    try {
        const userData = await User.findByPk(req.params.id, {
            include:
                [
                    {
                        model: Quiz
                    },
                    {
                        model: UserResult
                    }
                ]
        });
        console.log(userData);
        const userSerialize = JSON.parse(JSON.stringify(userData));
        res.status(200).json(userSerialize);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                username: req.body.username,
            },
        });

        if(!userData) {
            res.status(400).json({ message: "Sorry! Incorrect username or password." })
            return;
        }
        // checks password
        const checkPass = await userData.checkPassword(req.body.password);

        if(!checkPass) {
            res.status(400).json({ message: "Sorry! Incorrect username or password." })
            return;
        };

        const userSerializeID = (JSON.parse(JSON.stringify(userData.id)));

        req.session.save(() => {
            req.session.user_id = userSerializeID;
            // res.cookie('id', user.id, { signed: true, httpOnly: true });
            req.session.logged_in = true;
            res.status(200).json({
                user: userData
            })
        })

        
        // req.session.user_id = userSerializeID;
        // req.session.loggedIn = true;
        // res.json(req.session)

    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/sessionid', async (req, res) => {
    try {
        // const { user_id } = req.session;
        // console.log(req.session.logged_in)
        // console.log(req.signedCookies.id)
        const userData = await User.findOne({
            where: {
                id: req.session.user_id,
            },
        }); 
        console.log(userData)
        console.log(req.session.user_id)
        res.status(200).json(userData);
        // req.signedCookies.id
        

    } catch (err) {
        res.status(500).json(err);
        console.log("test fail");
    }
});

router.post("/logout", (req, res) => {
    console.log("test logout")
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            req.logout();
            res.status(204).end();
        });
    } else {
        res.status(404).end()
    }
})

router.post('/', async (req, res) => {
    console.log(req.body);
    try {
        const userData = await User.create(req.body);
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const userData = await User.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!userData) {
            res.status(404).json({ message: 'No User found with this id!' });
        };

        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;