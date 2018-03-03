import express from 'express';
import path from 'path';

const PORT = 8080;
let app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(PORT, () => {
    console.log(`Express server is running on port ${PORT}`);
});