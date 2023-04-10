import express, { Request, Response } from 'express';
import cors from 'cors';
import * as fs from 'fs';
// import * as bodyParser from 'body-parser';
import helmet from "helmet";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(helmet());
// app.use(bodyParser.json());

interface Item {
    owner: string;
    name: string;
    image_url: string;
    price: string;
    change: string;
}


app.get('/categories', (_req: Request, res: Response) => {
    fs.readFile('./categories.json', 'utf-8', (err, data) => {
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

app.get('/trending', (_req: Request, res: Response) => {
    fs.readFile('./trending.json', 'utf-8', (err, data) => {
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

app.get('/arts', (_req: Request, res: Response) => {
    fs.readFile('./arts.json', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Server Error');
            return;
        }

        const items: Item[] = JSON.parse(data).items;
        const result = items.map((item) => ({
            name: item.name,
            image_url: item.image_url,
            owner: item.owner
        }));

        res.send(result);
    });
});

app.get('/auctions', (_req: Request, res: Response) => {
    fs.readFile('./auctions.json', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Server Error');
            return;
        }

        const items: Item[] = JSON.parse(data).items;
        const result = items.map((item) => ({
            name: item.name,
            image_url: item.image_url,
            owner: item.owner,
            price: item.price,
            change: item.change
        }));

        res.send(result);
    });
});


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
