import express from 'express';
import path from 'path';

const PORT = 8080;
let app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/page-1', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/page-1.html'));
});

app.listen(PORT, () => {
    console.log(`Express server is running on port ${PORT}`);
});