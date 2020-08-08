import express from 'express';

import { fromArray } from './random';
import art from './art';
import cors from './cors';
import music from './music';

const { PORT } = process.env;

const app = express();

cors(app);

app.get('/art', (req, res) => {
    const { name, pieces } = fromArray(art);
    res.send({
        name,
        url: pieces.length === 1 ? pieces[0] : fromArray(pieces),
    });
});

app.get('/music', (req, res) => {
    res.send({ url: fromArray(music) });
});

app.listen(PORT || 9000, () => {
    console.log('App started');
});
