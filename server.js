const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

app.get('/data', (req, res) => {
    const baseUrl = `${req.protocol}://${req.get('host')}/assets`;

    const imageUrl = `${baseUrl}/gambar.jpg`;
    const videoUrl = `${baseUrl}/video.mp4`;
    const audioUrl = `${baseUrl}/audio/sample.mp3`;
    const text = "This is a sample text returned directly as a string.";

    res.json({
        imageUrl: imageUrl,
        videoUrl: videoUrl,
        audioUrl: audioUrl,
        text: text
    });
});

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
