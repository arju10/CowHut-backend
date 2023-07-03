import express, { Application, Request, Response } from "express";
const app: Application = express();
import cors from "cors";

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Routes
import UserRoute from "./User/User.route";
app.use("/api/v1",UserRoute);

export default app;