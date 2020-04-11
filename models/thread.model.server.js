const mongoose = require('mongoose')
const threadSchema = require('./thread.schema.server')
const threadModel = mongoose.model('ThreadSchema', threadSchema)

threads =[
    {
        'subject': 'Let\'s talk about this book!',
        'username': 'alice',
        'userId': '123',
        'bookId': '3',
        'threadTime': ''}
]

findAllThreads = () => {
    return threadModel.find();
    //return threads;
}

findThreadsByUserId = (userId) => {
    return threadModel.find({userId: userId})
}

findThreadsByBookId = (bookId) => {
    return threadModel.find({bookId: bookId})
}

createThread = (thread) => {
    return threadModel.create(thread);
    //threads.push(thread);
}

module.exports = {
    findAllThreads,
    findThreadsByUserId,
    findThreadsByBookId,
    createThread
};
