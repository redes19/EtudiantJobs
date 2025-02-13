import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({path: './src/.env'});

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello word');
});

app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
})