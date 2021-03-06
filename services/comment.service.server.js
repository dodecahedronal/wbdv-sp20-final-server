module.exports = function(app) {

    const commentModel = require('../models/comment.model.server');

    findAllComments = (req, res) => {
        commentModel.findAllComments()
            .then(comments => {
                res.send(comments);
            });
       //const comments = commentModel.findAllComments();
       //res.json(comments);
    }

    findCommentsByUserId = (req, res) => {
        let userId = req.params['uid']
        commentModel.findCommentsByUserId(userId)
            .then(function (comments) {
                res.json(comments);
            })
    }

    findCommentsByThreadId = (req, res) => {
        let threadId = req.params['tid']
        commentModel.findCommentsByThreadId(threadId)
            .then(function (comments) {
                res.json(comments);
            })
    }

    findCommentsByBookId = (req, res) => {
        let bookId = req.params['bid']
        commentModel.findCommentsByBookId(bookId)
            .then(function (comments) {
                res.json(comments);
            })
    }

    createComment = (req, res) => {
        var comment = req.body;

        commentModel.createComment(comment)
            .then(function (comment) {
                res.status(200);
                res.json(comment);
            })

        //console.log(req.body);
        //commentModel.createComment(comment);
    }

    deleteComment = (req,res) => {
        let commentId = req.params['cid']
        commentModel.deleteComment(commentId)
            .then(deleteInfo => {
                res.status(200);
                res.send(deleteInfo)
            })
    }

    updateComment = (req, res) => {
        let commentId = req.params['cid']
        let comment = req.body
        threadModel.updateComment(commentId, comment)
            .then(comment => res.json(comment))
    }

    app.post('/api/comment', createComment);
    app.get('/api/comment', findAllComments);
    app.get('/api/user/:uid/comment', findCommentsByUserId);
    app.get('/api/thread/:tid/comment', findCommentsByThreadId);
    app.get('/api/book/:bid/comment', findCommentsByBookId);
    app.delete('/api/comment/:cid', deleteComment);
    app.put('/api/comment/:cid', updateComment);
};