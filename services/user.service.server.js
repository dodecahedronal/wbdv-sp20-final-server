
module.exports = function(app) {

    const userModel = require('../models/user.model.server');

    findAllUsers = (req, res) => {
        /*
        userModel.findAllUsers()
            .then(users => {
                res.send(users);
            });
        */
       const users = userModel.findAllUsers();
       res.json(users);
    }

    currentUser = (req, res) => {
        const currentUser = req.session['currentUser'];
        console.log(currentUser);
        if (currentUser) {
            //userModel.findUserByIdExpanded(currentUser._id)
            //    .then(user => res.send(user))
            res.json(currentUser)
        } else {
            res.json(null);
        }
    }

    createUser = (req, res) => {
        console.log(req.body);
        var user = req.body;
        /*
        userModel.createUser(user)
            .then(function (user) {
                req.session['currentUser'] = user;
                res.json(req.session['currentUser']);
            })
        */
       userModel.createUser(user);
       //req.session['currentUser'] = user;
       res.status(200);
       res.json(user);
    }

    login = (req, res) => {
        const user = req.body;
        /*
        userModel.findUserByCredentials(user.username, user.password)
            .then(user => {
                if (user == null) {
                    res.send(null);
                }
                else {
                    req.session['currentUser'] = user;
                    res.json(req.session['currentUser']);
                }
            });
        */
       let found = userModel.findUserByCredentials(user.username, user.password);
        if (found == null) {
            res.status(404);
            res.send('login failed');
        }
        else {
            req.session['currentUser'] = found;
            res.status(200);
            res.json(req.session['currentUser']);
        }
    };

    logout = (req, res) => {
        req.session.destroy((err) => {
            res.send('Logged out');
          });
    }

    findUserByUsername = (req, res) => {
        let username = req.params['username']
        userModel.findUserByUsername(username)
            .then(function (user) {
                res.json(user);
            })
    }

    profile = (req, res) => {
        if (typeof req.session['currentUser'] === 'undefined') {
            res.send(null);
        }
        else {
            var userId = req.session['currentUser']._id;
            userModel.findUserById(userId)
                .then(function (user) {
                    res.send(user);
                })
        }
    }

    updateUser = (req, res) => {
        var user = req.body;
        var userId = req.session['currentUser']._id;
        userModel.updateUser(user, userId)
            .then(function (user) {
                res.json(user);
            })
    }

    deleteProfile = (req, res) => {
        var user = req.session['currentUser'];
        userModel.removeProfile(user)
            .then(function (user) {
                res.json(user);
            })
    }

    app.get('/api/current', currentUser);
    app.get('/api/user', findAllUsers);
    app.post('/api/login', login);
    app.post('/api/register', createUser);
    app.post('/api/logout', logout);
    app.get('/api/username/:username', findUserByUsername);
    app.get('/api/profile', profile);
    app.put('/api/profile', updateUser);
    app.delete('/api/profile', deleteProfile);
};