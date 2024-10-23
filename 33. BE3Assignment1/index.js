const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, This is Express Assignment Server.')
})

const albums = [
    {id: 1, title: 'Abbey Road', artist: 'The Beatles', year: 1969},
    {id: 2, title: 'The Dark Side of the Moon', artist: 'Pink Floyd', year: 1973},
    {id: 3, title: 'Thriller', artist: 'Michael Jackson', year: 1982}
]

app.post('/albums', (req, res) => {
    const newAlbum = req.body; // {"id": 4, "title": "Back in Black", "artist": "AC/DC", "year": 1980}

    if(!newAlbum.title || !newAlbum.artist || !newAlbum.year){
        res.status(400).json({error: "Title, artist and year are required."})
    } else {
        albums.push(newAlbum)
        res.status(201).json({message: "Album added successfully", album: newAlbum})
    }
})

app.get('/albums', (req, res) => {
    res.send(albums)
})

app.delete('/albums/:id', (req, res) => {
    const albumId = parseInt(req.params.id)

    const index = albums.findIndex(album => album.id === albumId)

    if(index === -1){
        res.status(404).json({error: 'Album not found'})
    } else {
        albums.splice(index, 1)
        res.status(200).json({message: "Album deleted successfully."})
    }
})


app.post('/albums/:id', (req, res) => {
    const albumId = parseInt(req.params.id)
    const updatedAlbumData = req.body; // {"id": 1, "title": "Rumours", "artist": "Fleetwood Mac", "year": 1977}

    const albumToUpdate = albums.find((album) => album.id === albumId)

    if(!albumToUpdate){
        res.status(404).json({error: "Album not found"})
    } else {
        if(!updatedAlbumData.title || !updatedAlbumData.artist || !updatedAlbumData.year){
            res.status(400).json({error: "Title, artist and year are required"})
        } else {
            Object.assign(albumToUpdate, updatedAlbumData)
            res.status(200).json({message: 'Album data updated successfully.'})
        }
    }
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})