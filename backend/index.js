import express from "express";
import "dotenv/config";
import route from "./domains/users/routes.js";

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use("/users", route);

app.listen(PORT, () => {
  console.log(`o servidor esta rodando na porta : ${PORT}`);
});
