import express, { Request, Response } from 'express';
import cors from 'cors';
import * as fs from 'fs';

const app = express();
app.use(cors());
const port = 3000;

interface Item {
    name: string;
    image_url: string;
}

app.get('/categories', (req: Request, res: Response) => {
    fs.readFile('./data.json', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Server Error');
            return;
        }

        const items: Item[] = JSON.parse(data).items;
        const result = items.map((item) => ({
            name: item.name,
            image_url: item.image_url,
        }));

        res.send(result);
    });
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
