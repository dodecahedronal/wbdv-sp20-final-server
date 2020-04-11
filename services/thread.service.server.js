module.exports = function(app) {

    const threadModel = require('../models/thread.model.server');

    findAllThreads = (req, res) => {
        threadModel.findAllThreads()
        .then(threads => {
            res.send(threads);
        });

       //const threads = threadModel.findAllThreads();
       //res.json(threads);
    }

    findThreadsByUserId = (req, res) => {
        let userId = req.params['uid']
        threadModel.findThreadsByUserId(userId)
            .then(function (threads) {
                res.json(threads);
            })
    }

    findThreadsByBookId = (req, res) => {
        let bookId = req.params['bid']
        threadModel.findThreadsByBookId(bookId)
            .then(function (threads) {
                res.json(threads);
            })
    }

    createThread = (req, res) => {
        var thread = req.body;

        threadModel.createThread(thread)
            .then(function (thread) {
                res.status(200);
                res.json(thread);
            })

        //console.log(req.body);
        //threadModel.createThread(thread);
    }

    app.post('/api/thread', createThread);
    app.get('/api/thread', findAllThreads);
    app.get('/api/user/:uid/thread', findThreadsByUserId);
    app.get('/api/book/:bid/thread', findThreadsByBookId);
};