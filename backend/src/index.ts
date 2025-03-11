import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db  from './model/db.model';
import appRoutes from "./app.routes";

dotenv.config({path: './src/.env'});

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello word');
});

app.use('/api', appRoutes);

db.getConnection()
  .then(() => console.log('Connected to the database'))
  .catch((err: any) => console.log('Error connecting to the database: ', err));

app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
})