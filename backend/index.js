import express from "express";
import "dotenv/config";
import route from "./domains/users/routes.js";
import cors from "cors";

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use(cors());
app.use("/users", route);

app.listen(PORT, () => {
  console.log(`o servidor esta rodando na porta : ${PORT}`);
});
