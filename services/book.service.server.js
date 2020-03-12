
const FIND_BOOK_URL = "https://www.goodreads.com/search/index.xml"

const {GR_KEY, GR_SECRET} = require("../common/grkey");
const goodreads = require('goodreads-api-node');
const myCredentials = {
	key: GR_KEY,
	secret: GR_SECRET
  };
   
const gr = goodreads(myCredentials);

module.exports = function (app) {
  
	function findBooks(req, res) {
		let query = req.params['query'];
		console.log(query);
		gr.searchBooks({q : query})
			.then((results) => {
				let tmp = results.search.results;
				let books = []
				for (b of tmp.work)
				{
					books.push({
						id : b.best_book.id._,
						average_rating: b.average_rating,
						title : b.best_book.title,
						author : b.best_book.author.name,
						image_url : b.best_book.image_url,
						small_image_url : b.best_book.small_image_url
					})
				}
				res.send(books)
			})
	}

	function findBookById(req, res) {
		let id = req.params['id'];
		console.log(id);
		gr.showBook(id)
			.then((results) => {
				res.send(results.book);
			})
	}

	function findReviewsByTitle(req, res) {
		let title = req.params['title'];
		console.log(id);
		gr.showBook(title)
			.then((results) => {
				console.log(results);
				res.send(results.book);
			})
	}

	function findBookByAuthor(req,res){
		let author = req.params['author'];
		gr.getBooksByAuthor(author)
			.then((results) => {
				res.send(results)
			})
    }
	
	app.get('/api/search/:query', findBooks);
	app.get('/api/book/:id', findBookById);
	app.get('/api/title/:title', findReviewsByTitle);
	app.get('/api/author/:author', findBookByAuthor);
   
}