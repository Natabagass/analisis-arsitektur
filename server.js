const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5000;
app.use(cors());

app.get('/image', (req, res) => {
    const imageUrl = `${req.protocol}://${req.get('host')}/assets/gambar.jpeg`;
    res.json({ url: imageUrl });
});

app.get('/video', (req, res) => {
    const videoUrl = `${req.protocol}://${req.get('host')}/assets/goldengate.mp4`;
    res.json({ url: videoUrl });
});

app.get('/audio', (req, res) => {
    const audioUrl = `${req.protocol}://${req.get('host')}/assets/ringtone_mTeam.mp3`;
    res.json({ url: audioUrl });
});

app.get('/text', (req, res) => {
    const text = "This is a sample text returned directly as a string.";
    res.send({ text: text });
});

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.listen(PORT, () => {
    console.log(`Udah jalan bos`);
});
