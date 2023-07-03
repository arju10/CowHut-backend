import express, { Application, Express, NextFunction, Request, Response } from 'express';
import ConnectDatabase from "./config/db/db";
import app from "./app";

const port = process.env.PORT || 5000;


// Connect Database
ConnectDatabase();


app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Server is running successfully');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
