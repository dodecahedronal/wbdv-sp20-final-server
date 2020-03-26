comments =[
    {
        'commentId': '123',
        'content': 'So I think the characters are all very stupid. But that\'s okay, because the writing is good, heh!',
        'threadId': '123',
        'userId': '123',
        'bookId': '3',
        'commentTime': ''}
]

findAllComments = () => {
    return comments;
}

createComment = (comment) => {
    comments.push(comment);
}

module.exports = {
    findAllComments,
    createComment
};
