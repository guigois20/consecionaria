import express from "express";
import "dotenv/config";
import route from "./domains/users/routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use("/users", route);

app.listen(PORT, () => {
  console.log(`o servidor esta rodando na porta : ${PORT}`);
});
