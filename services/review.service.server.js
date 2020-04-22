
module.exports = function (app) {

    const reviewModel = require('../models/review.model.server');

    findAllReviews = (req, res) => {
        reviewModel.findAllReviews()
            .then(reviews => {
                res.send(reviews);
            });

        //const reviews = reviewModel.findAllReviews();
        //res.json(reviews);
    }

    findReviewsByUserId = (req, res) => {
        let userId = req.params['uid']
        reviewModel.findReviewsByUserId(userId)
            .then(function (reviews) {
                res.json(reviews);
            })

        /*
        let userId = req.params['uid'];
        console.log(userId);
        const reviews = reviewModel.findReviewsByUserId(userId);
        res.json(reviews);
        */
    }

    findReviewsByBookId = (req, res) => {
        let bookId = req.params['bid']
        reviewModel.findReviewsByBookId(bookId)
            .then(function (reviews) {
                res.json(reviews);
            })

        /*
        let bookId = req.params['bid']
        const reviews = reviewModel.findReviewsByBookId(bookId)
        res.json(reviews);
        */
    }

    createReview = (req, res) => {
        //console.log(req.body);
        var review = req.body;

        reviewModel.createReview(review)
            .then(function (review) {
                res.status(200);
                res.json(review);
            })

        //reviewModel.createReview(review);
    }

    deleteReview = (req,res) => {
        let reviewId = req.params['rid']
        reviewModel.deleteReview(reviewId)
            .then(deleteInfo => {
                res.status(200);
                res.send(deleteInfo)
            })
    }

    app.post('/api/review', createReview);
    app.get('/api/review', findAllReviews);
    app.delete('/api/review/:rid', deleteReview)
    app.get('/api/user/:uid/review', findReviewsByUserId);
    app.get('/api/book/:bid/review', findReviewsByBookId);
};