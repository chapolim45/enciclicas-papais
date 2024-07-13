import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const port = process.env.PORT || 3000;

// Mimic __dirname behavior in ES module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'pages', 'index.html'));
})

app.get('/enciclical/anglicanorum_coetibus', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'pages', 'enciclical', 'anglicanorum_coetibus.html'));
});

app.get('/to_be_implemented', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'pages', 'enciclical', 'to_be_implemented.html'));
});

app.listen(port, () => {
    console.log(`🚀🚀🚀 Server is running on port ${port}`);
    console.log(`Open http://localhost:${port} in your browser`);
});