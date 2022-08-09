import express, { Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const server = express();

server.use(express.static(path.join(__dirname, "../public")));

server.use(express.urlencoded({ extended: true }));

server.use((req: Request, res: Response) => {
  res.status(404);
  res.json({error: 'Endpoit Not Found'});
});

server.listen(process.env.PORT, () => {
  console.log("Server started on port 4000! 🏆 🚀🚀🚀");
});
