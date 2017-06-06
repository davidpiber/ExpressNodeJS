let express =  require('express');
let mongodb = require('mongodb').MongoClient;
let objectId = require('mongodb').ObjectID;
let bookRouter =  express.Router();

let router = nav => {
    // Routes

bookRouter.route('/').get((req, res) => {

let url = 'mongodb://localhost:27017/libraryApp';
    mongodb.connect(url, (err, db) => {
        let collection  = db.collection('books');
        collection.find({}).toArray((error, results) => {
                res.render('bookListView', { 
                title: 'Books',
                nav: nav,
                books: results
                });
            });
        });
    });

bookRouter.route('/:id')
    .get((req, res) => {

        let id =  objectId(req.params.id);
        let url = 'mongodb://localhost:27017/libraryApp';

        mongodb.connect(url, (err, db) => {
            let collection  = db.collection('books');
            collection.findOne( { _id: id }, (error, results) => {
                res.render('bookView', { 
                title: 'Books',
                nav: nav,
                book: results
                });
            });
        });
    });

    return bookRouter;
};
module.exports = router;