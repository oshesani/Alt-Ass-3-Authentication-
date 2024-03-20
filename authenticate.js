const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const port = 4000;


app.use(bodyParser.json());


app.use((req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const [username, password] = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
        req.auth = { username, password };
    }
    next();
});


app.get('/books', (req, res) => {
    res.json({ message: 'Here it is' });
});

app.post('/books', (req, res) => {
    res.json({ message: 'Created a new book' });
});

app.put('/books/:id', (req, res) => {
    const bookId = req.params.id;
    res.json({ message: `Update book with ID ${bookId}` });
});

app.patch('/books/:id', (req, res) => {
    const bookId = req.params.id;
    res.json({ message: `Partial update book with ID ${bookId}` });
});

app.delete('/books/:id', (req, res) => {
    const bookId = req.params.id;
    res.json({ message: `Successfully deleted with ID ${bookId}` });
});


app.get('/authors', (req, res) => {
    res.json({ message: 'These are the authors' });
});

app.post('/authors', (req, res) => {
    res.json({ message: 'Created' });
});

app.put('/authors/:id', (req, res) => {
    const authorId = req.params.id;
    res.json({ message: `Updated with ID ${authorId}` });
});

app.patch('/authors/:id', (req, res) => {
    const authorId = req.params.id;
    res.json({ message: `Partial update author with ID ${authorId}` });
});

app.delete('/authors/:id', (req, res) => {
    const authorId = req.params.id;
    res.json({ message: `Deleted author with ID ${authorId}` });
});


app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
