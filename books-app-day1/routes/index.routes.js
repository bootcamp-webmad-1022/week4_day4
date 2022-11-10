const express = require('express');
const router = express.Router();

const Book = require('./../models/Book.model')

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
})

// Books list
router.get('/libros/listado', (req, res) => {

  Book
    .find()
    .select({ title: 1 })
    .then(booksFromDB => {
      res.render('books/list', { books: booksFromDB })
    })
    .catch(err => console.log(err))
})


// Book details
router.get('/libros/detalle/:book_id', (req, res) => {

  const { book_id } = req.params

  Book
    .findById(book_id)
    .then(bookFromDB => {
      res.render('books/details', bookFromDB)
    })
    .catch(err => console.log(err))

})



module.exports = router;
