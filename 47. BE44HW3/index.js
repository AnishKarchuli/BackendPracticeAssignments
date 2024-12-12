const express = require('express')
const app = express();
const cors = require('cors');
require('dotenv').config();
const { initializeDatabase } = require('./db/db.connect');
const Book = require('./models/books.models')

app.use(express.json());
initializeDatabase();

const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));

// To Create New Book
async function createBook(newBook){
    try{
        const book = new Book(newBook)
        const saveBook = await book.save();
        return saveBook;
    }catch(error){
        throw error;
    }
}

app.post('/books', async (req, res) => {
    try{
        const savedBook = await createBook(req.body)
        res.status(201).json({message: 'Book added successfully.', book: savedBook})
    }catch(error){
        res.status(500).json({error: 'Failed to add Book.'})
    }
})

//read all books from database
async function readAllBooks(){
    try{
        const allBooks = await Book.find();
        return allBooks;
    }catch(error){
        throw error;
    }
}

app.get("/books", async (req, res) => {
    try{
        const books = await readAllBooks();
        if (books.length != 0) {
            res.json(books)
        } else  {
            res.status(404).json({error: "No books found."})
        }
    }catch (error){
        res.status(500).json({error: "Failed to fetch Books."})
    }
})

// read book by title
async function readBookByTitle(bookTitle){
    try{
        const book = await Book.findOne({ title: bookTitle })
        return book;
    }catch(error){
        throw error;
    }
}

app.get("/books/:bookTitle", async (req, res) => {
    try{
        const book = await readBookByTitle(req.params.bookTitle);
        if(book){
            res.json(book)
        } else {
            res.status(404).json({error: "Book not found."})
        }
    }catch(error){
        res.status(500).json({error: "Failed to fetch Book."})
    }
})

// read book by author
async function readBookByAuthor(authorName) {
    try{
        const book = await Book.findOne({ author: authorName })
        return book;
    }catch(error){
        throw error;
    }
}

app.get("/books/author/:authorName", async (req, res) => {
    try {
        const book = await readBookByAuthor(req.params.authorName)
        if(book){
            res.json(book);
        } else {
            res.status(404).json({error: "Book not found."})
        }
    }catch(error) {
        res.status(500).json({error: "Failed to fetch Book."})
    }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
});