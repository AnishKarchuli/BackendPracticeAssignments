const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello from express server.")
})

app.get('/signin', (req, res) => {
    res.send("This is the Sign In page.")
})

app.get('/booking', (req, res) => {
    res.send("Book your tickets here.")
})

app.get('/clothing/kids', (req, res) => {
    res.send("This is the kids wear page.")
})

app.get('/blog', (req, res) => {
    res.send("This is the blog page.")
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})