import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';

const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
import UserRoutes from "./User/User.route";
import CowRoutes from "./Cow/Cow.Route";
import OrderRoutes from "./Order/Order.Route";
app.use('/api/v1', UserRoutes);
app.use('/api/v1',CowRoutes);
app.use('/api/v1',OrderRoutes)


export default app;