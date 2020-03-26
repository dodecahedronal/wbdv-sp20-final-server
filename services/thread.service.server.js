module.exports = function(app) {

    const threadModel = require('../models/thread.model.server');

    findAllThreads = (req, res) => {
       const threads = threadModel.findAllThreads();
       res.json(threads);
    }

    createThread = (req, res) => {
        console.log(req.body);
        var thread = req.body;

        threadModel.createThread(thread);
        res.status(200);
        res.json(thread);
    }

    app.post('/api/thread', createThread);
    app.get('/api/thread', findAllThreads);
};