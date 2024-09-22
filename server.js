const express = require('express');
const path = require('path');
const cors = require('cors');
const popularNews = require('./data/popularNews');
const tagNews = require('./data/tagNews');

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

app.get('/news', (req, res) => {
    const baseUrl = `${req.protocol}://${req.get('host')}/assets`;

    const responseData = {
        image: `${baseUrl}/gambar.jpeg`,
        title: 'This is testing a article',
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla felis leo, vehicula ac hendrerit ac, volutpat id quam. Etiam massa lacus, pulvinar id sollicitudin quis, congue non felis. Pellentesque ipsum odio, faucibus at hendrerit scelerisque, consequat vitae urna. Cras vulputate sagittis dui commodo scelerisque. Quisque ut auctor orci. Mauris sed dictum elit. Sed sollicitudin rhoncus purus, sit amet tempor ligula pulvinar vel. Aenean eget interdum nisl. Integer scelerisque nibh nec est blandit lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam ac aliquam ligula, eu malesuada augue. Duis fermentum lacus a felis bibendum egestas.`
    };

    res.json(responseData);
});

app.get('/popular-news', (req, res) => {
    const baseUrl = `${req.protocol}://${req.get('host')}/assets`;

    const newsWithImages = popularNews.map(news => ({
        ...news,
        image: `${baseUrl}/${news.image}`
    }));

    res.json(newsWithImages);
});

app.get('/tag', (req, res) => {
    res.json(tagNews);
})

app.get('/news-video', (req, res) => {
    const baseUrl = `${req.protocol}://${req.get('host')}/assets`;

    const responseData = {
        video: `${baseUrl}/goldengate.mp4`,
        audio: `${baseUrl}/ringtone_mTeam.mp3`,
        title: 'This is testing a article with videos',
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla felis leo, vehicula ac hendrerit ac, volutpat id quam. Etiam massa lacus, pulvinar id sollicitudin quis, congue non felis. Pellentesque ipsum odio, faucibus at hendrerit scelerisque, consequat vitae urna. Cras vulputate sagittis dui commodo scelerisque. Quisque ut auctor orci. Mauris sed dictum elit. Sed sollicitudin rhoncus purus, sit amet tempor ligula pulvinar vel. Aenean eget interdum nisl. Integer scelerisque nibh nec est blandit lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam ac aliquam ligula, eu malesuada augue. Duis fermentum lacus a felis bibendum egestas.`
    };

    res.json(responseData);
});

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
