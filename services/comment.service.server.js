module.exports = function(app) {

    const commentModel = require('../models/comment.model.server');

    findAllComments = (req, res) => {
       const comments = commentModel.findAllComments();
       res.json(comments);
    }

    createComment = (req, res) => {
        console.log(req.body);
        var comment = req.body;

        commentModel.createComment(comment);
        res.status(200);
        res.json(comment);
    }

    app.post('/api/comment', createComment);
    app.get('/api/comment', findAllComments);
};