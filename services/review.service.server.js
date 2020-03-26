
module.exports = function(app) {

    const reviewModel = require('../models/review.model.server');

    findAllReviews = (req, res) => {
       const reviews = reviewModel.findAllReviews();
       res.json(reviews);
    }

    findReviewsByUserId = (req, res) => {
        /** 
        let userId = req.params['uid']
        reviewModel.findReviewsByUserId(userId)
            .then(function (reviews) {
                res.json(reviews);
            })
        */

       let userId = req.params['uid'];
       console.log(userId);
       const reviews = reviewModel.findReviewsByUserId(userId);
       res.json(reviews);
    }

    findReviewsByBookId = (req, res) => {
        /** 
        let bookId = req.params['bid']
        reviewModel.findReviewsByBookId(bookId)
            .then(function (reviews) {
                res.json(reviews);
            })
        */

       let bookId = req.params['bid']
       const reviews = reviewModel.findReviewsByBookId(bookId)
       res.json(reviews);
    }

    createReview = (req, res) => {
        console.log(req.body);
        var review = req.body;

       reviewModel.createReview(review);
       res.status(200);
       res.json(review);
    }

    app.post('/api/review', createReview);
    app.get('/api/review', findAllReviews);
    app.get('/api/user/:uid/review', findReviewsByUserId);
    app.get('/api/book/:bid/review', findReviewsByBookId);
};