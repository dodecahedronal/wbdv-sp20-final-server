const mongoose = require('mongoose')
const reviewSchema = require('./review.schema.server')
const reviewModel = mongoose.model('ReviewModel', reviewSchema)

reviews =[
    {
        'reviewId': '123',
        'rating': 5,
        'content': 'This was a really good book. I like it a lot.',
        'userId': '123',
        'bookId': '3',
        'reviewTime': ''}
]

findAllReviews = () => {
    return reviewModel.find();
    //return reviews;
}

findReviewsByUserId = (userId) =>
{
    //let ret = reviews.filter(r=>userId == r.userId);
    return reviewModel.find({userId: userId})
}

findReviewsByBookId = (bookId) =>
{
    //let ret = reviews.filter(r=>bookId == r.bookId);
    return reviewModel.find({bookId: bookId});
}

createReview = (review) => {
    return reviewModel.create(review);
    //reviews.push(review);
}

deleteReview = (reviewId) => {
    return reviewModel.deleteOne({_id: reviewId}, (err) => {
        if (err) {
            console.log(err)
        }
    })
}

module.exports = {
    findAllReviews,
    findReviewsByUserId,
    findReviewsByBookId,
    createReview, 
    deleteReview
};
