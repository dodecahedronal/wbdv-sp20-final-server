threads =[
    {
        'threadId': '123',
        'subject': 'Let\'s talk about this book!',
        'userId': '123',
        'bookId': '3',
        'threadTime': ''}
]

findAllThreads = () => {
    return threads;
}

createThread = (thread) => {
    threads.push(thread);
}

module.exports = {
    findAllThreads,
    createThread
};
