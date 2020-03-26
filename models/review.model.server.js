reviews =[
    {
        'reviewId': '123',
        'rating': '5',
        'content': 'This was a really good book. I like it a lot.',
        'userId': '123',
        'bookId': '3',
        'reviewTime': ''}
]

findAllReviews = () => {
    return reviews;
}

findReviewsByUserId = (userId) =>
{
    let ret = reviews.filter(r=>userId == r.userId);
    return ret;
}

findReviewsByBookId = (bookId) =>
{
    let ret = reviews.filter(r=>bookId == r.bookId);
    return ret;
}

createReview = (review) => {
    reviews.push(review);
}

module.exports = {
    findAllReviews,
    findReviewsByUserId,
    findReviewsByBookId,
    createReview
};
