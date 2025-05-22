import express from 'express';
import router from './src/routers/index.js';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api', router);


app.get('/', (req, res) => {
    res.send("aiaiaiaia");
});

app.listen(port, () => {
    console.log(`Ouvindo em http://localhost:${port}`);
});