const mongoose = require('mongoose')
const commentSchema = require('./comment.schema.server')
const commentModel = mongoose.model('CommentSchema', commentSchema)

comments =[
    {
        'content': 'So I think the characters are all very stupid. But that\'s okay, because the writing is good, heh!',
        'threadId': '123',
        'username': 'alice',
        'userId': '123',
        'bookId': '3',
        'commentTime': ''}
]

findAllComments = () => {
    return commentModel.find();
    //return comments;
}

createComment = (comment) => {
    return commentModel.create(comment);
    //comments.push(comment);
}

findCommentsByUserId = (userId) => {
    return commentModel.find({userId: userId})
}

findCommentsByThreadId = (threadId) => {
    return commentModel.find({threadId: threadId})
}
    
findCommentsByBookId = (bookId) => {
    return commentModel.find({bookId: bookId})
}

module.exports = {
    findAllComments,
    findCommentsByUserId,
    findCommentsByThreadId,
    findCommentsByBookId,
    createComment
};
