import express from "express";
import UserRoutes from './Business/User/user.routes';

const app = express();

app.use(express.json());

app.use('/user', UserRoutes);

export default app;