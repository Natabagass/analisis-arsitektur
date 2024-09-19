const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/media', (req, res) => {
    const baseUrl = `${req.protocol}://${req.get('host')}/assets`;
    
    const responseData = {
        image: `${baseUrl}/gambar.jpeg`,
        video: `${baseUrl}/goldengate.mp4`,
        audio: `${baseUrl}/ringtone_mTeam.mp3`,
        text: "This is a sample text returned directly as a string."
    };
    
    res.json(responseData);
});

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
